import { useState, useEffect, useRef } from "react";

// pdf位置虚线容器
interface LineContainerProps {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

// function calculateDPI() {
//   const div = document.createElement("div");
//   div.style.width = "1in";
//   div.style.height = "1in";
//   div.style.position = "absolute";
//   div.style.left = "-100%";
//   div.style.top = "-100%";
//   document.body.appendChild(div);
//   const dpi = div.offsetWidth;
//   document.body.removeChild(div);
//   return dpi;
// }

// const DPI = calculateDPI();
// const inchesToPx = (inches: number) => inches * DPI;

// const A4_HEIGHT = inchesToPx(15.12);
// console.log("A4_HEIGHT", A4_HEIGHT);

const A4_WIDTH_IN = 10.69;
const A4_HEIGHT_IN = 15.12;
const DPI = 96; // 标准显示器DPI

// 定义A4纸张高度
// const A4_HEIGHT = 1454.55;

export default function LineContainer(props: LineContainerProps) {
  const { containerRef } = props;
  const lineContainerRef = useRef<HTMLDivElement | null>(null);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateContainerRect = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect());
      }
    };

    const resizeObserver = new ResizeObserver(updateContainerRect);
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef]);

  useEffect(() => {
    if (!lineContainerRef.current || !containerRect) return;

    // 清空子节点
    lineContainerRef.current.innerHTML = "";

    // const lineCount = Math.floor(containerRect.height / A4_HEIGHT);

    const A4_HEIGHT_PX = A4_HEIGHT_IN * DPI;
    const scale = containerRect.width / (A4_WIDTH_IN * DPI);
    const lineCount = Math.floor(containerRect.height / (A4_HEIGHT_PX * scale));

    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement("div");
      line.textContent = `第 ${i + 1} 页末`;
      line.style.position = "absolute";
      line.style.left = "0";
      line.style.right = "0";
      // line.style.top = `calc(${i + 1} * var(--a4-height-px))`;
      line.style.top = `${(i + 1) * A4_HEIGHT_IN}in`;
      line.style.height = "1px";
      line.style.width = "100%";
      line.style.borderTop = "2px dashed #2563eb";
      line.style.color = "#2563eb";
      line.style.fontSize = "14px";
      line.style.textAlign = "center";
      lineContainerRef.current.appendChild(line);
    }
  }, [containerRect]);

  return <div id="line-container" ref={lineContainerRef}></div>;
}
