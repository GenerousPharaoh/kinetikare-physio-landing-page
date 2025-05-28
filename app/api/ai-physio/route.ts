import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyBoHxMRLlqSzCzvVpeuw06SUqmkj4eNzm8';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// Path to knowledge graph and memory files
const KNOWLEDGE_GRAPH_PATH = join(process.cwd(), 'data', 'knowledge-graph.jsonl');
const MEMORY_PATH = join(process.cwd(), 'data', 'ai-physio-memory.json');

// Enhanced system prompt with knowledge graph awareness
const SYSTEM_PROMPT = `You are an expert AI physiotherapy advisor for KinetiKare Physiotherapy, operated by Kareem Hassanein, CAMPT Level 2 certified physiotherapist in Burlington, Ontario.

MEMORY & CONTEXT MANAGEMENT:
- You have access to a persistent knowledge graph containing physiotherapy information, user interactions, and treatment approaches
- Always begin by recalling relevant context from previous conversations when applicable
- Store important user information, preferences, and case details for future reference
- Build connections between conditions, treatments, and user-specific information

KNOWLEDGE BASE ACCESS:
You have access to a comprehensive knowledge graph including:
- Physiotherapy conditions and their relationships
- Treatment modalities and their effectiveness
- User preferences and interaction history
- Clinical insights and evidence-based approaches

RESPONSE GUIDELINES:
1. DISCLAIMER: Always include a brief disclaimer that your advice is general and doesn't replace professional assessment
2. EVIDENCE-BASED: Focus on safe, evidence-based recommendations backed by physiotherapy research
3. PERSONALIZATION: Use stored knowledge about the user to provide personalized guidance
4. REFERRAL GUIDANCE: When appropriate, mention that complex cases benefit from hands-on assessment at KinetiKare Physiotherapy
5. CONTEXT AWARENESS: Reference previous conversations and build upon established treatment plans when relevant

MEMORY UPDATING:
- Store new user information (symptoms, preferences, progress updates)
- Track conversation themes and treatment recommendations
- Note user engagement patterns and preferred communication style
- Build entity relationships between conditions, treatments, and user responses

PROFESSIONAL BOUNDARIES:
- Provide general guidance only, never specific diagnoses
- Emphasize the importance of professional assessment for complex issues
- Maintain professional tone while being approachable and helpful
- Always prioritize user safety in recommendations`;

interface MemoryEntity {
  name: string;
  entityType: string;
  observations: string[];
}

interface MemoryRelation {
  from: string;
  to: string;
  relationType: string;
}

interface ConversationRecord {
  date: string;
  summary: string;
  user_id?: string;
  key_topics?: string[];
}

interface MemoryData {
  entities: MemoryEntity[];
  relations: MemoryRelation[];
  conversations: ConversationRecord[];
  system_info: {
    version: string;
    last_updated: string;
    features: string[];
  };
}

// Load knowledge graph data
function loadKnowledgeGraph(): any[] {
  try {
    if (!existsSync(KNOWLEDGE_GRAPH_PATH)) return [];
    const data = readFileSync(KNOWLEDGE_GRAPH_PATH, 'utf-8');
    return data.split('\n').filter(line => line.trim()).map(line => JSON.parse(line));
  } catch (error) {
    console.error('Error loading knowledge graph:', error);
    return [];
  }
}

// Load memory data
function loadMemory(): MemoryData {
  try {
    if (!existsSync(MEMORY_PATH)) {
      return {
        entities: [],
        relations: [],
        conversations: [],
        system_info: {
          version: "1.0.0",
          last_updated: new Date().toISOString().split('T')[0],
          features: ["knowledge_graph_integration", "persistent_memory"]
        }
      };
    }
    return JSON.parse(readFileSync(MEMORY_PATH, 'utf-8'));
  } catch (error) {
    console.error('Error loading memory:', error);
    return {
      entities: [],
      relations: [],
      conversations: [],
      system_info: {
        version: "1.0.0",
        last_updated: new Date().toISOString().split('T')[0],
        features: ["knowledge_graph_integration", "persistent_memory"]
      }
    };
  }
}

// Save memory data
function saveMemory(memoryData: MemoryData): void {
  try {
    memoryData.system_info.last_updated = new Date().toISOString().split('T')[0];
    writeFileSync(MEMORY_PATH, JSON.stringify(memoryData, null, 2));
  } catch (error) {
    console.error('Error saving memory:', error);
  }
}

// Generate context from knowledge graph and memory
function generateContext(userMessage: string): string {
  const knowledgeGraph = loadKnowledgeGraph();
  const memory = loadMemory();
  
  // Extract relevant entities and relationships
  const relevantEntities = knowledgeGraph.filter(item => 
    item.type === 'entity' && 
    (userMessage.toLowerCase().includes(item.name.toLowerCase()) ||
     item.observations?.some((obs: string) => 
       userMessage.toLowerCase().includes(obs.toLowerCase().split(' ')[0])
     ))
  );

  const relevantRelations = knowledgeGraph.filter(item => 
    item.type === 'relation' &&
    relevantEntities.some(entity => entity.name === item.from || entity.name === item.to)
  );

  // Recent conversation context
  const recentConversations = memory.conversations.slice(-5);

  let context = "RELEVANT CONTEXT FROM KNOWLEDGE BASE:\n";
  
  if (relevantEntities.length > 0) {
    context += "Relevant Conditions/Treatments:\n";
    relevantEntities.forEach(entity => {
      context += `- ${entity.name} (${entity.entityType}): ${entity.observations?.join(', ') || 'No observations'}\n`;
    });
  }

  if (relevantRelations.length > 0) {
    context += "\nRelated Treatment Relationships:\n";
    relevantRelations.forEach(relation => {
      context += `- ${relation.from} ${relation.relationType} ${relation.to}\n`;
    });
  }

  if (recentConversations.length > 0) {
    context += "\nRecent Conversation Context:\n";
    recentConversations.forEach(conv => {
      context += `- ${conv.date}: ${conv.summary}\n`;
    });
  }

  return context;
}

// Update memory with conversation details
function updateMemory(userMessage: string, aiResponse: string): void {
  const memory = loadMemory();
  
  // Add conversation summary
  const today = new Date().toISOString().split('T')[0];
  const conversationSummary = {
    date: today,
    summary: `User asked about: ${userMessage.substring(0, 100)}${userMessage.length > 100 ? '...' : ''}. Provided guidance on physiotherapy approaches.`,
    key_topics: extractKeyTopics(userMessage)
  };

  memory.conversations.push(conversationSummary);

  // Keep only last 50 conversations to prevent unlimited growth
  if (memory.conversations.length > 50) {
    memory.conversations = memory.conversations.slice(-50);
  }

  saveMemory(memory);
}

// Extract key topics from user message
function extractKeyTopics(message: string): string[] {
  const commonPhysioTerms = [
    'back pain', 'neck pain', 'shoulder pain', 'knee pain', 'hip pain',
    'exercise', 'stretching', 'strengthening', 'mobility', 'posture',
    'injury', 'recovery', 'rehabilitation', 'treatment', 'therapy'
  ];

  return commonPhysioTerms.filter(term => 
    message.toLowerCase().includes(term.toLowerCase())
  );
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Generate context from knowledge graph and memory
    const contextualInfo = generateContext(message);

    // Combine system prompt with contextual information
    const enhancedPrompt = `${SYSTEM_PROMPT}\n\n${contextualInfo}\n\nUser Question: ${message}`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: enhancedPrompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH", 
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, but I encountered an error processing your request.';

    // Update memory with this conversation
    updateMemory(message, aiResponse);

    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error('Error in AI Physio API:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
} 