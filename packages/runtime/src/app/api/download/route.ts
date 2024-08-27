import { getClientHtmlContent } from "./getContent";

export async function POST(req: Request) {
  const content = await getClientHtmlContent({a: 'api mode'});
  console.log("content", content);

  // 进行pdf生成

  return Response.json({
    text: "download",
    content,
  });
}
