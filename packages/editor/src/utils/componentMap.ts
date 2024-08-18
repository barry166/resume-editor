/**
 * block组件映射
 */
import { SimpleBlock, ComplexBlock } from "@/components/feature/block";
import { BlockProps } from "@resume/shared";

export const componentMap: Record<"simple" | "complex", React.FC<BlockProps>> = {
  simple: SimpleBlock,
  complex: ComplexBlock,
};
