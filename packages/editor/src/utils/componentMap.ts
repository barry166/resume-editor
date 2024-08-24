/**
 * block组件映射
 */
import { SimpleBlock, ComplexBlock } from "@/components/feature/block";
import { IBlockComponentProps } from "@/types/block";

export const componentMap: Record<"simple" | "complex", React.FC<IBlockComponentProps>> = {
  simple: SimpleBlock,
  complex: ComplexBlock,
};
