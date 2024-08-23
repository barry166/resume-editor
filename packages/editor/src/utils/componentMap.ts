/**
 * block组件映射
 */
import { SimpleBlock, ComplexBlock } from "@/components/feature/block";
import { BlockProps } from "@resume/shared";

interface IProps extends BlockProps {
  onChange: (items: any[]) => void;
}

export const componentMap: Record<"simple" | "complex", React.FC<IProps>> = {
  simple: SimpleBlock,
  complex: ComplexBlock,
};
