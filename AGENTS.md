<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## LegalTech — contexto de trabajo
- Leer docs/product/context.md, docs/specs/task-001.md y docs/plans/architecture.md antes de ampliar el producto.
- Mantener SPEC antes de implementación. No inventar reglas o cláusulas jurídicas.
- No implementar pagos, autenticación ni persistencia sin una tarea posterior que lo autorice.
- Separar lógica de dominio (src/modules), presentación (src/components) y rutas (src/app).
- Ejecutar npm run lint, npm test y npm run build antes de entregar cambios.
- Preservar los documentos originales de planificación.
