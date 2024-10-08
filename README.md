# 简历编辑器

简历编辑器是一个基于Web的应用程序,用于创建和编辑专业简历。它提供了一个用户友好的界面,用于输入个人信息、工作经验、技能和其他相关详细信息。编辑器提供实时预览功能,允许用户在进行更改时实时查看简历的效果。

## 主要功能

- 交互式简历编辑,带实时预览
- 可自定义的部分,包括个人信息、工作经验、教育背景、技能等
- 详细描述的富文本编辑
- 拖放功能,用于重新排列各个部分
- 添加自定义部分的能力
- 最终简历的PDF下载选项

## 技术栈

- 前端: React, TypeScript, Vite
- 状态管理: Recoil
- 样式: Tailwind CSS
- UI组件: Radix UI, Shadcn UI
- 富文本编辑: React Quill
- 拖放功能: React DnD

## 项目结构

本项目使用pnpm工作空间设置为monorepo。主要的包包括:

- `packages/editor`: 主要的简历编辑器应用
- `packages/shared`: 共享类型和实用工具
- `packages/template`: 简历模板

## 快速开始

### 前置要求

- Node.js (v14 或更高版本)
- pnpm (v6 或更高版本)

### 安装

1. 克隆仓库:
   ```
   git clone https://github.com/your-username/resume-editor.git
   cd resume-editor
   ```

2. 安装依赖:
   ```
   pnpm install
   ```

3. 启动开发服务器:
   ```
   docker run --rm -p 8001:3000 gotenberg/gotenberg:8
   pnpm run dev
   ```

4. 在浏览器中打开 `http://localhost:5173` 查看应用。

## 使用说明

1. 在网络浏览器中打开简历编辑器。
2. 使用左侧面板输入和编辑您的简历信息。
3. 右侧面板显示简历的实时预览。
4. 通过添加、删除或重新排列来自定义各个部分。
5. 完成后,使用"下载PDF"按钮导出您的简历。


## TODO
- 登录注册
  微信登录

- 收费服务
  第三方支付

- 数据存储
  用户数据存储

- 首页介绍页开发


## 贡献

欢迎贡献!请随时提交Pull Request。

## 许可证

本项目采用MIT许可证 - 查看[LICENSE](LICENSE)文件了解详情。

## 链接

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Recoil](https://recoiljs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Quill](https://github.com/zenoamaro/react-quill)
- [React DnD](https://react-dnd.github.io/react-dnd/)
