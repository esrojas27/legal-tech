# PLAN técnico — base del monolito modular

Una aplicación Next.js. src/app contiene rutas y composición; src/components contiene presentación; src/modules contiene contratos y lógica de dominio independiente de React y HTTP.

| Módulo | Responsabilidad futura |
| --- | --- |
| catalog | Definiciones de documentos y referencias exactas a versiones de formulario y plantilla |
| form-engine | Interpretación del JSON, validación y respuestas temporales |
| document-engine | Mapeo de respuestas a variables, vista previa parcial y generación PDF/DOCX en servidor |
| entitlements | Reglas de disponibilidad y descarga; sin integración de pagos en esta tarea |

La lógica de dominio no debe importar componentes ni rutas. La composición ocurre en app; las futuras operaciones documentales se ejecutarán en servidor. Evitar logs de respuestas personales. No hay servicios externos ni base de datos.

## Secuencia posterior
1. Recuperar y versionar la SPEC completa del formulario, sin inferir reglas faltantes.
2. Aprobar el piloto jurídico y sus variables.
3. Implementar catálogo y formularios con pruebas de validación.
4. Implementar vista previa parcial y generación documental con casos jurídicos aprobados.

TASK-001 solo establece estructura y herramientas; no implementa esas fases.
