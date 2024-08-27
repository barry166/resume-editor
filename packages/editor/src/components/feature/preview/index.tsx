// import { Button } from "@/components/ui/button";
import { templateMap } from "@resume/template";
// import style from "@resume/template/dist/style.css";
import { Suspense } from "react";

const DefaultTemplate = templateMap.default;

const Preview = () => {
  // console.log("style", style);
  return (
    <Suspense fallback="template loading">
      <DefaultTemplate config={"design mode1"} />
    </Suspense>
  );
};

export default Preview;
