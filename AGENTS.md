# AGENTS.md (repo instructions)

These instructions are for agentic coding assistants working in this repository.

## Project summary
- Stack: React 19 + TypeScript + Vite
- Styling: Tailwind CSS (with CSS variables) + `class-variance-authority` (CVA)
- Package manager: `npm` (lockfile: `package-lock.json`)
- Module system: ESM (`"type": "module"` in `package.json`)

## Commands (build / lint / test)
All commands live in `package.json`.

### Install
- `npm ci` (preferred for CI / clean install)
- `npm install` (local dev)

### Dev server
- `npm run dev` (Vite dev server)

### Build
- `npm run build`
  - Runs `tsc -b` (project references) then `vite build`

### Preview production build
- `npm run preview`

### Lint
- `npm run lint`
  - Runs `eslint .` using `eslint.config.js`

### Typecheck (no dedicated script)
- Use `npm run build` for typechecking (because it runs `tsc -b`).
- If you need typechecking only, run: `npx tsc -b`.

### Tests
- No test runner is configured in this repo (no `test` script, no `*.test.*` / `*.spec.*` files).
- Single-test execution: N/A until a test runner is added.
- If adding tests, prefer Vitest (fits Vite), but do not add dependencies unless requested.

## Repo layout (source of truth)
- Source code is under `src/`.
  - `src/components/` (feature + UI components)
  - `src/components/ui/` (primitives like `Button`, `Card`)
  - `src/components/charts/` (Recharts visualizations)
  - `src/context/` (React context providers)
  - `src/hooks/` (custom hooks)
  - `src/layout/` (layout shell)
  - `src/pages/` (top-level pages)
  - `src/services/` (mock data / service layer)
  - `src/lib/` (shared utilities like `cn`)

### IMPORTANT: misleading empty directories
There are root-level directories like `srccomponents/`, `srchooks/`, `srcpages/`, etc.
They appear to be accidental duplicates and are empty in this workspace. Ignore them.
Do not place new code there.

## TypeScript configuration
- Strict mode is enabled (`"strict": true`): see `tsconfig.app.json` and `tsconfig.node.json`.
- Key constraints:
  - `noUnusedLocals`, `noUnusedParameters` enabled
  - `noUncheckedSideEffectImports` enabled
  - `verbatimModuleSyntax` enabled (be explicit with type-only imports)
- No path aliases are configured (no `baseUrl`/`paths`). Prefer shallow relative imports.

## Linting rules (ESLint)
- ESLint uses Flat Config: `eslint.config.js`.
- Applies to `**/*.{ts,tsx}` and extends:
  - `@eslint/js` recommended
  - `typescript-eslint` recommended
  - `eslint-plugin-react-hooks` recommended
  - `eslint-plugin-react-refresh` Vite config

Agents should:
- Fix lint errors rather than suppress them.
- Avoid `eslint-disable` unless there is a clear, documented reason.

## Formatting & style conventions
There is no Prettier/Biome config in the repo. Formatting is somewhat inconsistent across files.
Default to these conventions unless the surrounding file clearly uses a different local style:

### Indentation
- 2 spaces.

### Quotes
- Prefer double quotes in TS/TSX for consistency with most existing files.
- Respect the local file style if it is consistently single-quoted.

### Semicolons
- Many files use semicolons, but some do not.
- Prefer semicolons in new/modified code unless you are making a minimal change within a no-semicolons file.

### Trailing commas
- Use trailing commas in multi-line objects/arrays/params when it improves diffs.

### Line length
- Keep lines readable; wrap long JSX props and large object literals.

## Imports
- Use ESM imports/exports.
- With `verbatimModuleSyntax`, keep types type-only:
  - Prefer `import { type Foo } from "..."` or `import type { Foo } from "..."`.
- Order imports in a simple, stable way:
  1) React/third-party
  2) internal modules
  3) styles (e.g., `./index.css`) last

## React patterns
- Functional components.
- Named exports are common for components; default export exists for `App`.
- Props:
  - Prefer explicit prop types (`type`/`interface`) and destructuring in the signature.
- UI primitives:
  - `forwardRef` is used for components like `Button`.

## Tailwind / UI conventions
- Styling is Tailwind-first.
- Utility helper:
  - Use `cn` from `src/lib/utils.ts` to merge class strings.
- Component variants:
  - Use CVA (`class-variance-authority`) patterns (see `src/components/ui/Button.tsx`).
- Theme:
  - Dark mode uses `darkMode: 'class'` and a `ThemeProvider` in `src/context/ThemeContext.tsx`.

## Error handling
- Never swallow errors with empty `catch` blocks.
- Prefer fail-fast with descriptive errors when invariants are broken.
- For user-facing failures, prefer rendering an error state rather than throwing.
- Do not use type-unsafe suppression:
  - No `as any`, no `@ts-ignore`, no `@ts-expect-error`.

## State & side effects
- Prefer local state (`useState`) and effects (`useEffect`) with proper cleanup.
- Avoid introducing side-effect-only imports due to `noUncheckedSideEffectImports`.

## Assets / build output
- Build output is `dist/` (ignored by `.gitignore`).
- `node_modules/` is present and ignored.

## Cursor / Copilot rules
- No `.cursorrules`, `.cursor/rules/`, or `.github/copilot-instructions.md` were found in this repo.

## Agent guardrails
- Do not add new dependencies unless explicitly requested.
- Do not reformat unrelated files during a bugfix.
- If you need to introduce tests, confirm the desired test runner and scope first.
