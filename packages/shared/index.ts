export interface Page {
  uuid: string;
  env: "runtime" | "design";
  templateId: string;
  /** 简历名称 */
  title: string;
  /** 个人信息 */
  basicInfo: IBasicInfo;
  /** 自定义信息：github、linkedin */
  customBasicInfo: CustomBasicInfoItem[];
  blocks: Block[];
}

// 基本信息模块
export interface IBasicInfo {
  /**姓名 */
  realName: string;
  /**手机号 */
  mobile: string;
  /**职位名称 */
  jobTitle: string;
  /**出生日期 */
  birthDate: string;
  /**工作地点 */
  location: string;
  /**电子邮件 */
  email: string;
  /**微信号 */
  wechat: string;
}

export interface CustomBasicInfoItem {
  id: string;
  /**键 */
  key: string;
  /**值 */
  value: string;
}

export enum BasicInfoKey {
  realName = "姓名",
  mobile = "手机号",
  jobTitle = "职位名称",
  birthDate = "出生日期",
  location = "工作地点",
  email = "电子邮件",
  wechat = "微信号",
}

export type BlockType = "simple" | "complex" | "tag";

export type BlockProps = {
  /**模块名称 */
  title: string;
  /**内容模块描述-工作经历、教育经历等 */
  type?: string;
  /**是否展示多个字段 */
  isMultiFile?: boolean;
  /**描述内容-简单模块 */
  content?: any;
  /**复杂模块条目 */
  items?: BlockItem[];
  /**复杂模块展示名称 */
  itemLabelMap?: TItemLabelMap;
};

export type TItemLabelMap = {
  [key in keyof Omit<BlockItem, "id">]?: string;
};

export interface Block {
  id: string;
  /**模块类型: 简单模块 | 复杂模块 */
  type: BlockType;
  /**传递给组件的配置props */
  config: BlockProps;
}

export interface BlockItem {
  id: string;
  /**条目名称 */
  title?: string;
  /**副标题 */
  subTitle?: string;
  /**城市 */
  city?: string;
  /**条目内容 */
  content: string;
  /**时间区间 */
  timeArea?: {
    from: number | undefined;
    to: number | undefined;
  };
  [key: string]: any;
}
