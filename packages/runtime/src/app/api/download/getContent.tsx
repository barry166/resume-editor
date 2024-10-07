import { promises as fs } from "fs";
import path from "path";
import { templateMap } from "@resume/template";
////@ts-ignore
import { content as styleContent } from "@resume/template/dist/style";
import { PassThrough } from "stream";

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
            debugger;
            console.log("styleContent", styleContent);
            let html = `
          <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>${styleContent}</style>
  <style>
  body, html {
    height: auto;
    page-break-after: avoid;
  }
  @page {
    size: 10.69in 15.12in;
    page-break-after: always;
    margin: 0;
    overflow: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    width: 10.69in;
    height: 15.12in;
  }
  .page {
    page-break-after: always;
    height: 15.12in;
  }
  </style>
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
      },
    );

    // 设置超时以防止过长等待（可根据需要调整超时时间）
    setTimeout(() => {
      abort();
      reject(new Error("Render timed out"));
    }, 5000);
  });
}
