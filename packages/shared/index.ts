export interface Page {
  uuid: string;
  env: "runtime" | "design";
  templateId: string;
  // 个人信息
  basicInfo: IBasicInfo;
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

export enum BasicInfoKey {
  realName = "姓名",
  mobile = "手机号",
  jobTitle = "职位名称",
  birthDate = "出生日期",
  location = "工作地点",
  email = "电子邮件",
  wechat = "微信号",
}

export interface Block {
  uuid: string;
  /**模块类型: 简单模块 | 复杂模块 */
  type: "simple" | "complex";
  /**模块名称 */
  name: string;
  /**描述内容-简单模块 */
  content?: string;
  /**复杂模块条目 */
  items: BlockItem[];
}

export interface BlockItem {
  /**条目名称 */
  name: string;
  /**条目内容 */
  content: string;
  /**时间区间 */
  timeArea: [number, number];
}
