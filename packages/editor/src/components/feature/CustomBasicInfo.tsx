import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlockTitle from "./BlockTitle";
import { DraggableContainer } from "./DragDropContainer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

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
  const [items, setItems] = useState<CustomBasicInfoItem[]>(value);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempItem, setTempItem] = useState<{ id: string; key: string; value: string } | null>(null);

  const handleAddItem = () => {
    const newId = uuidv4();
    setEditingId(newId);
    setTempItem({ id: newId, key: "", value: "" });
    setItems([...items, { id: newId, key: "", value: "" }]); // Add empty item directly to list
  };

  const handleEditItem = (id: string, item: CustomBasicInfoItem) => {
    setEditingId(id);
    setTempItem({ id, key: item.key, value: item.value });
  };

  const handleSaveCreateItem = () => {
    if (tempItem && tempItem.key && tempItem.value) {
      const updatedItems = items.map((item) => (item.id === tempItem.id ? { ...tempItem } : item));
      setItems(updatedItems);
      onChange(updatedItems);
      setEditingId(null);
      setTempItem(null);
    }
  };

  const handleCancelEdit = () => {
    if (editingId) {
      if (!items.find((item) => item.id === editingId && item.key)) {
        // Remove temp item if it's a new item being cancelled
        setItems(items.filter((item) => item.id !== editingId));
      }
      setEditingId(null);
      setTempItem(null);
    }
  };

  const handleDeleteItem = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    onChange(updatedItems);
  };

  const handleItemChange = (newItems: CustomBasicInfoItem[]) => {
    setItems(newItems);
    onChange(newItems);
  };

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    handleItemChange(newItems);
  };

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
            className="ml-2"
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
