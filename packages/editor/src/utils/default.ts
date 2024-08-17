import { Page } from "@resume/shared";

export const createDefaultPageConfig = (): Page => {
  return {
    uuid: "1",
    env: "design",
    templateId: "default-template",
    basicInfo: {
      realName: "张三",
      mobile: "13800000000",
      jobTitle: "前端开发工程师",
      birthDate: "1990-01-01",
      location: "北京",
      email: "zhangsan@example.com",
      wechat: "zhangsan123",
    },
    customBasicInfo: [
      { id: "1", key: "Github", value: "http://github/barry166" },
      { id: "2", key: "Blog", value: "http://solkatt.vip" },
      { id: "3", key: "Linkedin", value: "https://www.linkedin.com/" },
    ],
    blocks: [
      {
        uuid: "2",
        type: "simple",
        name: "个人简介",
        content: "拥有丰富的前端开发经验，熟练掌握 React、Vue 等主流前端框架。",
        items: [],
      },
      {
        uuid: "3",
        type: "complex",
        name: "工作经历",
        items: [
          { name: "公司A", content: "前端开发工程师", timeArea: [2019, 2021] },
          { name: "公司B", content: "全栈开发工程师", timeArea: [2021, 2023] },
        ],
      },
    ],
  };
};
