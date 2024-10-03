import { Settings, Trash2, RotateCcw } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUpdateBlockStyle, useDeleteBlock } from "@/store/actions";
import { Input } from "@/components/ui/input";
import { blockState } from "@/store";
import { useRecoilValue } from "recoil";
import { useMemo } from "react";

export default function BlockTitleAction({ blockId }: { blockId: string }) {
  const block = useRecoilValue(blockState(blockId));

  const updateBlockStyle = useUpdateBlockStyle();
  const deleteBlock = useDeleteBlock();

  const inputValue = useMemo(() => {
    const value = block?.style?.marginTop?.replace("px", "");
    if (value === undefined || value === null) {
      return 0;
    }
    return Number(value);
  }, [block]);

  const handleDelete = () => {
    console.log("delete block", blockId);
    deleteBlock(blockId);
  };

  const handleUpdateBlockStyle: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    console.log("update block style", e.target.value, typeof e.target.value);
    updateBlockStyle(blockId, {
      marginTop: e.target.value + "px",
    });
  };

  const resetBlockStyle = () => {
    updateBlockStyle(blockId, {}, true);
  };

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-2 text-blue-500 hover:cursor-pointer">
            <Settings size={14} className="ml-2" />
            <span className="">设置</span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-90">
          <div>
            <div className="text-sm text-muted-foreground">设置样式属性</div>
            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="w-[180px]">上边距（px）：</span>
              <Input
                type="number"
                className="text-sm h-6 "
                onChange={handleUpdateBlockStyle}
                value={inputValue}
              />
              <RotateCcw
                className="ml-2 cursor-pointer"
                onClick={resetBlockStyle}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <div className="h-[15px] w-[2px] bg-gray-300 my-4" />
      <div
        className="flex items-center gap-2 text-red-500 hover:cursor-pointer"
        onClick={handleDelete}
      >
        <Trash2 size={14} />
        <span className="">删除</span>
      </div>
    </div>
  );
}
