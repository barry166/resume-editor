import { ItemWithId } from "@/types";
import { Button } from "../ui/button";

interface CommonDragActionProps<T> {
  item: T;
  onEditItem: (id: string, item: T) => void;
  onDeleteItem: (id: string) => void;
}

export default function CommonDragAction<T extends ItemWithId>({
  item,
  onEditItem,
  onDeleteItem,
}: CommonDragActionProps<T>) {
  return (
    <div>
      <Button size="sm" variant="secondary" onClick={() => onEditItem(item.id, item)}>
        编辑
      </Button>
      <Button
        size="sm"
        variant="destructive"
        onClick={() => onDeleteItem(item.id)}
        className="ml-3"
      >
        删除
      </Button>
    </div>
  );
}
