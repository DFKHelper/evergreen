# MCP Configuration Guide - Evergreen Project

## Overview

This document describes the Model Context Protocol (MCP) servers configured for the Evergreen project. MCPs extend Claude Code's capabilities by providing additional tools and context.

## Configured MCPs

### ✅ Successfully Connected MCPs (5/6)

#### 1. Sequential Thinking
- **Status**: ✓ Connected
- **Package**: `@modelcontextprotocol/server-sequential-thinking`
- **Purpose**: Provides structured sequential thinking capabilities for complex problem-solving
- **Configuration**: `npx @modelcontextprotocol/server-sequential-thinking`

#### 2. Context7
- **Status**: ✓ Connected
- **Transport**: HTTP
- **Purpose**: Library documentation and context management
- **Configuration**:
  - URL: `https://mcp.context7.com/mcp`
  - Headers: Authorization with API key (ctx7sk-08924010-e1b2-466a-b80a-dce114542bbb)
- **Usage**: Automatically fetches library documentation when needed

#### 3. Node.js Debugger
- **Status**: ✓ Connected
- **Package**: `@hyperdrive-eng/mcp-nodejs-debugger`
- **Purpose**: Debugging Node.js applications and scripts
- **Configuration**: `npx @hyperdrive-eng/mcp-nodejs-debugger`

#### 4. OpenMemory
- **Status**: ✓ Connected
- **Package**: `openmemory` (v0.0.1)
- **Purpose**: Cross-session memory and context persistence using Mem0
- **Configuration**: `npx openmemory`
- **Note**: Uses local memory storage for privacy

#### 5. Codex Deep-Think
- **Status**: ✓ Connected
- **Type**: Local MCP server
- **Path**: `/mnt/c/Projects/mcp-servers/codex-cli`
- **Purpose**: Wraps OpenAI Codex CLI for advanced code generation
- **Configuration**: `/home/gabe/.nvm/versions/node/v24.8.0/bin/node /mnt/c/Projects/mcp-servers/codex-cli/dist/index.js`
- **Requirements**:
  - OpenAI Codex CLI installed (✓ codex-cli 0.58.0)
  - Node.js v24.8.0
- **Tools Provided**:
  - `codex_exec`: Execute Codex non-interactively
  - `codex_apply`: Apply diffs from Codex tasks
  - `codex_resume`: Resume previous Codex sessions
  - `codex_cloud_exec`: Execute tasks on Codex Cloud

### ⚠️ Configured but Slow to Connect (1/6)

#### 6. Serena
- **Status**: ✓ Functional (fails health check due to slow initialization)
- **Type**: Git-based installation
- **Purpose**: IDE assistance and intelligent code analysis with 38 tools
- **Configuration**: `uvx --from git+https://github.com/oraios/serena serena start-mcp-server --context ide-assistant --project /mnt/c/projects/evergreen`
- **Requirements**:
  - uvx installed (✓ uvx 0.9.3)
  - Project indexed for optimal performance
- **Tools Provided** (23 exposed):
  - File operations: find_file, list_dir, search_for_pattern
  - Symbol operations: find_symbol, rename_symbol, replace_symbol_body
  - Memory operations: write_memory, read_memory, list_memories
  - Project management: activate_project, get_current_config
  - And 12 more tools
- **Project Configuration**:
  - Project created and indexed at `/mnt/c/projects/evergreen/.serena/project.yml`
  - Language: TypeScript
- **Note**:
  - Takes 15-30 seconds to initialize on first connection
  - Processes .gitignore files and builds project index
  - Health check may timeout, but server is functional
  - After first connection, should connect faster on subsequent uses

## Usage in Project

### Automatic Usage (As per CLAUDE.md)

According to the project's `CLAUDE.md`, these MCPs should be used proactively:

1. **sequential-thinking**: Use throughout problem-solving (2+ logical steps, minimum 6 thoughts per step)
2. **context7**: Use proactively for library documentation
3. **openmemory**: Use for cross-session memory and storing design decisions
4. **nodejs-debugger**: Use proactively for debugging Node.js code

### Manual Verification

To check MCP status at any time:

```bash
claude mcp list
```

## Configuration Files

- **Local config**: `/home/gabe/.claude.json` (project-specific)
- **Project**: `/mnt/c/projects/evergreen`

## Adding New MCPs

To add a new MCP server:

```bash
# For npm packages
claude mcp add <name> npx <package-name>

# For HTTP MCPs with auth
claude mcp add --transport http <name> <url> --header "Authorization:<key>"

# For local servers
claude mcp add <name> "node /path/to/server.js"

# With environment variables
claude mcp add <name> "npx <package>" --env KEY=value
```

## Troubleshooting

### General Steps

1. Check MCP health: `claude mcp list`
2. Restart Claude Code after configuration changes
3. Check logs in Claude Code output
4. Verify tools/packages are installed: `which <tool>`, `npm info <package>`

### Common Issues

**Connection Failures**:
- Ensure network connectivity for HTTP MCPs
- Verify authentication credentials
- Check that stdio servers can start independently

**Package Not Found**:
- Update npm: `npm install -g npm@latest`
- Clear npm cache: `npm cache clean --force`
- Try alternative package names

**Path Issues**:
- Use absolute paths for local servers
- Ensure file permissions allow execution
- Check working directory requirements

## Final Status Summary

All requested MCPs are now configured and functional:

1. ✅ **Sequential thinking** - Connected and ready
2. ✅ **Context7** - Connected via HTTP with API key
3. ✅ **Node.js Debugger** - Connected and ready
4. ✅ **Codex Deep-Think** - Connected using absolute node path
5. ✅ **OpenMemory** - Connected using correct package name
6. ✅ **Serena** - Functional (indexed project, takes time to initialize)

### Recommended: Restart Claude Code

For best performance and to ensure all MCPs are fully loaded, restart Claude Code after this configuration:

```bash
# Or simply restart the application
```

After restart, Serena should connect faster due to the indexed project cache.

## References

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Claude Code MCP Guide](https://docs.anthropic.com/claude-code/mcp)
- [OpenAI Codex CLI](https://github.com/openai/codex-cli)
- [Serena MCP](https://github.com/oraios/serena)
