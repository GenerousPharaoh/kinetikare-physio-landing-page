# AI Chatbot Memory System (NOT Patient Records!)

## What This Is

This is a **memory system for your AI chatbot** - like giving your AI assistant a notebook to remember conversations. It has NOTHING to do with real patient medical records!

## What It Does

### ✅ For Website Visitors
- **Remembers Context**: If someone says "I have back pain" in one chat, the AI remembers in the next chat
- **Personalized Responses**: The AI can say "Based on the back pain you mentioned earlier..."
- **Better Help**: No need to re-explain everything in each conversation

### ✅ For You (The Developer)
- **Smarter AI**: Your AI assistant gets better over time
- **Common Questions**: Track what people ask about most
- **Improve Service**: Understand what information visitors need

## What It Does NOT Do

### ❌ This is NOT:
- A patient management system
- Medical record storage
- HIPAA-compliant documentation
- Clinical notes system
- Real patient files

## Example of What Gets Stored

```json
// This is what the AI remembers:
{
  "conversations": [
    {
      "date": "2025-01-08",
      "summary": "Visitor asked about exercises for lower back pain",
      "topics": ["back pain", "exercises"]
    }
  ]
}
```

**NOT** actual medical records like:
- Patient names
- Medical history
- Treatment plans
- Clinical diagnoses

## Folder Structure

```
physiotherapy-next/
├── data/
│   ├── knowledge-graph.jsonl     # AI's knowledge about physio concepts
│   └── ai-physio-memory.json    # AI's conversation memory
└── ai-conversations/            # Exported chat summaries (NOT patient files!)
```

## Privacy & Security

- **Anonymous**: No personal health information stored
- **Local Only**: Everything stays on your computer
- **General Guidance**: AI only provides general physiotherapy information
- **No Medical Records**: This is just for chatbot intelligence, not clinical use

## Think of it Like...

Imagine your AI assistant has a notebook where it writes:
- "Someone asked about back pain exercises today"
- "Lots of people ask about posture"
- "This person prefers simple explanations"

It's NOT writing:
- "John Smith, age 45, diagnosed with L4-L5 disc herniation"
- "Patient #12345 treatment plan"

## The Bottom Line

This makes your **AI chatbot smarter** by remembering conversations. It's like ChatGPT's memory feature - helpful for continuity, but NOT for storing real medical information!

If you need actual patient management, you'd use a proper medical records system, not this AI memory feature. 