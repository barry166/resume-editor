import { Block, BlockItem } from "@resume/shared";
import { blockState } from "@/store";
import BlockTitle from "../BlockTitle";
import { DraggableContainer } from "../DragDropContainer";
import { useDragAction } from "@/hooks/useDragAction";
import CommonDragAction from "../CommonDragAction";
import ComplexItemDisplay from "./ComplexItemDisplay";
import ComplexBlockEdit from "./ComplexBlockEdit";
import { cloneDeep } from "lodash-es";
import { useRecoilValue } from "recoil";

interface IProps {
  id: string;
  onChange: (block: Block) => void;
}
function ComplexBlock(props: IProps) {
  const block = useRecoilValue(blockState(props.id));
  const { onChange } = props;
  const { config: { items: value = [], title, itemLabelMap } = {} } = block;

  const handleBlockItemChange = (items: BlockItem[]) => {
    const newBlock = {
      ...block,
      config: {
        ...block.config,
        items,
      },
    };
    onChange(newBlock);
  };

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

  const {
    items,
    editingId,
    setEditingId,
    handleAddItem,
    handleEditItem,
    handleCancelEdit,
    handleDeleteItem,
    moveItem,
  } = useDragAction(value, handleBlockItemChange);

  const handleItemChange = (id: string, key: string, value?: any) => {
    const newItems = cloneDeep(items);
    const targetItem = newItems.find((item) => item.id === id);
    if (!targetItem) return;
    targetItem[key] = value;
    handleBlockItemChange(newItems);
  };

  const renderItem = ({ item }: { item: BlockItem }) => {
    return (
      <div className="flex flex-1 items-center justify-between p-2">
        {editingId === item.id ? (
          <ComplexBlockEdit
            item={item}
            itemLabelMap={itemLabelMap}
            onClose={handleCancelEdit}
            onChange={handleItemChange}
          />
        ) : (
          <>
            <ComplexItemDisplay {...item} />
            <CommonDragAction
              item={item}
              onEditItem={handleEditItem}
              onDeleteItem={handleDeleteItem}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="complex-block mt-2">
      <BlockTitle
        value={title || ""}
        onChange={handleTitleChange}
        canEdit={true}
      />
      <DraggableContainer
        items={items || []}
        moveItem={moveItem}
        editingId={editingId}
        setEditingId={setEditingId}
        renderItem={renderItem}
        itemClassName="border p-2"
      />
      <div
        className="mt-4 text-blue-500 text-[13px] cursor-pointer"
        onClick={handleAddItem}
      >
        + 添加新的内容
      </div>
    </div>
  );
}

export default ComplexBlock;
