// import { DefaultTemplate } from "@resume/template";
import Header from "@/components/feature/Header";
import Editor from "./components/feature/Editor";

function App() {
  return (
    <div className="h-screen overflow-hidden bg-[#efefef]">
      <Header />
      <main className="flex flex-col h-full">
        <div className="flex flex-1 overflow-hidden" style={{ height: "calc(100vh - 4rem)" }}>
          {/* Editor */}
          <div className="w-1/2 scroll-overlay bg-white">
            <Editor />
          </div>
          {/* Preview */}
          <div className="w-1/2 scroll-overlay"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
