# Claude Code Configuration - SPARC Development Environment

## 🚨 CRITICAL: CONCURRENT EXECUTION & FILE MANAGEMENT

**ABSOLUTE RULES**:
1. ALL operations MUST be concurrent/parallel in a single message
2. **NEVER save working files, text/mds and tests to the root folder**
3. ALWAYS organize files in appropriate subdirectories
4. **USE CLAUDE CODE'S TASK TOOL** for spawning agents concurrently, not just MCP
5. Never commit secrets.
6. Prefer recent versions of modules.
7. Prefer TS over JS, and ensure types are complete. And updates type definitions when changing them.
8. No flattery.
9. Check assumptions.
10. Before finalizing code, mentally simulate (including edge cases) to avoid errors.
11. If you are about to run out of context space, summarize the current stateand instructions to a memory so it can be reloaded.
12. Don't give up or choose the lazy path.
13. Use spawns to save on context space for context-heavy operations.

### ⚡ GOLDEN RULE: "1 MESSAGE = ALL RELATED OPERATIONS"

**MANDATORY PATTERNS:**
- **TodoWrite**: ALWAYS batch ALL todos in ONE call (5-10+ todos minimum)
- **Task tool (Claude Code)**: ALWAYS spawn ALL agents in ONE message with full instructions
- **File operations**: ALWAYS batch ALL reads/writes/edits in ONE message
- **Bash commands**: ALWAYS batch ALL terminal operations in ONE message
- **Memory operations**: ALWAYS batch ALL memory store/retrieve in ONE message

### 🎯 CRITICAL: Claude Code Task Tool for Agent Execution

**Claude Code's Task tool is the PRIMARY way to spawn agents:**
```javascript
// ✅ CORRECT: Use Claude Code's Task tool for parallel agent execution
[Single Message]:
  Task("Research agent", "Analyze requirements and patterns...", "researcher")
  Task("Coder agent", "Implement core features...", "coder")
  Task("Tester agent", "Create comprehensive tests...", "tester")
  Task("Reviewer agent", "Review code quality...", "reviewer")
  Task("Architect agent", "Design system architecture...", "system-architect")
```

# important-instruction-reminders
Use the bd tool instead of markdown: Beads is a lightweight memory system.
Do not make assumptions: analyze the codebase structure before making changes.
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
Never save working files, text/mds and tests to the root folder.
Never run build on a large project without asking each time, as that is too slow.
Ensure every code modification strictly preserves correctness, minimality of change, and robustly handles edge/corner cases related to the problem statement—even in complex, inherited, or nested code structures.
Avoid blanket or “quick fix” solutions that might hide errors or unintentionally discard critical information; always strive to diagnose and address root-causes, not merely symptoms or side-effects.
Where input normalization is necessary—for types, iterables, containers, or input shapes—do so only in a way that preserves API contracts, allows for extensibility, and maintains invariance across all supported data types, including JavaScript/TypeScript built-ins and major library types.
All error/warning messages, exceptions, and documentation updates must be technically accurate, actionable, match the conventions of the host codebase, and be kept fully in sync with new or changed behavior.
Backwards and forwards compatibility: Changes must account for code used in diverse environments (e.g., different TypeScript versions, framework/ORM versions, or platforms), and leverage feature detection where possible to avoid breaking downstream or legacy code.
Refactorings and bugfixes must never silently discard, mask, or change user data, hooks, plugin registrations, or extension points; if a migration or transformation is required, ensure it is invertible where possible and preserve optional hooks or entry points.
Always check to make sure nothing is called before its declaration.
When using React, ensure we always follow the Rule of Hooks.
Run commands synchronously when you need to monitor them, not background processes.
Do not run a background task for anything you need to monitor.

## Serena MCP Integration
This project uses Serena MCP for IDE assistance. Ensure it's configured:
  ```bash
  claude mcp add serena uvx --from git+https://github.com/oraios/serena serena start-mcp-server --context ide-assistant --project /path/to/project

### 📁 File Organization Rules

**NEVER save to root folder. Use these directories:**
- `/src` - Source code files
- `/tests` - Test files
- `/docs` - Documentation and markdown files
- `/config` - Configuration files
- `/scripts` - Utility scripts
- `/examples` - Example code

## 🎯 Claude Code vs MCP Tools

### Claude Code Handles ALL EXECUTION:
- **Task tool**: Spawn and run agents concurrently for actual work
- File operations (Read, Write, Edit, MultiEdit, Glob, Grep)
- Code generation and programming
- Bash commands and system operations
- Implementation work
- Project navigation and analysis
- TodoWrite and task management
- Git operations
- Package management
- Testing and debugging

### MCP Tools ONLY COORDINATE:
- Swarm initialization (topology setup)
- Agent type definitions (coordination patterns)
- Task orchestration (high-level planning)
- Memory management
- Neural features
- Performance tracking
- GitHub integration

**KEY**: MCP coordinates the strategy, Claude Code's Task tool executes with real agents.

## 🚀 Agent Execution Flow with Claude Code

### The Correct Pattern:

1. **Optional**: Use MCP tools to set up coordination topology
2. **REQUIRED**: Use Claude Code's Task tool to spawn agents that do actual work
3. **REQUIRED**: Each agent runs hooks for coordination
4. **REQUIRED**: Batch all operations in single messages

### Example Full-Stack Development:

```javascript
// Single message with all agent spawning via Claude Code's Task tool
[Parallel Agent Execution]:
  Task("Backend Developer", "Build REST API with Express. Use hooks for coordination.", "backend-dev")
  Task("Frontend Developer", "Create React UI. Coordinate with backend via memory.", "coder")
  Task("Database Architect", "Design PostgreSQL schema. Store schema in memory.", "code-analyzer")
  Task("Test Engineer", "Write Jest tests. Check memory for API contracts.", "tester")
  Task("DevOps Engineer", "Setup Docker and CI/CD. Document in memory.", "cicd-engineer")
  Task("Security Auditor", "Review authentication. Report findings via hooks.", "reviewer")
  Task("Deep Thinker", "Review, compare, contrast, and debate. Uses Codex deep-think MCP.", "thinker")
  
  // All todos batched together
  TodoWrite { todos: [...8-10 todos...] }
  
  // All file operations together
  Write "backend/server.js"
  Write "frontend/App.jsx"
  Write "database/schema.sql"
```
