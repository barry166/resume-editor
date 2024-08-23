import { DndProvider } from "react-dnd";
import { DraggableItem } from "./DraggableItem";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ItemWithId, RenderItemProps } from "@/types";

interface DraggableContainerProps<T> {
  items: T[];
  renderItem: (props: RenderItemProps<T>) => JSX.Element;
  itemClassName: string;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  editingId: string | null;
  setEditingId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const DraggableContainer = <T extends ItemWithId>({
  items,
  renderItem,
  itemClassName,
  moveItem,
  editingId,
  setEditingId,
}: DraggableContainerProps<T>): JSX.Element => {
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
            setEditing={setEditingId}
            renderItem={renderItem}
            itemClassName={itemClassName}
          />
        ))}
      </div>
    </DndProvider>
  );
};
