import { DefaultTemplate } from "@resume/template";
export default function Home() {
  return (
    <div>
      home page
      <div className="px-4">
        <DefaultTemplate config={""} />
      </div>
    </div>
  );
}
