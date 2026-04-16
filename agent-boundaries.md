# agent-boundaries.md

## Shared Files
All agents may read but not freely rewrite:
- /content.md
- /components.md
- /design.md
- /design-tokens.tokens.json
- /rules.md
- /tailwind.config.js
- /src/index.css
- /src/components/ui/** (Design System UI Component Registry)
- /.eslintrc.cjs (Abstract Syntax Tree Architect Locks)

## Shared Shell Ownership
Agent-Shell (Config / Layout Architect) owns:
- /src/components/layout/** (e.g., MainLayout.jsx, SidebarNav.jsx, TopSearchBar.jsx)
- /src/App.jsx (Routing Scaffolding)
- /src/lib/utils.js

Other agents **may not** modify shared shell scaffolding unless explicitly approved.

## Feature / Page Ownership
*(Architecture Constraint: Do not use or create `app/` or `pages/` directories)*

Agent-Dashboard:
- /src/views/DashboardView.jsx
- /src/components/dashboard/** (dashboard-only components)

Agent-Messaging:
- /src/views/MessagingView.jsx
- /src/components/messaging/** (messaging-only components)

Agent-Journey:
- /src/views/JourneyView.jsx
- /src/components/journey/** (journey-only components)

Agent-Leads:
- /src/views/LeadsView.jsx
- /src/components/leads/** (leads-only components)

Agent-ChatWidget:
- /src/views/ChatWidgetView.jsx
- /src/components/chat-widget/** (widget-only components)

Agent-Train:
- /src/views/TrainView.jsx
- /src/components/train/** (training-only components)

## Shared Design Rules & AST Constraints
- All agents MUST import structural UI elements from `@/components/ui` (e.g., `<Button>`, `<Input>`, `<Table>`, `<Card>`). Do NOT use raw structural HTML tags (`<button>`, `<input>`, `<table>`, etc.) as the ESLint `.eslintrc.cjs` lock will actively block deployment.
- All agents must extract colors, spacing, and styling purely by using the established root `var(...)` CSS variables logic from `tailwind.config.js`. You are forbidden from inventing arbitrary hex codes or margin values.
- No agent may add new arbitrary variables to `src/index.css`.
- No agent may alter global styles or configuration defaults unless specifically tasked with updating global tokens.