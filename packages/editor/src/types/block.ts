import { Block } from "@resume/shared";

export interface IBlockComponentProps {
  id: string;
  onChange: (block: Block) => void;
}
