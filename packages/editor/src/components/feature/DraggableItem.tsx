import { useDraggable } from "@/hooks/useDraggable";
import { GripHorizontal } from "lucide-react";
import { ItemWithId, RenderItemProps } from "@/types";

interface DraggableItemProps<T extends ItemWithId> {
  item: T;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  isEditing: boolean;
  setEditing: (id: string | null) => void;
  renderItem: (props: RenderItemProps<T>) => JSX.Element;
  itemClassName: string;
}

export const DraggableItem = <T extends ItemWithId>({
  item,
  index,
  moveItem,
  isEditing,
  setEditing,
  renderItem,
  itemClassName,
}: DraggableItemProps<T>): JSX.Element => {
  const { isDragging, drag, drop, preview } = useDraggable("item", item.id, index, moveItem);

  return (
    <div
      ref={(node) => drop(preview(node))}
      className={`${itemClassName} ${
        isDragging ? "shadow-lg bg-blue-50" : "shadow-sm"
      } transition duration-300 ease-in-out flex items-center mb-3`}
    >
      {!isEditing && (
        <div className="inline-block cursor-move" ref={drag}>
          <GripHorizontal />
        </div>
      )}
      {renderItem({ item, isEditing, setEditing })}
    </div>
  );
};
