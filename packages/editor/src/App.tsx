// import { DefaultTemplate } from "@resume/template";
import Header from "@/components/feature/Header";
import Editor from "./components/feature/Editor";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex flex-col h-full">
        <div className="flex flex-1 overflow-hidden" style={{ height: "calc(100vh - 4rem)" }}>
          {/* Editor */}
          <div className="w-1/2 overflow-auto">
            <Editor />
          </div>
          {/* Preview */}
          <div className="w-1/2 overflow-auto">{/* Add right side content here */}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
