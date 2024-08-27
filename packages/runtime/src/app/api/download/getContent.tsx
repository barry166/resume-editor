import { promises as fs } from "fs";
import path from "path";
import { templateMap } from "@resume/template";
////@ts-ignore
import { content as styleContent } from "@resume/template/dist/style";
import { PassThrough } from "stream";

console.log("styleModule", styleContent);

export async function getClientHtmlContent(config: any) {
  const ReactDomServer = (await import("react-dom/server")).default;
  const React = (await import("react")).default;
  const DefaultTemplate = templateMap["default"];

  // 创建一个Promise以处理异步渲染
  return new Promise((resolve, reject) => {
    const { pipe, abort } = ReactDomServer.renderToPipeableStream(
      <React.Suspense fallback="Loading...">
        <DefaultTemplate config={config} />
      </React.Suspense>,
      {
        onShellReady() {
          const stream = new PassThrough();
          pipe(stream);

          let content = "";
          stream.on("data", (chunk) => (content += chunk));
          stream.on("end", () => {
            let html = `
          <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>${styleContent}</style>
</head>
<body>
${content}
  </body>
</html>
          `;
            resolve(html);
          });
        },
        onError(error) {
          // 处理渲染过程中的错误
          reject(error);
          abort();
        },
      }
    );

    // 设置超时以防止过长等待（可根据需要调整超时时间）
    setTimeout(() => {
      abort();
      reject(new Error("Render timed out"));
    }, 5000);
  });
}
