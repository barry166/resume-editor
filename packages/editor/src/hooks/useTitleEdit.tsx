import { useState, useEffect, useRef } from "react";

export default function useTitleEdit() {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null); // 引用输入框元素

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      isEdit
    ) {
      setIsEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isEdit]);

  return {
    isEdit,
    setIsEdit,
    inputRef,
  };
}
