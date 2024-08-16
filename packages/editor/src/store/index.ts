import { atom } from "recoil";
import { Page } from "@resume/shared";
import { createDefaultPageConfig } from "@/utils/default";

export const pageState = atom<Page>({
  key: "pageState",
  default: createDefaultPageConfig(),
});
