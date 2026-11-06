import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
describe("Página inicial", () => {
  it("presenta el servicio en preparación sin ofrecer captura de datos ni descargas activas", () => {
    const html = renderToStaticMarkup(<Home />);
    expect(html).toContain("En preparación");
    expect(html).toContain("aún no están disponibles");
    expect(html).toContain("no equivale a una asesoría jurídica personalizada");
    expect(html).not.toMatch(/<(form|input|button)\b/);
    expect(html).not.toMatch(/\sdownload[=>\s]/);
  });
});
