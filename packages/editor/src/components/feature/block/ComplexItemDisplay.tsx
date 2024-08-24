import { BlockItem } from "@resume/shared";

interface IProps extends BlockItem {}

const ComplexItemDisplay: React.FC<IProps> = (props) => {
  const { title, subTitle, city, timeArea } = props;

  const renderTime = (timeArea: BlockItem["timeArea"]) => {
    if (timeArea && timeArea.from && timeArea.to) {
      // 将时间戳转换成2020-09格式
      const from = new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "2-digit",
      })
        .format(timeArea.from)
        .replace("/", "-");
      const to = new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "2-digit",
      })
        .format(timeArea.to)
        .replace("/", "-");
      return `${from} - ${to}`;
    }
    return null;
  };

  return (
    <div className="ml-4">
      <div className=" text=base font-semibold">
        <span>{title}</span>
        <span className="ml-2">{subTitle ? `-  ${subTitle}` : ""}</span>
      </div>
      <div className="mt-2 text-zinc-400">
        <span className="w-10">{city}</span>
        <span className="ml-3">{renderTime(timeArea)}</span>
      </div>
    </div>
  );
};

export default ComplexItemDisplay;
