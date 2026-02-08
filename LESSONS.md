# Lessons Learned

## From OPE Gallery Build
- Use Tailwind v3 (not v4) — v4 has a different config format and PostCSS plugin
- Use relative imports (`../components/`) not `@/` path alias — alias doesn't resolve reliably on Windows
- Always include autoprefixer in postcss.config.mjs
- Pin Next.js version in package.json to avoid breaking changes
- `output: 'export'` handles static export — no need for `next export` command
- FormInput/FormTextarea should support variant props for light/dark contexts from the start
- SectionWrapper pattern keeps section styling consistent — use it everywhere
- Build and verify after every batch of changes
