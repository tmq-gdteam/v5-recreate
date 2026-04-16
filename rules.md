# RULES.md

## Purpose
This file defines mandatory implementation and quality rules for all generated UI and frontend code.
These rules are non-optional and must be enforced before any code is presented for review.

## 0. Core Stack and UI Patterns
- Always build using React + Tailwind CSS.
- Always follow Shadcn-style component patterns for UI structure and composition.
- Prefer reusable, composable, accessible Shadcn-style components over custom one-off implementations.
- When a new UI pattern is needed, first check whether it can be built from existing React + Tailwind + Shadcn-style patterns before creating anything custom.
- Do not introduce alternative UI frameworks or styling systems unless explicitly approved.

## 1. Typography
- Always use `clamp()` for responsive typography on headings and major text scales.
- Never use fixed pixel font sizes for H1, H2, H3, and H4 without responsive scaling.
- Maintain a clear heading hierarchy across all pages.

## 2. Colors
- Never use hex colors outside the approved palette defined in DESIGN.md.
- Always use approved color tokens, variables, or palette values.
- Do not invent one-off accent colors.

## 3. Accessibility
- Always use semantic HTML where applicable.
- Always provide proper labels for form controls.
- Always include ARIA attributes where interactive components require them.
- Modals and dialogs must include proper roles and accessible focus handling.
- Buttons and icon-only controls must have accessible names.

## 4. Responsiveness
- Always build mobile-first responsive layouts.
- Always use fluid and adaptive layout patterns.
- Avoid fixed-width layouts unless explicitly required.
- Preserve clean behavior across desktop, tablet, and mobile.

## 5. Components
- Always reuse existing shared components before creating new ones.
- Never create one-off component variants unless explicitly approved.
- New components must follow the visual language in DESIGN.md.

## 6. Layout and Spacing
- Always use the spacing rhythm defined in DESIGN.md.
- Do not invent arbitrary spacing values outside the approved scale.
- Maintain consistent section padding and container behavior.

## 7. Code Quality
- Always keep components reusable and organized.
- Avoid duplicate UI patterns when a shared component can be used.
- Do not leave dead or unused code in generated output.
- Keep markup clean, semantic, and easy to review.

## 8. Approved Shared Components Catalog
Do not invent raw HTML or inline CSS for these patterns. You MUST import them from `src/components/ui/`:

- **Buttons (`button.jsx`)**: Use `<Button>` with `variant="default|secondary|outline|ghost|link"` and `size="default|sm|lg|icon"`.
- **Cards (`card.jsx`)**: Use `<Card>`, `<CardHeader>`, `<CardTitle>`, `<CardDescription>`, `<CardContent>`, `<CardFooter>`.
- **Badges (`badge.jsx`)**: Use `<Badge>` with `variant="default|secondary|outline|success|warning|error|info"`.
- **Inputs (`input.jsx`)**: Use `<Input>`. Do not use native `<input type="text">` directly.
- **Tabs (`tabs.jsx`)**: Use `<Tabs>`, `<TabsList>`, `<TabsTrigger>`, `<TabsContent>`.
- **Tables (`table.jsx`)**: Use `<Table>`, `<TableHeader>`, `<TableBody>`, `<TableRow>`, `<TableHead>`, `<TableCell>`.
- **Switches (`switch.jsx`)**: Use `<Switch>`.

## 9. Audit Behavior
- Every generated or modified file must be checked against this ruleset before review.
- If any rule is violated, revise the code before presenting it.
- RULES.md is mandatory and must not be ignored.