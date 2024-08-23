import { BlockItem, BlockProps } from "@resume/shared";
import BlockTitle from "../BlockTitle";
import { DraggableContainer } from "../DragDropContainer";
import { useDragAction } from "@/hooks/useDragAction";
import CommonDragAction from "../CommonDragAction";
import ComplexItemDisplay from "./ComplexItemDisplay";
import ComplexBlockEdit from "./ComplexBlockEdit";
import { cloneDeep } from "lodash-es";

interface IProps extends BlockProps {
  onChange: (items: any[]) => void;
}
function ComplexBlock(props: IProps) {
  const { items: value = [], onChange, itemLabelMap } = props;
  const {
    items,
    editingId,
    setEditingId,
    tempItem,
    setTempItem,
    handleAddItem,
    handleEditItem,
    handleSaveCreateItem,
    handleCancelEdit,
    handleDeleteItem,
    moveItem,
  } = useDragAction(value, onChange);

  const handleItemChange = (id: string, key: string, value?: any) => {
    const newItems = cloneDeep(items);
    const targetItem = newItems.find((item) => item.id === id);
    if (!targetItem) return;
    targetItem[key] = value;
    onChange(newItems);
  };

  const renderItem = ({ item }: { item: BlockItem }) => {
    return (
      <div className="flex flex-1 items-center justify-between p-2">
        {editingId === item.id ? (
          // <>
          //   <Input
          //     type="text"
          //     value={tempItem?.key || ""}
          //     className="flex-1"
          //     onChange={(e) =>
          //       setTempItem((prev: BlockItem | null) => ({ ...prev!, key: e.target.value }))
          //     }
          //   />
          //   <Input
          //     type="text"
          //     value={tempItem?.value || ""}
          //     className="ml-8 mr-8 flex-1"
          //     onChange={(e) =>
          //       setTempItem((prev: BlockItem | null) => ({ ...prev!, value: e.target.value }))
          //     }
          //   />
          //   <Button size="sm" onClick={handleSaveCreateItem}>
          //     {item.key ? "保存" : "创建"}
          //   </Button>
          //   <Button size="sm" variant="secondary" onClick={handleCancelEdit} className="ml-2">
          //     取消
          //   </Button>
          // </>
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
    <div className="complex-block">
      <BlockTitle text={props.title} />
      <DraggableContainer
        items={items || []}
        moveItem={moveItem}
        editingId={editingId}
        setEditingId={setEditingId}
        renderItem={renderItem}
        itemClassName="border p-2"
      />
      <div className="mt-4 text-blue-500 text-[13px] cursor-pointer" onClick={handleAddItem}>
        + 添加新的内容
      </div>
    </div>
  );
}

export default ComplexBlock;
