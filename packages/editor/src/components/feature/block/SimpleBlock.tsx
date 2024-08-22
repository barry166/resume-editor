/**
 * 简单快展示：编辑器
 * @returns
 */

import { BlockProps } from "@resume/shared";
import BlockTitle from "../BlockTitle";
import RichTextEditor from "../commoneEditor";

function SimpleBlock(props: BlockProps) {
  const handleChange = (content: string) => {
    console.log("rich text", content);
  };

  return (
    <div className="simple-block">
      <BlockTitle text="自定义内容" />
      <RichTextEditor value={props.content || ""} onChange={handleChange} />
    </div>
  );
}

export default SimpleBlock;
