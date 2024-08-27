import { templateMap } from "@resume/template";
const DefaultTemplate = templateMap.default;
export default function Home() {
  return (
    <div>
      home page
      <div className="px-4">
        <DefaultTemplate config={"11"} />
      </div>
    </div>
  );
}
