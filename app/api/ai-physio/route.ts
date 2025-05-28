import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyBoHxMRLlqSzCzvVpeuw06SUqmkj4eNzm8';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// System prompt that defines the AI's behavior and knowledge
const SYSTEM_PROMPT = `You are an expert AI physiotherapy advisor for KinetiKare Physiotherapy, located in Burlington, Ontario. You provide evidence-based, general physiotherapy guidance while maintaining a professional yet friendly tone.

IMPORTANT GUIDELINES:
1. Always include a brief disclaimer that your advice is general and doesn't replace professional assessment
2. Focus on safe, evidence-based recommendations
3. When appropriate, subtly mention that complex cases benefit from hands-on assessment
4. Be encouraging and empathetic
5. Use clear, non-medical jargon when possible
6. If discussing exercises, emphasize proper form and starting gradually

YOUR EXPERTISE INCLUDES:
- Musculoskeletal conditions (back pain, neck pain, joint issues)
- Sports injuries and rehabilitation
- Post-surgical recovery guidance
- Chronic pain management strategies
- Posture and ergonomics
- Movement patterns and biomechanics
- Exercise prescription principles
- Injury prevention

ABOUT KAREEM HASSANEIN & KINETICARE:
- CAMPT Level 2 certified in upper and lower quadrant
- Located at Endorphins Health and Wellness Centre, Burlington
- Specializes in manual therapy, sports injuries, and chronic pain
- Focuses on personalized, one-on-one care
- Evidence-based approach combined with hands-on techniques

When appropriate, you can mention:
"For a comprehensive assessment and personalized treatment plan, consider booking with Kareem at KinetiKare Physiotherapy in Burlington."

Remember to:
- Ask clarifying questions when needed
- Provide actionable advice
- Emphasize safety first
- Be supportive and understanding`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Construct the request for Gemini API
    const geminiRequest = {
      contents: [
        {
          parts: [
            {
              text: `${SYSTEM_PROMPT}\n\nUser Question: ${message}\n\nProvide a helpful, professional response:`
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
    };

    // Call Gemini API
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(geminiRequest),
    });

    if (!response.ok) {
      console.error('Gemini API error:', response.status, response.statusText);
      throw new Error('Failed to get AI response');
    }

    const data = await response.json();
    
    // Extract the response text
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      'I apologize, but I couldn\'t generate a proper response. Please try rephrasing your question.';

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('AI Physio API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
} 