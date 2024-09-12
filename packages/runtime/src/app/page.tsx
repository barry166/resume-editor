import { templateMap } from "@resume/template";
const DefaultTemplate = templateMap.default;
export default function Home() {
  return (
    <div className="h-screen bg-slate-100">
      <div className="w-full px-4 pt-10">
        <DefaultTemplate config={"11"} />
      </div>
    </div>
  );
}
