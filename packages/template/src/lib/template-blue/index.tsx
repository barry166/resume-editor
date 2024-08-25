export interface IProps {
  config: any;
}
export default function TemplateBlue(props: IProps) {
  console.log("props", props);
  return <div className="px-2 text-xl text-blue-500">default template{JSON.stringify(props.config)}</div>;
}
6