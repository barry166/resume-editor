/**
 * 简单快展示：编辑器
 * @returns
 */

import { useRecoilValue } from "recoil";
import BlockTitle from "../BlockTitle";
import RichTextEditor from "../commoneEditor";
import { IBlockComponentProps } from "@/types/block";
import { blockState } from "@/store";

function SimpleBlock(props: IBlockComponentProps) {
  const { onChange } = props;
  const block = useRecoilValue(blockState(props.id));
  const { config: { title, content } = {} } = block;

  const handleChange = (content: string) => {
    // console.log("rich text", content);
    const newBlock = {
      ...block,
      config: {
        ...block.config,
        content,
      },
    };
    onChange(newBlock);
  };

  return (
    <div className="simple-block">
      <BlockTitle id={props.id} value={title} />
      <RichTextEditor value={content || ""} onChange={handleChange} />
    </div>
  );
}

export default SimpleBlock;
