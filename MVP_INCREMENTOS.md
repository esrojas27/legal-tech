# MVP — Plan de Incrementos

## Objetivo

Construir la primera versión de una plataforma LegalTech para Colombia enfocada en ayudar a las personas a resolver situaciones legales cotidianas de principio a fin, dentro de un alcance inicialmente extrajudicial y prejurídico.

El MVP debe desarrollarse de forma incremental, permitiendo que ambos fundadores trabajen en paralelo:

- **Fundador de Producto/Tecnología:** producto, UX, arquitectura, desarrollo, automatización, analítica e infraestructura.
- **Fundadora Jurídica:** reglas jurídicas, documentos, red flags, límites del servicio, operación jurídica y cumplimiento.

La coordinación entre ambos debe ocurrir principalmente a través de especificaciones funcionales claras, especialmente el **Legal Flow Specification** de cada vertical.

---

# Incremento 0 — Fundamentos del producto

## Objetivo
Alinear el alcance del MVP y establecer una base común antes de diseñar o desarrollar funcionalidades.

### Producto / Tecnología
- [ ] Definir estructura básica del producto.
- [ ] Crear backlog inicial.
- [ ] Definir estados de un caso.
- [ ] Definir eventos que se quieren medir.
- [ ] Definir modelo preliminar de datos.
- [ ] Crear repositorio y documentación base del proyecto.

### Jurídico
- [ ] Definir límites jurídicos del MVP.
- [ ] Definir qué situaciones sí acepta la plataforma.
- [ ] Definir qué situaciones quedan fuera del alcance.
- [ ] Revisar el alcance de cada nivel de servicio.
- [ ] Definir criterios de escalamiento entre niveles.
- [ ] Identificar riesgos profesionales principales.
- [ ] Definir lenguaje jurídico inicial y disclaimers.

### Trabajo conjunto
- [ ] Elegir la primera vertical.
- [ ] Definir qué significa “caso completado”.
- [ ] Aprobar el alcance del MVP.
- [ ] Aprobar los límites de responsabilidad y servicio.

### Definition of Done
Ambos fundadores pueden explicar exactamente:
- qué resuelve el MVP;
- qué no resuelve;
- para quién está construido;
- hasta dónde llega la plataforma;
- cuándo un caso debe escalar.

---

# Incremento 1 — Diseño del primer flujo completo

## Objetivo
Diseñar completamente la experiencia de la primera vertical antes de construirla.

### Producto / Tecnología
- [ ] Dibujar el journey completo.
- [ ] Definir el flujo desde landing hasta cierre.
- [ ] Crear wireframes simples.
- [ ] Definir qué información se solicita en cada pantalla.
- [ ] Definir posibles rutas del usuario.
- [ ] Definir qué contenido es gratuito.
- [ ] Definir dónde aparece el primer paywall.
- [ ] Definir los eventos de analítica.

### Journey inicial esperado

```text
Landing
  ↓
Seleccionar situación
  ↓
Diagnóstico
  ↓
Cuestionario
  ↓
Resultado
  ↓
Oferta / Paywall
  ↓
Pago
  ↓
Generación de documentos
  ↓
Seguimiento
```

### Eventos iniciales

```text
diagnostic_started
diagnostic_completed
offer_viewed
checkout_started
purchase_completed
document_generated
lawyer_review_requested
legal_consultation_requested
```

### Jurídico
- [ ] Definir todas las preguntas necesarias del flujo.
- [ ] Explicar por qué importa cada pregunta.
- [ ] Definir qué decisión modifica cada respuesta.
- [ ] Definir qué documentos afecta cada respuesta.
- [ ] Identificar escenarios estándar.
- [ ] Identificar escenarios especiales.
- [ ] Identificar red flags.
- [ ] Definir criterios de bloqueo.
- [ ] Definir criterios de escalamiento a revisión jurídica.
- [ ] Definir criterios de escalamiento a consulta jurídica.
- [ ] Definir situaciones fuera del alcance.

---

# Incremento 2 — Motor jurídico y estructura tecnológica

## Objetivo
Convertir el conocimiento jurídico en reglas estructuradas y diseñar la arquitectura que las ejecutará.

