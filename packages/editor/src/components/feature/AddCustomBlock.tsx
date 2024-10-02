import { FileCheck2, SwatchBook, Dices } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useCustomBlockToPage } from "@/store/actions";
import { type BlockType } from "@resume/shared";
import BlockTitle from "./BlockTitle";

const customBlockConfig = [
  {
    label: "简单模块",
    type: "simple",
    config: {
      isMultiFile: false,
      content: "",
    },
    icon: <FileCheck2 />,
  },
  {
    label: "复杂模块",
    type: "complex",
    config: {
      isMultiFile: false,
      items: [],
    },
    icon: <SwatchBook />,
  },
  {
    label: "标签",
    type: "simple",
    config: {
      isMultiFile: false,
    },
    icon: <Dices />,
  },
];

// 添加自定义模块
const AddCustomBlock = () => {
  const addBlockToPage = useCustomBlockToPage();

  const handleAdd = (item: (typeof customBlockConfig)[number]) => {
    addBlockToPage({
      id: uuidv4(),
      type: item.type as BlockType,
      config: {
        title: item.label,
        ...item.config,
      },
    });
  };

  return (
    <div className="mt-6 mb-20">
      <BlockTitle value="添加自定义内容" />
      <span className="text-gray-500">点击下方块添加更多自定义内容</span>

      <div className="flex flex-wrap w-full mt-2 mb-2 gap-4">
        {customBlockConfig.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[calc(50%-8px)] h-[68px] flex items-center px-4 py-4 rounded-sm gap-4 border border-gray-300 cursor-pointer hover:border-blue-400 hover:text-blue-400"
              onClick={() => handleAdd(item)}
            >
              {item.icon}
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddCustomBlock;
