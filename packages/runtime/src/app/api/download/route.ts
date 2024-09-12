import { NextResponse } from "next/server";
import { getClientHtmlContent } from "./getContent";

const GOTENBERG_URL = "http://localhost:8001/forms/chromium/convert/html";

export const createDefaultPageConfig = () => {
  return {
    uuid: "1",
    env: "design",
    templateId: "default-template",
    basicInfo: {
      realName: "张三",
      mobile: "13800000000",
      jobTitle: "前端开发工程师",
      birthDate: "1990-01-01",
      location: "北京",
      email: "zhangsan@example.com",
      wechat: "zhangsan123",
    },
    title: "自定义简历",
    customBasicInfo: [
      { id: "1", key: "Github", value: "http://github/barry166" },
      { id: "2", key: "Blog", value: "http://solkatt.vip" },
      { id: "3", key: "Linkedin", value: "https://www.linkedin.com/" },
    ],
    blocks: [
      {
        id: "2",
        type: "simple",
        config: {
          title: "个人简介",
          content: "拥有丰富的前端开发经验，熟练掌握 React、Vue 等主流前端框架。",
        },
      },
      {
        id: "3",
        type: "complex",
        config: {
          title: "工作经历",
          items: [
            {
              id: "1",
              title: "公司A",
              content: "前端开发工程师。。。",
              subTitle: "高级前端开发",
              city: "北京",
              timeArea: {
                from: 1642608000000,
                to: 1644422400000,
              },
            },
            {
              id: "2",
              title: "公司B",
              content: "全栈开发工程师。。。",
              subTitle: "高级前端开发",
              city: "北京",
              timeArea: {
                from: 1642608000000,
                to: 1644422400000,
              },
            },
          ],
          itemLabelMap: {
            title: "公司名称",
            subTitle: "职位名称",
            timeArea: "起止时间",
            city: "所在城市",
          },
        },
      },
    ],
  };
};

export async function POST(req: Request) {
  const htmlContent = await getClientHtmlContent(createDefaultPageConfig());
  console.log("htmlContent", htmlContent);
  try {
    // 创建FormData并将HTML内容附加到form中
    const formData = new FormData();
    const blob = new Blob([htmlContent as string], { type: "text/html" }); // 直接使用字符串构造Blob
    formData.append("files", blob, "index.html");

    // 设置页面为A4大小，并配置页边距等参数
    formData.append("paperWidth", "10.69"); // A4宽度（英寸）
    formData.append("paperHeight", "15.12"); // A4高度（英寸）
    formData.append("landscape", "false"); // 页面方向（竖向）
    formData.append("marginTop", "0"); // 页面方向（竖向）
    formData.append("marginBottom", "0"); // 页面方向（竖向）
    formData.append("marginLeft", "0"); // 页面方向（竖向）
    formData.append("marginRight", "0"); // 页面方向（竖向）

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
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=generated.pdf",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return new NextResponse("Failed to generate PDF", { status: 500 });
  }
}
