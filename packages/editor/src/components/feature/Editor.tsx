import { useRecoilState } from "recoil";
import { pageState } from "@/store";
import BasicInfo from "./BasicInfo";
import { BlockItem, CustomBasicInfoItem, IBasicInfo } from "@resume/shared";
import CustomBasicInfo from "./CustomBasicInfo";
import { componentMap } from "@/utils/componentMap";

interface IProps {}

// 编辑器
const Editor: React.FC<IProps> = () => {
  const [page, setPage] = useRecoilState(pageState);
  console.log("page", page);

  // 个人信息更新
  const handleBasicInfoChange = (field: keyof IBasicInfo, value: string) => {
    setPage((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        [field]: value,
      },
    }));
  };

  const handleCustomBasicInfoChange = (items: CustomBasicInfoItem[]) => {
    setPage((prev) => ({
      ...prev,
      customBasicInfo: items,
    }));
  };

  const handleBlockChange = (id: string, items: BlockItem[]) => {
    const targetBlock = page.blocks.find((block) => block.id === id);
    if (!targetBlock) return;
    setPage((prev) => ({
      ...prev,
      blocks: page.blocks.map((block) => {
        if (block.id === id) {
          return {
            ...block,
            config: {
              ...block.config,
              items,
            },
          };
        }
        return block;
      }),
    }));
  };

  return (
    <div className=" px-6 py-6">
      {/* 基础信息编辑 */}
      <BasicInfo value={page.basicInfo} onChange={handleBasicInfoChange} />
      {/* 自定义基础信息编辑 */}
      <CustomBasicInfo value={page.customBasicInfo} onChange={handleCustomBasicInfoChange} />

      {/* 区域块逻辑渲染 */}
      {page.blocks.map((block) => {
        const { id, type, config } = block;
        const BlockComponent = componentMap[type];
        if (!BlockComponent) return null;
        return (
          <BlockComponent
            key={id}
            {...config}
            onChange={(items: BlockItem[]) => handleBlockChange(id, items)}
          />
        );
      })}
    </div>
  );
};

export default Editor;
