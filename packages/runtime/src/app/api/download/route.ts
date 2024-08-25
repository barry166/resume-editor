import { getClientHtmlContent } from "./getContent";

export async function POST(req: Request) {
  const content = await getClientHtmlContent({a: 1});
  console.log("content", content);

  return Response.json({
    text: "download",
    content,
  });
}
