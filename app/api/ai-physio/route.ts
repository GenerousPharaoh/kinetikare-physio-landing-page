import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyBoHxMRLlqSzCzvVpeuw06SUqmkj4eNzm8';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// Simple system prompt
const SYSTEM_PROMPT = `You are an expert AI physiotherapy advisor for KinetiKare Physiotherapy, operated by Kareem Hassanein, CAMPT Level 2 certified physiotherapist in Burlington, Ontario.

RESPONSE GUIDELINES:
1. DISCLAIMER: Always include a brief disclaimer that your advice is general and doesn't replace professional assessment
2. EVIDENCE-BASED: Focus on safe, evidence-based recommendations backed by physiotherapy research
3. REFERRAL GUIDANCE: When appropriate, mention that complex cases benefit from hands-on assessment at KinetiKare Physiotherapy
4. PROFESSIONAL BOUNDARIES: Provide general guidance only, never specific diagnoses

Always prioritize user safety in recommendations.`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    console.log('API Key available:', !!GEMINI_API_KEY);
    console.log('API Key length:', GEMINI_API_KEY?.length);

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
                text: `${SYSTEM_PROMPT}\n\nUser Question: ${message}`
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

    console.log('Gemini response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Gemini response structure:', Object.keys(data));
    
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, but I encountered an error processing your request.';

    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error('Error in AI Physio API:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
} 