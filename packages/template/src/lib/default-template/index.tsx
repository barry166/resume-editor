import "./index.css";
export interface IProps {
  config: any;
}
export default function DefaultTemplate(props: IProps) {
  console.log("props", props);
  return (
    <div className="px-2 text-xl text-gray-500 w-full">
      <span className=" px-3 text-red-500 cursor-pointer">default template</span>
      this props is :{JSON.stringify(props.config)}
    </div>
  );
}
