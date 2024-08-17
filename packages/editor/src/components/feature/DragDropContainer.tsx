import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { DraggableItem } from "./DraggableItem";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ItemWithId, RenderItemProps } from "@/types";

interface DraggableContainerProps<T> {
  items: T[];
  renderItem: (props: RenderItemProps<T>) => JSX.Element;
  itemClassName: string;
  moveItem: (dragIndex: number, hoverIndex: number) => void
}

export const DraggableContainer = <T extends ItemWithId>({
  items,
  renderItem,
  itemClassName,
  moveItem
}: DraggableContainerProps<T>): JSX.Element => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const setEditing = (id: string | null) => {
    setEditingId((prev) => (prev === id ? null : id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            item={item}
            index={index}
            moveItem={moveItem}
            isEditing={editingId === item.id}
            setEditing={setEditing}
            renderItem={renderItem}
            itemClassName={itemClassName}
          />
        ))}
      </div>
    </DndProvider>
  );
};
