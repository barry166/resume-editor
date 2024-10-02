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
