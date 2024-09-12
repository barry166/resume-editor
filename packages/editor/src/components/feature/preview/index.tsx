import { Suspense } from "react";
import { useRecoilState } from "recoil";
import { pageState } from "@/store";
import { templateMap } from "@resume/template";
const DefaultTemplate = templateMap.default;

const Preview = () => {
  const [page] = useRecoilState(pageState);
  return (
    <div className="min-h-full px-2">
      {/* 状态栏 */}
      <div className="status-header">
        <span className="text-zinc-400 text-xs"> 保存于：2024-09-11 20:41</span>
      </div>
      <div className="min-w-[50vw] h-[calc(100vh-40px)] overflow-y-auto">
        <div className=" relative scale-90">
          <Suspense fallback="template loading">
            <DefaultTemplate config={page} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Preview;
