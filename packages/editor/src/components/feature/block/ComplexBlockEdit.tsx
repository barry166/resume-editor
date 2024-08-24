import { ArrowUpFromLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlockItem, TItemLabelMap } from "@resume/shared";
import { defaultBlockItenLabelMap } from "@/utils/default";
import { DatePickerWithRange } from "@/components/ui/DatePickerWithRange";
import RichTextEditor from "../commoneEditor";
import { debounce } from "lodash-es";
import { DateRange } from "@/types/date";

interface IProps {
  item: BlockItem;
  itemLabelMap?: TItemLabelMap;
  onClose: (flag?: boolean) => void;
  onChange: (id: string, key: string, value?: any) => void;
}

const keysMap = ["title", "subTitle", "city", "timeArea", "content"];
const ComplexBlockEdit: React.FC<IProps> = (props) => {
  const { item, itemLabelMap, onClose, onChange } = props;

  const handleChange = debounce((key: string, value?: string | DateRange) => {
    onChange(item.id, key, value);
  });

  const handleTimeArea = (key: string, date: DateRange | undefined) => {
    const changeDate: { from: number | undefined; to: number | undefined } = { from: 0, to: 0 };
    if (date) {
      // 转换成时间戳保存
      changeDate.from = date.from && new Date(date.from).getTime();
      changeDate.to = date.to && new Date(date.to).getTime();
    }
    onChange(item.id, key, changeDate);
  };

  const renderItemByType = (key: string) => {
    switch (key) {
      case "timeArea":
        return (
          <DatePickerWithRange className="w-full" onChange={(date) => handleTimeArea(key, date)} />
        );
      case "content":
        return (
          <RichTextEditor value={item[key]} onChange={(content) => handleChange(key, content)} />
        );
      default:
        return (
          <Input
            type="text"
            defaultValue={item[key] || ""}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-full border border-gray-300 rounded flex-grow"
          />
        );
    }
  };

  const renderFormItem = () => {
    return keysMap.map((key, index) => {
      const className = `flex flex-col ${key === "content" ? "w-full" : "md:w-1/2"}  mb-4 px-2`;
      return (
        <div key={index} className={className}>
          <label className="w-20 flex-shrink-0 mr-2 flex items-center text-[14px] text-gray-500">
            {itemLabelMap?.[key] || defaultBlockItenLabelMap[key]}
          </label>
          <div className="mt-2 w-full">{renderItemByType(key)}</div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col w-full ml-2">
      <div className=" flex justify-between">
        <Button variant="outline" size="sm" onClick={() => onClose(true)}>
          <ArrowUpFromLine size={16} />
          收起
        </Button>
        <Button size="sm" variant="outline">
          样式设置
        </Button>
      </div>
      <div className="mt-4 flex flex-wrap -mx-2">{renderFormItem()}</div>
      <div className="close-wrapper -mt-4">
        <Button variant="outline" className=" text-green-400" onClick={() => onClose(true)}>
          关闭并继续
        </Button>
      </div>
    </div>
  );
};
export default ComplexBlockEdit;
