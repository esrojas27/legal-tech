export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16 sm:px-12">
      <header className="mb-16 flex items-center justify-between gap-4">
        <span className="text-xl font-bold tracking-tight">LegalTech</span>
        <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm text-teal-900">En preparación</span>
      </header>
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-800">Claridad para tu próximo paso</p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Tus documentos legales, paso a paso.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Estamos preparando una forma sencilla de completar información, revisar una vista previa y obtener tus documentos.</p>
      <section aria-labelledby="journey-title" className="mt-12">
        <h2 id="journey-title" className="text-xl font-semibold">Así funcionará</h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            ["Elige un documento", "Encuentra el documento que necesitas en el catálogo."],
            ["Completa tus datos", "Responde las preguntas de un formulario guiado."],
            ["Revisa y descarga", "Consulta una vista previa parcial y obtén PDF o Word."],
          ].map(([title, description], index) => (
            <li key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-sm font-semibold text-teal-700">0{index + 1}</span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </li>
          ))}
        </ol>
      </section>
      <footer className="mt-12 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">
        El catálogo y la generación de documentos aún no están disponibles. La generación automática de documentos no equivale a una asesoría jurídica personalizada.
      </footer>
    </main>
  );
}
