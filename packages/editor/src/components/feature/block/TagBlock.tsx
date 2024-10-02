import { useEffect, useMemo, useState } from "react";
import { type Tag, TagInput } from "emblor";
import { useRecoilValue } from "recoil";
import { IBlockComponentProps } from "@/types/block";
import { blockState } from "@/store";
import BlockTitle from "../BlockTitle";

const TagBlock = (props: IBlockComponentProps) => {
  const { onChange } = props;
  const block = useRecoilValue(blockState(props.id));
  const { config: { title, items } = {} } = block;

  const [exampleTags, setExampleTags] = useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  const tags = useMemo(
    () => items?.map((i) => ({ id: i.id, text: i.content })),
    [items],
  );

  useEffect(() => {
    setExampleTags(tags || []);
  }, [tags]);

  const handleTitleChange = (title: string) => {
    const newBlock = {
      ...block,
      config: {
        ...block.config,
        title,
      },
    };
    onChange(newBlock);
  };

  const handleChange = (tags: Tag[]) => {
    console.log(tags);
    const newBlock = {
      ...block,
      config: {
        ...block.config,
        items: tags
          ? tags.map((tag) => ({ id: tag.id, content: tag.text }))
          : [],
      },
    };
    onChange(newBlock);
  };

  return (
    <div className="mt-4">
      <BlockTitle
        value={title || ""}
        onChange={handleTitleChange}
        canEdit={true}
      />
      <div className="flex-col-reverse">
        <TagInput
          tags={exampleTags}
          setTags={(newTags) => {
            console.log(111, newTags);
            setExampleTags(newTags);
            handleChange(newTags as any);
          }}
          placeholder="添加标签"
          styleClasses={{
            input: "w-full sm:max-w-[350px]",
          }}
          activeTagIndex={activeTagIndex}
          setActiveTagIndex={setActiveTagIndex}
          inlineTags={false}
          inputFieldPosition={"top"}
        />
      </div>
    </div>
  );
};

export default TagBlock;
