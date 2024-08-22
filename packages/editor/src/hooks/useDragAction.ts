import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// 定义基本的Item接口，包括必需的id属性
interface ItemWithId {
  id: string;
  [key: string]: any;
}

// Hook接口，增加泛型T，其中T必须是ItemWithId的扩展
interface UseDragActionHook<T extends ItemWithId> {
  items: T[];
  editingId: string | null;
  tempItem: T | null;
  setTempItem: React.Dispatch<React.SetStateAction<T | null>>
  handleAddItem: () => void;
  handleEditItem: (id: string, item: T) => void;
  handleSaveCreateItem: () => void;
  handleCancelEdit: () => void;
  handleDeleteItem: (id: string) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}

export function useDragAction<T extends ItemWithId>(
  initialValue: T[],
  onChange: (items: T[]) => void
): UseDragActionHook<T> {
  const [items, setItems] = useState<T[]>(initialValue);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempItem, setTempItem] = useState<T | null>(null);

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
    setTempItem({...item});
  };

  const handleSaveCreateItem = () => {
    if (tempItem) {
      const updatedItems = items.map(item => item.id === tempItem.id ? {...tempItem} : item);
      setItems(updatedItems);
      onChange(updatedItems);
      setEditingId(null);
      setTempItem(null);
    }
  };

  const handleCancelEdit = () => {
    setItems(items.filter(item => item.id !== editingId || Object.keys(item).length > 1));
    setEditingId(null);
    setTempItem(null);
  };

  const handleDeleteItem = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
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
    tempItem,
    setTempItem,
    handleAddItem,
    handleEditItem,
    handleSaveCreateItem,
    handleCancelEdit,
    handleDeleteItem,
    moveItem
  };
}
