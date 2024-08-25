import { DefaultTemplate, TemplateBlue } from "@resume/template";

export async function getClientHtmlContent(config: any) {
  const ReactDomServer = (await import("react-dom/server")).default;
  return ReactDomServer.renderToString(<DefaultTemplate config={config} />);
}