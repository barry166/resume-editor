export interface IProps {
  config: any;
}
export default function DefaultTemplate(props: IProps) {
  console.log("props", props);
  return <div className="px-2 text-xl text-gray-500">default template{JSON.stringify(props.config)}</div>;
}
6