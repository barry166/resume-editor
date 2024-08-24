import { atom, selectorFamily } from "recoil";
import { Page } from "@resume/shared";
import { createDefaultPageConfig } from "@/utils/default";

export const pageState = atom<Page>({
  key: "pageState",
  default: createDefaultPageConfig(),
});

export const blockState = selectorFamily({
  key: "blockState",
  get:
    (id: string) =>
    ({ get }) => {
      const page = get(pageState);
      return page.blocks.find((block) => block.id === id)!;
    },
});