### Producto / Tecnología
- [ ] Diseñar esquema de respuestas.
- [ ] Diseñar modelo de reglas.
- [ ] Diseñar estados de caso.
- [ ] Diseñar API inicial.
- [ ] Definir modelo de almacenamiento.
- [ ] Diseñar sistema de generación documental.
- [ ] Definir versionamiento de plantillas.
- [ ] Definir trazabilidad entre inputs y documentos.
- [ ] Registrar versión de reglas utilizada.
- [ ] Diseñar logging y auditoría básica.

### Jurídico
Para cada pregunta:
- [ ] Texto de la pregunta.
- [ ] Objetivo jurídico.
- [ ] Posibles respuestas.
- [ ] Regla asociada.
- [ ] Red flags.
- [ ] Escalamiento.
- [ ] Cláusulas afectadas.
- [ ] Documentos afectados.
- [ ] Fuente normativa.
- [ ] Notas internas.

---

# Incremento 3 — Sistema documental

## Objetivo
Generar documentos dinámicos y jurídicamente controlados a partir de las respuestas del usuario.

### Jurídico
- [ ] Crear documento base.
- [ ] Identificar módulos variables.
- [ ] Crear cláusulas alternativas.
- [ ] Definir campos variables.
- [ ] Identificar cláusulas obligatorias.
- [ ] Identificar cláusulas opcionales.
- [ ] Definir condiciones de inclusión.
- [ ] Crear documentos complementarios.
- [ ] Revisar todos los escenarios generables.

### Producto / Tecnología
- [ ] Crear motor de templates.
- [ ] Sustituir variables.
- [ ] Agregar cláusulas según reglas.
- [ ] Eliminar cláusulas no aplicables.
- [ ] Generar DOCX.
- [ ] Generar PDF.
- [ ] Versionar documentos.
- [ ] Registrar inputs utilizados.
- [ ] Registrar versión de plantilla.
- [ ] Crear pruebas automatizadas de generación.

---

# Incremento 4 — Producto gratuito y monetización

## Objetivo
Construir el funnel que convierte usuarios desde orientación gratuita hasta producto pago.

### Producto / Tecnología
- [ ] Landing.
- [ ] Diagnóstico gratuito.
- [ ] Resultado del diagnóstico.
- [ ] Página de oferta.
- [ ] Pricing.
- [ ] Checkout.
- [ ] Integración de pagos.
- [ ] Confirmación de compra.
- [ ] Email transaccional.
- [ ] Descarga de documentos.
- [ ] Analytics.
- [ ] Recuperación de abandono.

### Jurídico
- [ ] Redactar resultado gratuito.
- [ ] Definir cuánto conocimiento se entrega gratuitamente.
- [ ] Definir descripción comercial de cada producto.
- [ ] Definir alcance exacto del Nivel 2.
- [ ] Definir alcance exacto del Nivel 3.
- [ ] Crear checklist interno de revisión.
- [ ] Definir mensajes estándar de resultado.

Estados de revisión jurídica:

```text
REVISADO — SIN OBSERVACIONES RELEVANTES
REVISADO — CON AJUSTES
REQUIERE CONSULTA
```

---

# Incremento 5 — Operación jurídica

## Objetivo
Diseñar cómo se presta el servicio cuando interviene una abogada.

### Nivel 3 — Revisión jurídica limitada
- [ ] Checklist de revisión.
- [ ] Tiempo objetivo de respuesta.
- [ ] Definir qué se revisa.
- [ ] Definir qué no se revisa.
- [ ] Crear formato de devolución.
- [ ] Definir una ronda de ajustes.
- [ ] Definir criterios de escalamiento.

### Nivel 4 — Consulta jurídica personalizada
- [ ] Formato de recepción de contexto.
- [ ] Documentos requeridos.
- [ ] Duración de consulta.
- [ ] Estructura interna de la consulta.
- [ ] Entregable posterior.
- [ ] Criterios para pasar a acompañamiento.

### Nivel 5 — Acompañamiento extrajudicial o prejurídico
- [ ] Definir servicios disponibles.
- [ ] Definir metodología de cotización.
- [ ] Definir alcance de negociación.
- [ ] Definir preparación para conciliación.
- [ ] Definir límites del servicio.
- [ ] Mantener fuera del MVP la representación judicial y litigio.

---

# Incremento 6 — Cumplimiento de la plataforma

