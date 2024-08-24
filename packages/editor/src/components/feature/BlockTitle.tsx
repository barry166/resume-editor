import { Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const BlockTitle = ({
  value,
  onChange,
  canEdit = false,
}: {
  value?: string;
  onChange?: (value: string) => void;
  canEdit?: boolean;
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null); // 引用输入框元素

  const handleOutsideClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node) && isEdit) {
      setIsEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isEdit]);

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        {isEdit && canEdit ? (
          <input
            ref={inputRef}
            type="text"
            className="w-full border border-gray-300 rounded flex-grow mb-4 mt-4 h-9 px-2 text-xl"
            defaultValue={value}
            onChange={(e) => onChange && onChange(e.target.value)}
          />
        ) : (
          <>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4 mt-4">{value}</h3>
            {canEdit && (
              <Pencil
                size={16}
                className="ml-2 hover:cursor-pointer"
                onClick={() => setIsEdit(true)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlockTitle;
