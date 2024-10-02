import { Page, TItemLabelMap } from "@resume/shared";

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
    title: "自定义简历",
    customBasicInfo: [
      { id: "1", key: "Github", value: "http://github/barry166" },
      { id: "2", key: "Blog", value: "http://solkatt.vip" },
      { id: "3", key: "Linkedin", value: "https://www.linkedin.com/" },
    ],
    blocks: [
      {
        id: "2",
        type: "simple",
        config: {
          title: "个人简介",
          content:
            "拥有丰富的前端开发经验，熟练掌握 React、Vue 等主流前端框架。",
        },
      },
      {
        id: "3",
        type: "complex",
        config: {
          title: "工作经历",
          items: [
            {
              id: "1",
              title: "公司A",
              content: "前端开发工程师。。。",
              subTitle: "高级前端开发",
              city: "北京",
              timeArea: {
                from: 1642608000000,
                to: 1644422400000,
              },
            },
            {
              id: "2",
              title: "公司B",
              content: "全栈开发工程师。。。",
              subTitle: "高级前端开发",
              city: "北京",
              timeArea: {
                from: 1642608000000,
                to: 1644422400000,
              },
            },
          ],
          itemLabelMap: {
            title: "公司名称",
            subTitle: "职位名称",
            timeArea: "起止时间",
            city: "所在城市",
          },
        },
      },
      {
        id: "4",
        type: "complex",
        config: {
          title: "教育经历",
          isMultiFile: true,
          items: [
            {
              id: "1",
              title: "公司A",
              content: "前端开发工程师。。。",
              subTitle: "高级前端开发",
              city: "北京",
              timeArea: {
                from: 1642608000000,
                to: 1644422400000,
              },
            },
          ],
          itemLabelMap: {
            title: "学校名称",
            subTitle: "最高学历",
            timeArea: "起止时间",
            city: "专业",
            content: "描述",
          },
        },
      },
      {
        id: "5",
        type: "tag",
        config: {
          title: "爱好标签",
          items: [
            { id: "11", content: "前端开发" },
            { id: "22", content: "React" },
          ],
        },
      },
    ],
  };
};

export const defaultBlockItenLabelMap = {
  title: "条目名称",
  content: "条目内容",
  timeArea: "开始&结束时间",
} as TItemLabelMap;
