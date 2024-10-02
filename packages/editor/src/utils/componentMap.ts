/**
 * block组件映射
 */
import {
  SimpleBlock,
  ComplexBlock,
  TagBlock,
} from "@/components/feature/block";
import { IBlockComponentProps } from "@/types/block";

export const componentMap: Record<
  "simple" | "complex" | "tag",
  React.FC<IBlockComponentProps>
> = {
  simple: SimpleBlock,
  complex: ComplexBlock,
  tag: TagBlock,
};
