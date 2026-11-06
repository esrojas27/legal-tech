# LegalTech

Base del MVP (TASK-001): Next.js App Router, TypeScript, Tailwind CSS, ESLint y Vitest. Página inicial en español; formularios y documentos se implementarán en tareas posteriores.

## Ejecutar en Windows
Requiere Node.js 24 LTS y npm. Desde PowerShell:

```powershell
Set-Location 'D:\Documentos\Esteban\LegalTech'
npm ci
npm run dev
```

Abrir http://localhost:3000. Detener con Ctrl+C. No se requieren claves ni variables de entorno.

## Verificaciones
```powershell
npm run lint
npm test
npm run typecheck
npm run build
npm start
```

npm run test:watch mantiene Vitest activo. npm start sirve la compilación de producción tras build.

## Estructura
- src/app: rutas y página inicial.
- src/modules/{catalog,form-engine,document-engine,entitlements}: límites del dominio.
- src/components/{catalog,forms,documents}: presentación futura.
- docs/product: contexto confirmado.
- docs/specs: alcance de TASK-001.
- docs/plans: arquitectura y reporte de verificación.
- legal/templates: reserva técnica; ninguna plantilla jurídica aprobada.

No se implementaron pagos, autenticación, persistencia, formularios ni exportación PDF/DOCX. La página comunica que el servicio está en preparación.

## Contexto entre ChatGPT y Codex
Usar esta misma carpeta como carpeta principal del proyecto local. Versionar código, SPEC y PLAN en el mismo repositorio; adjuntar o referenciar esos documentos al planificar en ChatGPT. No asumir sincronización automática de todos los chats, archivos o instrucciones. Ver docs/product/context.md para el resumen recuperado del chat de origen.

Los documentos legaltech_onepager.md y MVP_INCREMENTOS.md se preservaron sin cambios.
