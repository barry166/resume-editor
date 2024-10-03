import { Block, Page } from "@resume/shared";
import { pageState } from "./index";
import { useSetRecoilState } from "recoil";

export const useCustomBlockToPage = () => {
  const setPage = useSetRecoilState(pageState);

  return (newBlock: Block) => {
    setPage((prevPage: Page) => ({
      ...prevPage,
      blocks: [...prevPage.blocks, newBlock],
    }));
  };
};

export const useUpdateBlockStyle = () => {
  const setPage = useSetRecoilState(pageState);

  return (blockId: string, style: React.CSSProperties, force = false) => {
    setPage((prevPage: Page) => ({
      ...prevPage,
      blocks: prevPage.blocks.map((block) =>
        block.id === blockId
          ? { ...block, style: force ? style : { ...block.style, ...style } }
          : block,
      ),
    }));
  };
};

export const useDeleteBlock = () => {
  const setPage = useSetRecoilState(pageState);

  return (blockId: string) => {
    setPage((prevPage: Page) => ({
      ...prevPage,
      blocks: prevPage.blocks.filter((block) => block.id !== blockId),
    }));
  };
};
