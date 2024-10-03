import { SquarePen } from "lucide-react";
import useTitleEdit from "@/hooks/useTitleEdit";

export default function PageTitle({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const { isEdit, setIsEdit, inputRef } = useTitleEdit();

  return (
    <div className="flex items-center h-8 ">
      {isEdit ? (
        <div className="">
          <input
            ref={inputRef}
            type="text"
            className="w-[300px] border border-gray-300 rounded flex-grow mb-4 px-2 py-1 text-xl"
            defaultValue={value}
            onChange={(e) => onChange && onChange(e.target.value)}
          />
        </div>
      ) : (
        <>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
            {value}
          </h3>
          <SquarePen
            size={16}
            className="ml-2 hover:cursor-pointer"
            onClick={() => setIsEdit(true)}
          />
        </>
      )}
    </div>
  );
}
