import { BlockProps } from "@resume/shared";
import BlockTitle from "../BlockTitle";
import { DraggableContainer } from "../DragDropContainer";
import { useState } from "react";

function ComplexBlock(props: BlockProps) {
  const [items, setItems] = useState(props.items || []);

  return (
    <div className="complex-block">
      <BlockTitle text={props.name} />
      {/* <DraggableContainer
        items={items}
        moveItem={moveItem}
        renderItem={renderItem}
        itemClassName="border p-2"
      />
      <div className="mt-4 text-blue-500 text-[13px] cursor-pointer" onClick={handleAddItem}>
        + 添加新的内容
      </div> */}
    </div>
  );
}

export default ComplexBlock;
