import { Toaster } from "react-hot-toast";
import useReadme from "./utils/hooks";
import InputText from "./components/InputText";
import OutputPreview from "./components/OutputPreview";
import Toolbar from "./components/Toolbar";

const App = () => {
  const {
    inputText,
    setInputText,
    readme,
    loading,
    error,
    fetchReadme,
    reset,
  } = useReadme();

  return (
    <div className="h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#18181b",
            color: "#fafafa",
            border: "1px solid #27272a",
            borderRadius: "12px",
          },
        }}
      />
    
      <div className="h-full max-w-8xl mx-auto flex flex-col">
        <header className="px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex flex-row items-center justify-between gap-6 shrink-0">
          <div className="flex items-center gap-4">    
            <div>
              <h1 className="text-lg font-semibold tracking-tight">EasyMD</h1>
            </div>
          </div>
    
          <Toolbar
            readme={readme}
            onReset={reset}
            fetchReadme={fetchReadme}
            isLoading={loading}
            hasInput={inputText.trim().length > 0}
          />
        </header>
    
        {error && (
          <div className="mx-4 sm:mx-6 lg:mx-8 mb-4 rounded-xl border border-red-900/50 bg-red-950/40 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}
    
        <main className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 overflow-auto">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden flex flex-col min-h-87.5 lg:min-h-0">
            <div className="px-4 sm:px-6 py-4 border-b border-zinc-800">
              <h2 className="font-medium">Project Description</h2>
            </div>
    
            <InputText
              inputText={inputText}
              setInputText={setInputText}
            />
          </section>
    
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden flex flex-col min-h-87.5 lg:min-h-0">
            <div className="px-4 sm:px-6 py-4 border-b border-zinc-800">
              <h2 className="font-medium">README Preview</h2>
            </div>
    
            <OutputPreview
              readme={readme}
              loading={loading}
              error={error}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
