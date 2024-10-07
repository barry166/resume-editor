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
            '<ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>拥有丰富的前端开发经验，熟练掌握 React、Vue 等主流前端框架。</li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>拥有丰富的前端开发经验，熟练掌握 React、Vue 等主流前端框架。</li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>拥有丰富的前端开发经验，熟练掌握 React、Vue 等主流前端框架。</li></ol><p>assssss</p><h2>aaaaaaa前端开发经验，熟练掌握 React、Vue 等主流前端框架。</h2><p>kkk</p><p>qqq</p><p>end</p>',
        },
        style: { marginTop: "-3px" },
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
              timeArea: { from: 1642608000000, to: 1644422400000 },
            },
            {
              id: "31",
              title: "公司B",
              content: "全栈开发工程师。。。",
              subTitle: "高级前端开发",
              city: "北京",
              timeArea: { from: 1642608000000, to: 1644422400000 },
            },
            {
              id: "512",
              title: "公司B",
              content: "全栈开发工程师。。。",
              subTitle: "高级前端开发",
              city: "北京",
              timeArea: { from: 1642608000000, to: 1644422400000 },
            },
            {
              id: "513",
              title: "公司B",
              content: "全栈开发工程师。。。",
              subTitle: "高级前端开发",
              city: "北京",
              timeArea: { from: 1642608000000, to: 1644422400000 },
            },
            {
              id: "514",
              title: "公司B",
              content:
                "<p>90后卖糖小葫芦</p><p>小韭菜甜又甜</p><p>魔力试试</p>",
              subTitle: "高级前端开发",
              city: "北京",
              timeArea: { from: 1642608000000, to: 1644422400000 },
            },
            {
              id: "515",
              title: "公司B11",
              content:
                "<p>糖葫芦</p><p>甜甜的一个大</p><p>打啊啊啊啊啊啊啊啊啊啊啊啊</p><p>12</p><p>12</p><p>1</p><p>31</p><p>end</p>",
              subTitle: "高级前端开发",
              city: "北京",
              timeArea: { from: 1642608000000, to: 1644422400000 },
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
        id: "project",
        type: "complex",
        config: {
          title: "项目经历",
          isMultiFile: false,
          items: [
            {
              id: "123",
              title: "KMS（AI智能体平台）",
              content: "",
              timeArea: { from: 1642608000000, to: 1644422400000 },
            },
          ],
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
      {
        id: "6b0e06ae-0c87-429e-8ff5-fe1786867575",
        type: "simple",
        config: {
          title: "简单模块",
          isMultiFile: false,
          content: "<p>1111111111111111</p>",
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
