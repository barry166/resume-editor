import { Button } from "../ui/button";
import { downloadPdf } from "@/api/downloadPdf";

export default function Header() {
  const onDownload = () => {
    downloadPdf();
  };

  return (
    <header className="bg-black h-16 ">
      <div className=" h-full flex justify-between items-center px-10">
        <span className=" text-stone-50">简历编辑器</span>
        <div className="">
          <Button size="sm" variant="outline">
            保存
          </Button>
          <Button size="sm" variant="outline" className="ml-4" onClick={onDownload}>
            下载PDF
          </Button>
        </div>
      </div>
    </header>
  );
}
