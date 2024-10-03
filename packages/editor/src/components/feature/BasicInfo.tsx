import { BasicComponentProps } from "@/types";
import { BasicInfoKey, IBasicInfo } from "@resume/shared";
import { debounce } from "lodash-es";
import { Input } from "../ui/input";
import BlockTitle from "./BlockTitle";

interface IProps extends Omit<BasicComponentProps, "onChange"> {
  onChange: (field: keyof IBasicInfo, value: string) => void;
}

const keys: Array<keyof IBasicInfo> = [
  "realName",
  "jobTitle",
  "location",
  "mobile",
  "email",
  "wechat",
  "birthDate",
];

export default function BasicInfo(props: IProps) {
  // console.log("basicinfo", props);
  const { value, onChange, id } = props;

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof IBasicInfo,
  ) => {
    onChange(key, e.target.value);
  };

  return (
    <div className="">
      <BlockTitle value="基本信息" />

      <div className="flex flex-wrap -mx-2">
        {keys.map((key) => (
          <div key={key} className="flex w-full md:w-1/2 px-3 mb-4">
            <label className="w-20 flex-shrink-0 mr-2 flex items-center text-[14px] text-gray-500">
              {BasicInfoKey[key]}
            </label>
            <Input
              type="text"
              defaultValue={value[key]}
              onChange={debounce((e) => onInputChange(e, key), 300)}
              className="w-2/3 p-2 border border-gray-300 rounded flex-grow"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
