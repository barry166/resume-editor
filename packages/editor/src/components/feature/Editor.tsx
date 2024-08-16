import { useRecoilState } from "recoil";
import { pageState } from "@/store";
import BasicInfo from "./BasicInfo";
import { IBasicInfo } from "@resume/shared";

interface IProps {}

// 设计时编辑器
const Editor: React.FC<IProps> = () => {
  const [page, setPage] = useRecoilState(pageState);
  console.log("page", page);

  // 个人信息更新
  const handleBasicInfoChange = (field: keyof IBasicInfo, value: string) => {
    debugger
    setPage((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        [field]: value,
      },
    }));
  };

  return (
    <div className=" px-6">
      {/* 基本信息编辑 */}
      <BasicInfo value={page.basicInfo} onChange={handleBasicInfoChange} />

      {/* 区域块逻辑渲染 */}
    </div>
  );
};

export default Editor;
