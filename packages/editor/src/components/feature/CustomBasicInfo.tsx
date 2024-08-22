import BlockTitle from "./BlockTitle";
import { DraggableContainer } from "./DragDropContainer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useDragAction } from "@/hooks/useDragAction";

interface CustomBasicInfoItem {
  id: string;
  key: string;
  value: string;
}

interface IProps {
  value: CustomBasicInfoItem[];
  onChange: (items: CustomBasicInfoItem[]) => void;
}

const CustomBasicInfo: React.FC<IProps> = ({ value, onChange }) => {
  const {
    items,
    editingId,
    tempItem,
    setTempItem,
    handleAddItem,
    handleEditItem,
    handleSaveCreateItem,
    handleCancelEdit,
    handleDeleteItem,
    moveItem,
  } = useDragAction<CustomBasicInfoItem>(value, onChange);

  const renderItem = ({ item }: { item: CustomBasicInfoItem }) => (
    <div className="flex flex-1 items-center justify-between p-2">
      {editingId === item.id ? (
        <>
          <Input
            type="text"
            value={tempItem?.key || ""}
            className="flex-1"
            onChange={(e) => setTempItem((prev) => ({ ...prev!, key: e.target.value }))}
          />
          <Input
            type="text"
            value={tempItem?.value || ""}
            className="ml-8 mr-8 flex-1"
            onChange={(e) => setTempItem((prev) => ({ ...prev!, value: e.target.value }))}
          />
          <Button size="sm" onClick={handleSaveCreateItem}>
            {item.key ? "保存" : "创建"}
          </Button>
          <Button size="sm" variant="secondary" onClick={handleCancelEdit} className="ml-2">
            取消
          </Button>
        </>
      ) : (
        <>
          <span className="w-40 ml-4">{item.key}</span>
          <span className="flex-1">{item.value}</span>
          <Button size="sm" variant="secondary" onClick={() => handleEditItem(item.id, item)}>
            编辑
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => handleDeleteItem(item.id)}
            className="ml-3"
          >
            删除
          </Button>
        </>
      )}
    </div>
  );

  return (
    <>
      <BlockTitle text="自定义内容" />
      <DraggableContainer
        items={items}
        moveItem={moveItem}
        renderItem={renderItem}
        itemClassName="border p-2"
      />
      <div className="mt-4 text-blue-500 text-[13px] cursor-pointer" onClick={handleAddItem}>
        + 添加新的内容
      </div>
    </>
  );
};

export default CustomBasicInfo;
