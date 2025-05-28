# KinetiKare MCP Knowledge Graph Integration

## Overview

This implementation adds **persistent memory and knowledge graph capabilities** to your physiotherapy app using the Model Context Protocol (MCP). This eliminates the frustrating loss of context between chat sessions and creates a truly intelligent AI assistant that learns and remembers.

## 🚀 What This Solves

### Before MCP Integration
- ❌ AI forgets everything between chat sessions
- ❌ Users must re-explain their conditions repeatedly
- ❌ No connection between different conversations
- ❌ Limited context window restrictions
- ❌ Manual file management for AI interactions

### After MCP Integration
- ✅ **Persistent memory** across all chat sessions
- ✅ **Knowledge graph** connecting conditions, treatments, and user info
- ✅ **Context retention** for personalized recommendations
- ✅ **File system access** for reports and data management
- ✅ **Progressive learning** - AI gets smarter over time

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Claude Desktop                           │
├─────────────────────────────────────────────────────────────┤
│                       MCP Layer                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │   Memory    │ │ Filesystem  │ │   AI Physio Context     │ │
│  │     MCP     │ │     MCP     │ │         MCP             │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                  Your Physiotherapy App                     │
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │ Knowledge Graph │  │  AI Physio API  │                   │
│  │   (entities,    │  │  (enhanced with │                   │
│  │   relations,    │  │   memory &      │                   │
│  │   observations) │  │   context)      │                   │
│  └─────────────────┘  └─────────────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

## 📊 Knowledge Graph Structure

### Entities
Represent people, conditions, treatments, and services:
```json
{
  "type": "entity",
  "name": "lower_back_pain",
  "entityType": "condition",
  "observations": [
    "Most common musculoskeletal complaint",
    "Often caused by mechanical dysfunction",
    "Benefits from manual therapy and exercise"
  ]
}
```

### Relations
Connect entities with meaningful relationships:
```json
{
  "type": "relation", 
  "from": "manual_therapy",
  "to": "lower_back_pain",
  "relationType": "treats"
}
```

### Observations
Store discrete facts about entities:
- User preferences and medical history
- Treatment effectiveness
- Progress notes
- Behavioral patterns

## 🛠️ Installation & Setup

### Option 1: Automated Setup (Recommended)
```bash
cd physiotherapy-next
./setup-mcp.sh
```

### Option 2: Manual Setup

1. **Install MCP Packages**
```bash
npm install -g mcp-knowledge-graph @modelcontextprotocol/server-memory @modelcontextprotocol/server-filesystem
```

2. **Create Claude Desktop Config**

**On macOS:**
```bash
mkdir -p "$HOME/Library/Application Support/Claude"
```

**On Linux:**
```bash
mkdir -p "$HOME/.config/Claude"
```

**On Windows:**
```bash
mkdir -p "$APPDATA/Claude"
```

3. **Configure claude_desktop_config.json**
Copy the configuration from `mcp-config.json` to your Claude Desktop config file.

4. **Restart Claude Desktop** completely (quit and reopen)

5. **Verify Setup**
- Go to Claude Desktop Settings → Developer
- You should see: `memory`, `filesystem`, and `ai-physio-context` servers running

## 🎯 Features Enabled

### 1. Persistent Memory
- **User Profiles**: Remember patient preferences, conditions, and history
- **Conversation Context**: Build upon previous discussions
- **Treatment Plans**: Track progress over multiple sessions
- **Professional Insights**: Learn from interaction patterns

### 2. Knowledge Graph Intelligence
- **Condition Relationships**: Understand how treatments relate to conditions
- **Evidence-Based Connections**: Link research to practical recommendations
- **User-Specific Insights**: Personal treatment effectiveness tracking
- **Clinical Decision Support**: Contextual guidance based on stored knowledge

### 3. File System Integration
- **Report Generation**: Create and update patient reports
- **Data Analysis**: Access and analyze treatment outcomes
- **Document Management**: Read and write clinical documentation
- **Export Capabilities**: Generate summaries and treatment plans

### 4. Enhanced AI Physio Feature
- **Context-Aware Responses**: Reference previous conversations
- **Personalized Recommendations**: Tailor advice to user history
- **Progressive Learning**: Improve recommendations over time
- **Evidence Integration**: Connect recommendations to stored research

## 📁 Data Storage

```
physiotherapy-next/
├── data/
│   ├── knowledge-graph.jsonl     # Main knowledge graph
│   └── ai-physio-memory.json    # AI conversation memory
├── reports/                      # Generated reports and analysis
└── mcp-config.json              # MCP configuration template
```

## 🔧 Configuration Details

### Memory MCP Server
- **Purpose**: Persistent knowledge graph storage
- **Data Format**: JSONL (JSON Lines)
- **Operations**: Create, read, update, delete entities and relations
- **Auto-approval**: All standard operations for seamless UX

### Filesystem MCP Server  
- **Purpose**: File system access for reports and data
- **Security**: Limited to specified directories only
- **Operations**: Read, write, list, create files and directories
- **Safety**: Prompts for user confirmation before file operations

