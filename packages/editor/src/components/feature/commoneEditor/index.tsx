import { useState, FunctionComponent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// 定义props的类型
interface RichTextEditorProps {
  value: string;
  onChange?: (content: string) => void;
}

const RichTextEditor: FunctionComponent<RichTextEditorProps> = ({ value, onChange }) => {
  const [editorHtml, setEditorHtml] = useState<string>(value);

  const handleChange = (content: string, delta: any, source: string, editor: any) => {
    setEditorHtml(content);
    if (onChange) {
      onChange(content);
    }
  };

  return (
    <div className="editor-container h-72 overflow-hidden">
      <ReactQuill
        style={{ height: "200px" }}
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

// 定义模块和格式的类型
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default RichTextEditor;
