#!/bin/bash

echo "🤖 KinetiKare AI Chatbot Memory Setup"
echo "====================================="
echo "This sets up memory for your AI assistant (NOT patient records!)"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm found"

# Install MCP packages
echo "📦 Installing MCP packages for AI memory..."
npm install -g mcp-knowledge-graph @modelcontextprotocol/server-memory @modelcontextprotocol/server-filesystem

# Create Claude Desktop config directory if it doesn't exist
CLAUDE_CONFIG_DIR=""
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    CLAUDE_CONFIG_DIR="$HOME/Library/Application Support/Claude"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    CLAUDE_CONFIG_DIR="$HOME/.config/Claude"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    # Windows
    CLAUDE_CONFIG_DIR="$APPDATA/Claude"
fi

if [ ! -z "$CLAUDE_CONFIG_DIR" ]; then
    mkdir -p "$CLAUDE_CONFIG_DIR"
    echo "📁 Claude config directory: $CLAUDE_CONFIG_DIR"
else
    echo "⚠️  Could not determine Claude config directory for your OS"
fi

# Get current directory
CURRENT_DIR=$(pwd)
DATA_DIR="$CURRENT_DIR/data"
AI_CONVERSATIONS_DIR="$CURRENT_DIR/ai-conversations"

# Create Claude Desktop configuration
CLAUDE_CONFIG_FILE="$CLAUDE_CONFIG_DIR/claude_desktop_config.json"

echo "⚙️  Creating Claude Desktop configuration..."

cat > "$CLAUDE_CONFIG_FILE" << EOF
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-knowledge-graph",
        "--memory-path",
        "$DATA_DIR/knowledge-graph.jsonl"
      ],
      "autoapprove": [
        "create_entities",
        "create_relations", 
        "add_observations",
        "delete_entities",
        "delete_observations",
        "delete_relations",
        "read_graph",
        "search_nodes",
        "open_nodes"
      ]
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "--allow-dirs",
        "$DATA_DIR",
        "--allow-dirs", 
        "$AI_CONVERSATIONS_DIR"
      ]
    },
    "ai-physio-context": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ],
      "env": {
        "MEMORY_FILE_PATH": "$DATA_DIR/ai-physio-memory.json"
      }
    }
  }
}
EOF

echo "✅ Claude Desktop configuration created at: $CLAUDE_CONFIG_FILE"

# Display next steps
echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "Next Steps:"
echo "1. Restart Claude Desktop completely (quit and reopen)"
echo "2. In Claude Desktop, go to Settings > Developer to verify MCP servers are running"
echo "3. You should see 'memory', 'filesystem', and 'ai-physio-context' listed"
echo ""
echo "What This Does:"
echo "✅ AI remembers conversations (like ChatGPT's memory)"
echo "✅ Provides better, personalized responses"
echo "✅ Tracks common questions for service improvement"
echo "✅ Makes your AI assistant smarter over time"
echo ""
echo "What This Does NOT Do:"
echo "❌ Store real patient medical records"
echo "❌ Create clinical documentation"
echo "❌ Replace practice management systems"
echo ""
echo "Data Storage Locations:"
echo "🤖 AI Knowledge: $DATA_DIR/knowledge-graph.jsonl"
echo "💬 Conversation Memory: $DATA_DIR/ai-physio-memory.json"
echo "📝 Chat Summaries: $AI_CONVERSATIONS_DIR/"
echo ""
echo "Configuration File: $CLAUDE_CONFIG_FILE"
echo ""
echo "⚠️  IMPORTANT: This is just AI chatbot memory, NOT for real patient data!" 