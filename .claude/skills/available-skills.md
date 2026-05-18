# Available Skills

Skills are invoked with `/skill-name` in the Claude Code chat. They extend Claude's capabilities for specific tasks.

## Used in this project

| Skill | Trigger | What it does |
|-------|---------|--------------|
| `refactoring-ui` | `/refactoring-ui` | UI design guidance — visual hierarchy, colour theory, spacing, typography, mobile-first |
| `ui-ux-pro-max` | `/ui-ux-pro-max` | Full UI/UX design intelligence: 50+ styles, 161 palettes, font pairings, UX guidelines |
| `ckm-design` | `/ckm-design` | Brand identity, design tokens, logo generation, corporate identity, HTML presentations |
| `wcag-accessibility-audit` | `/wcag-accessibility-audit` | WCAG 2.1/2.2 audit across POUR principles at A/AA/AAA levels |
| `simplify` | `/simplify` | Reviews changed code for reuse, quality, and efficiency — then fixes issues |
| `review` | `/review` | Reviews a pull request |
| `security-review` | `/security-review` | Full security review of changes on the current branch |
| `init` | `/init` | Initialises or updates a CLAUDE.md file with codebase documentation |
| `update-config` | `/update-config` | Edits Claude Code settings.json — permissions, hooks, env vars, automated behaviours |

## Other available skills (general use)

| Skill | What it does |
|-------|--------------|
| `ux-audit-rethink` | IxDF 7-factor UX audit with redesign proposals |
| `nielsen-heuristics-audit` | Jakob Nielsen's 10 usability heuristics evaluation |
| `don-norman-principles-audit` | Don Norman's 7 design principles audit |
| `cognitive-walkthrough` | Simulates novice user step-by-step to find learnability gaps |
| `ui-design-review` | Visual design review: typography, colour, spacing, hierarchy |
| `ckm-brand` | Brand voice, messaging frameworks, tone of voice, style guides |
| `ckm-slides` | Strategic HTML presentations with Chart.js and design tokens |
| `ckm-banner-design` | Banner design for social media, ads, heroes, print |
| `ckm-design-system` | Token architecture, component specs, CSS variables, spacing scales |
| `ckm-ui-styling` | shadcn/ui + Tailwind component and interface builds |
| `keybindings-help` | Customise Claude Code keyboard shortcuts |
| `find-skills` | Discover and install new agent skills |
| `loop` | Run a prompt on a recurring interval |
| `schedule` | Schedule one-off or recurring remote agents |
| `claude-api` | Build/debug Claude API / Anthropic SDK apps with prompt caching |
| `owasp-ai-testing` | AI trustworthiness testing (44 test cases across 4 layers) |
| `owasp-llm-top10` | Security audit for LLM/GenAI apps per OWASP Top 10 2025 |
| `nist-ai-rmf` | AI risk assessment across Govern, Map, Measure, Manage |
| `iso-42001-ai-governance` | ISO 42001 AI governance audit |
| `ai-assessment-scale` | Measures AI contribution level across a project (AIAS 5-level) |

## How to use
Type `/skill-name` in the chat. Claude Code will invoke the skill before responding. Skills are not automatic — you must trigger them explicitly.
