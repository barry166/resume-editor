import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from "react-dnd";

interface DragItem {
  id: number;
  index: number;
  type: string;
}

export const useDraggable = (
  type: string,
  id: string,
  index: number,
  moveItem: (dragIndex: number, hoverIndex: number) => void
) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: type,
    item: { id, index },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: type,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (item.index !== index) {
        moveItem(item.index, index);
        item.index = index;
      }
    },
  });

  return { isDragging, drag, drop, preview };
};
