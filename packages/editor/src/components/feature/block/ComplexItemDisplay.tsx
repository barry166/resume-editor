import { BlockItem } from "@resume/shared";

interface IProps extends BlockItem {}

const ComplexItemDisplay: React.FC<IProps> = (props) => {
  const { title, subTitle, city, timeArea } = props;
  return (
    <div className="ml-4">
      <div className=" text=base font-semibold">
        <span>{title}</span>
        <span className="ml-2">{subTitle ? `-  ${subTitle}` : ''}</span>
      </div>
      <div className="mt-2 text-zinc-400">
        <span>{city}</span>
        <span className="ml-2">{timeArea?.length > 0 ? timeArea.toString() : ""}</span>
      </div>
    </div>
  );
};

export default ComplexItemDisplay;
