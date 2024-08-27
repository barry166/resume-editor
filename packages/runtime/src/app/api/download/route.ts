import { NextResponse } from "next/server";
import { getClientHtmlContent } from "./getContent";

const GOTENBERG_URL = "http://localhost:8001/forms/chromium/convert/html";

export async function POST(req: Request) {
  const htmlContent = await getClientHtmlContent({ a: "api mode" });
  console.log("htmlContent", htmlContent);
  try {
    // 创建FormData并将HTML内容附加到form中
    const formData = new FormData();
    const blob = new Blob([htmlContent as Blob], { type: "text/html" });
    formData.append("files", blob, "index.html");

    // 设置页面为A4大小，并配置页边距等参数
    formData.append("paperWidth", "8.27"); // A4宽度（英寸）
    formData.append("paperHeight", "11.69"); // A4高度（英寸）
    formData.append("marginTop", "1"); // 上边距（英寸）
    formData.append("marginBottom", "1"); // 下边距（英寸）
    formData.append("marginLeft", "1"); // 左边距（英寸）
    formData.append("marginRight", "1"); // 右边距（英寸）
    formData.append("landscape", "false"); // 页面方向（竖向）

    // 使用fetch请求Gotenberg API
    const response = await fetch(GOTENBERG_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to generate PDF");
    }

    const pdfBuffer = await response.arrayBuffer();

    // 设置响应头为PDF格式并返回生成的PDF
    return new NextResponse(pdfBuffer, {
      headers: { "Content-Type": "application/pdf" },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return new NextResponse("Failed to generate PDF", { status: 500 });
  }
}
