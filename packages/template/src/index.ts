import { lazy } from "react";
import './style.css'

export const templateMap = {
  default: lazy(() => import("./lib/default-template")),
  blue: lazy(() => import("./lib/template-blue")),
};