### AI Physio Context MCP
- **Purpose**: Specialized memory for AI Physio conversations
- **Format**: Structured JSON with entities, relations, conversations
- **Features**: Automatic context extraction and storage
- **Intelligence**: Learns user preferences and effectiveness patterns

## 🚦 Usage Examples

### For Claude Desktop Users

1. **Initial Interaction**
```
User: "I have chronic lower back pain that gets worse when sitting"
AI: "I'm storing this information about your lower back pain and its relationship to prolonged sitting. This will help me provide more targeted advice in future conversations..."
```

2. **Follow-up Conversation** (Days Later)
```
User: "How should I modify my workspace?"
AI: "Remembering your chronic lower back pain that worsens with sitting, here are specific ergonomic recommendations..."
```

3. **Progress Tracking**
```
User: "The exercises you suggested last week are helping"
AI: "Excellent! I'm updating your treatment response profile. Based on your positive response to these exercises, I can recommend progressive variations..."
```

### For Your AI Physio Feature

The enhanced API automatically:
- Loads relevant context from the knowledge graph
- Provides personalized recommendations based on user history
- Updates memory with new information
- Builds connections between conditions and treatments

## 🔒 Security & Privacy

### Data Protection
- All data stored locally on your machine
- No cloud storage or external data transmission
- User controls all file access permissions
- MCP servers run in sandboxed environments

### Access Control
- Filesystem access limited to specified directories only
- User confirmation required for sensitive operations
- Auto-approval only for safe, standard operations
- Full audit trail of all AI interactions

### Privacy Compliance
- HIPAA-compatible local storage
- No third-party data sharing
- User-controlled data retention policies
- Encrypted file system support

## 🎮 Advanced Usage

### Custom Entities
Add specialized physiotherapy entities:
```bash
# Add new condition entity
echo '{"type": "entity", "name": "tennis_elbow", "entityType": "condition", "observations": ["Lateral epicondylitis", "Common in racquet sports", "Responds well to eccentric exercises"]}' >> data/knowledge-graph.jsonl
```

### Relationship Mapping
Create treatment effectiveness relationships:
```bash
# Add treatment relationship
echo '{"type": "relation", "from": "eccentric_exercises", "to": "tennis_elbow", "relationType": "highly_effective_for"}' >> data/knowledge-graph.jsonl
```

### Memory Queries
Search the knowledge graph:
```
User in Claude: "Search my memory for information about shoulder injuries"
Claude: [Uses search_nodes MCP tool to find relevant shoulder-related entities]
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: MCP servers not showing in Claude Desktop
**Solution**: 
1. Verify JSON syntax in config file
2. Check file paths are absolute and correct
3. Restart Claude Desktop completely
4. Check terminal for error messages

**Issue**: Permission errors accessing files
**Solution**:
1. Verify directory permissions
2. Check file paths in configuration
3. Ensure Claude has necessary OS permissions

**Issue**: Memory not persisting between sessions
**Solution**:
1. Check if data files are being created
2. Verify write permissions to data directory
3. Look for error logs in Claude Developer settings

### Debug Mode
Enable debug logging by adding to your config:
```json
{
  "mcpServers": {
    "memory": {
      "env": {
        "DEBUG": "true"
      }
    }
  }
}
```

## 🚀 Future Enhancements

### Planned Features
- [ ] **Visual Knowledge Graph**: Interactive visualization of relationships
- [ ] **Analytics Dashboard**: Treatment outcome analytics
- [ ] **Export/Import**: Backup and restore capabilities
- [ ] **Multi-User Support**: Separate knowledge graphs for different users
- [ ] **Integration APIs**: Connect with practice management software

### Research Directions
- [ ] **Outcome Prediction**: ML models for treatment success prediction
- [ ] **Pattern Recognition**: Identify common presentation patterns
- [ ] **Evidence Integration**: Automatic research paper integration
- [ ] **Clinical Decision Trees**: Guided treatment pathways

## 📚 Resources

### Official Documentation
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [MCP Knowledge Graph Server](https://github.com/shaneholloman/mcp-knowledge-graph)
- [Anthropic MCP Documentation](https://docs.anthropic.com/claude/docs/mcp)

### Community Resources
- [MCP Server Registry](https://github.com/modelcontextprotocol/servers)
- [Claude Desktop MCP Guide](https://claude.ai/docs/mcp)
- [MCP Development Tools](https://github.com/modelcontextprotocol/typescript-sdk)

---

## 💡 Key Benefits for Your Practice

1. **Continuity of Care**: AI remembers patient interactions across sessions
2. **Personalized Treatment**: Recommendations improve based on individual response patterns  
3. **Efficient Documentation**: Automatic generation of treatment summaries
4. **Evidence-Based Practice**: Connect treatments to outcomes with data
5. **Scalable Intelligence**: Knowledge base grows with every interaction
6. **Professional Integration**: Seamless integration with existing workflows

This MCP integration transforms your AI Physio feature from a simple chatbot into an intelligent, learning assistant that provides increasingly personalized and effective guidance over time. 