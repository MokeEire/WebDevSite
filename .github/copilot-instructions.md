# GitHub Copilot Instructions for WebDevSite

## Project Overview
This is a learning portfolio website built with **SvelteKit 2.x + Svelte 5** to demonstrate web development concepts from an intro course. It uses file-based routing with nested layouts to create a module-based learning structure.

## Architecture

### Nested Layout Pattern
- **Root layout** (`src/routes/+layout.svelte`): Provides persistent sidebar navigation and dynamic `<title>` generation using `$page` store
- **Module layout** (`src/routes/modules/+layout.svelte`): Wraps all module pages (currently minimal, designed for future prev/next navigation)
- **Individual modules** (`src/routes/modules/{slug}/+page.svelte`): Each module gets its own dedicated route folder

### Data-Driven Navigation
All module metadata lives in `src/lib/data/modules.js` as a single source of truth:
```javascript
export const modules = [
  { number: 1, slug: 'html5', title: 'Getting Started with HTML5', description: '...' },
  // ... 10 modules total
];
```

This array drives:
- Sidebar navigation links (`Sidebar.svelte` loops through it)
- Dynamic page titles (root layout finds current module by matching `$page.url.pathname`)
- Future prev/next navigation (find adjacent items in array)

### Key Conventions

**IMPORTANT: Svelte 5 Runes Syntax (Always Use)**
This project uses Svelte 5 with runes. NEVER use legacy Svelte syntax.

- **Props:** Use `let { children } = $props()` for layout slots, `let { propName } = $props()` for component props
  - ❌ NEVER use `export let propName`
- **Reactive state:** Use `let count = $state(0)` for reactive variables
  - ❌ NEVER use `let count = 0` with `$:` reactive statements
- **Derived values:** Use `let doubled = $derived(count * 2)` for computed values
  - ❌ NEVER use `$: doubled = count * 2`
- **Effects:** Use `$effect(() => { ... })` for side effects
  - ❌ NEVER use `$:` blocks or lifecycle functions like `onMount`
- **Stores:** Use `$page` (not `page`) to access SvelteKit store values
- **Rendering children:** Use `{@render children()}` not `<slot />`

**Component Structure**
- Components in `src/lib/components/`
- Data files in `src/lib/data/`
- Use `$lib` alias for imports: `import { modules } from '$lib/data/modules.js'`

**Routing & Navigation**
- Module routes follow pattern: `/modules/{slug}` (e.g., `/modules/html5`)
- Active link highlighting uses: `class:active={$page.url.pathname === '/modules/html5'}`
- Manual `<h1>` tags in each module page (not data-driven) for simplicity and flexibility

**Semantic HTML**
- Use `<main>` for primary page content (wraps `{@render children()}`)
- Use `<cite>` for book/work titles
- Prefer semantic elements (`<nav>`, `<section>`, `<article>`) over generic `<div>`

## Development Workflow

**Run dev server:**
```powershell
npm run dev
```

**Build for production:**
```powershell
npm run build
npm run preview  # Preview the build locally
```

**Deployment:** Configured with `@sveltejs/adapter-netlify` for Netlify deployment

## Adding New Modules

1. Add entry to `src/lib/data/modules.js`
2. Create folder: `src/routes/modules/{slug}/`
3. Create `+page.svelte` with manual `<h1>` and content
4. Sidebar navigation updates automatically

## AI Bot Protection
`static/robots.txt` blocks AI training crawlers (GPTBot, CCBot, etc.) while allowing search engine indexing (Googlebot, Bingbot).

## Future Enhancements (Not Yet Implemented)
- Prev/next navigation buttons in `modules/+layout.svelte`
- `CodeExample.svelte` component for syntax-highlighted code blocks
- Progress tracking/completion state
- About page content