## Objetivo
Definir y construir las protecciones legales, de privacidad y operación necesarias para el producto.

### Jurídico
- [ ] Términos y condiciones.
- [ ] Política de privacidad.
- [ ] Política de tratamiento de datos.
- [ ] Consentimientos.
- [ ] Alcance de cada servicio.
- [ ] Política de devoluciones.
- [ ] Limitaciones del servicio.
- [ ] Tratamiento de información sensible.
- [ ] Consentimiento para automatización.
- [ ] Comunicación clara entre contenido automatizado y revisión humana.

### Producto / Tecnología
- [ ] Implementar aceptación de términos.
- [ ] Registrar versión aceptada.
- [ ] Registrar timestamp.
- [ ] Registrar usuario/caso asociado.
- [ ] Implementar gestión de consentimiento.
- [ ] Implementar eliminación de información.
- [ ] Diseñar controles de acceso.
- [ ] Proteger documentos y datos sensibles.
- [ ] Crear trazabilidad de cambios.

---

# Incremento 7 — QA jurídico y técnico

## Objetivo
Comprobar que el sistema produce el resultado esperado para diferentes escenarios.

### Jurídico
- [ ] Crear casos estándar.
- [ ] Crear casos borde.
- [ ] Crear casos que requieran revisión.
- [ ] Crear casos que requieran consulta.
- [ ] Crear casos fuera de alcance.

### Producto / Tecnología
- [ ] Convertir escenarios jurídicos en pruebas.
- [ ] Crear tests automáticos.
- [ ] Validar reglas.
- [ ] Validar documentos.
- [ ] Validar escalamiento.
- [ ] Validar eventos.
- [ ] Validar pagos.
- [ ] Validar errores.
- [ ] Validar seguridad básica.

Objetivo inicial:

**20–50 escenarios jurídicos de prueba para la primera vertical.**

---

# Forma de trabajo entre fundadores

## Producto / Tecnología
Responsabilidades principales:
- UX;
- producto;
- arquitectura;
- desarrollo;
- automatización;
- infraestructura;
- analytics;
- testing técnico.

## Jurídico
Responsabilidades principales:
- reglas legales;
- documentos;
- red flags;
- fuentes jurídicas;
- límites de servicio;
- revisión;
- operación;
- compliance.

## Punto de unión
La interfaz entre ambos mundos debe ser:

> **Input → Regla → Resultado → Documento → Escalamiento**

---

# Legal Flow Specification

Cada vertical debe comenzar con una especificación antes de desarrollar código.

## Template mínimo

```text
FLOW:
ARRENDAR_INMUEBLE

OBJETIVO:
...

ACTORES:
...

PRECONDICIONES:
...

PREGUNTAS:
...

POSIBLES RESPUESTAS:
...

REGLAS:
...

RED FLAGS:
...

DOCUMENTOS:
...

OUTPUT:
...

ESCALAMIENTOS:
...

FUERA DE ALCANCE:
...

FUENTES JURÍDICAS:
...
```

La fundadora jurídica define principalmente **qué debe ocurrir y por qué**.

El fundador tecnológico define **cómo se implementa**.

La especificación actúa como contrato entre ambos.

---

# Primera semana

## Producto / Tecnología
- [ ] Crear backlog.
- [ ] Diseñar arquitectura inicial.
- [ ] Dibujar journey.
- [ ] Crear wireframes.
- [ ] Definir modelo de caso.
- [ ] Crear Legal Flow Specification v0.1.

## Jurídico
- [ ] Definir escenarios estándar.
- [ ] Enumerar preguntas necesarias.
- [ ] Identificar red flags.
- [ ] Definir documentos.
- [ ] Empezar documento base.
- [ ] Definir situaciones fuera de alcance.
- [ ] Revisar niveles 1–5 desde riesgo jurídico.

## Revisión conjunta
- [ ] Revisar Legal Flow Specification.
- [ ] Resolver discrepancias.
- [ ] Congelar versión v0.1.
- [ ] Autorizar inicio de implementación.

---

# Regla del proyecto

> **Ninguna vertical debe comenzar a implementarse sin una Legal Flow Specification aprobada.**

El objetivo es reducir reprocesos, mantener alineados producto y jurídico y permitir que ambos fundadores trabajen de forma independiente sin perder consistencia.
