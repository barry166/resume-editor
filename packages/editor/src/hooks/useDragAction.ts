import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// 定义基本的Item接口，包括必需的id属性
interface ItemWithId {
  id: string;
  [key: string]: any;
}

// Hook接口，增加泛型T，其中T必须是ItemWithId的扩展
interface UseDragActionHook<T extends ItemWithId> {
  items: T[];
  tempItem: T | null;
  setTempItem: React.Dispatch<React.SetStateAction<T | null>>;
  handleAddItem: () => void;
  handleEditItem: (id: string, item: T) => void;
  handleSaveCreateItem: () => void;
  handleCancelEdit: (flag?: boolean) => void;
  handleDeleteItem: (id: string) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  editingId: string | null;
  setEditingId: React.Dispatch<React.SetStateAction<string | null>>;
}

export function useDragAction<T extends ItemWithId>(
  initialValue: T[],
  onChange: (items: T[]) => void
): UseDragActionHook<T> {
  const [items, setItems] = useState<T[]>(initialValue);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempItem, setTempItem] = useState<T | null>(null);

  useEffect(() => {
    setItems(initialValue);
  }, [initialValue]);

  const handleAddItem = () => {
    const newId = uuidv4();
    const newItem = {} as T;
    newItem.id = newId;
    setEditingId(newId);
    setTempItem(newItem);
    setItems([...items, newItem]);
  };

  const handleEditItem = (id: string, item: T) => {
    setEditingId(id);
    setTempItem({ ...item });
  };

  const handleSaveCreateItem = () => {
    if (tempItem) {
      const updatedItems = items.map((item) => (item.id === tempItem.id ? { ...tempItem } : item));
      setItems(updatedItems);
      onChange(updatedItems);
      setEditingId(null);
      setTempItem(null);
    }
  };

  /**
   * 取消编辑
   * @param flag 标识是否保存已编辑数据
   */
  const handleCancelEdit = (flag = false) => {
    if (!flag) {
      setItems(items.filter((item) => item.id !== editingId || Object.keys(item).length > 1));
    }
    setEditingId(null);
    setTempItem(null);
  };

  const handleDeleteItem = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    onChange(updatedItems);
  };

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    setItems(newItems);
    onChange(newItems);
  };

  return {
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
  };
}
