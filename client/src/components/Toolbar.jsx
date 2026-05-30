import { useState } from "react";
import toast from "react-hot-toast";

const Toolbar = ({ readme, onReset, fetchReadme, isLoading, hasInput }) => {
  const [copied, setCopied] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  const handleCopy = async () => {
    if (!readme) return;

    await navigator.clipboard.writeText(readme);

    setCopied(true);
    toast.success("Copied");

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDownload = () => {
    if (!readme) return;

    const blob = new Blob([readme], {
      type: "text/markdown",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `README-${Date.now()}.md`;

    a.click();

    URL.revokeObjectURL(url);

    toast.success("Downloaded");
  };

  return (
    <div className="flex items-center gap-3">
      {readme && (
        <>
          {/* Desktop actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-sm text-zinc-300 transition"
            >
              {copied ? "Copied" : "Copy"}
            </button>
  
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-sm text-zinc-300 transition"
            >
              Download
            </button>
  
            <button
              onClick={onReset}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-sm text-zinc-300 transition"
            >
              Clear
            </button>
          </div>
  
          {/* Mobile menu */}
          <div className="relative sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-3 py-2 rounded-xl bg-zinc-900 text-zinc-300"
            >
              ⋮
            </button>
  
            {menuOpen && (
              <div className="absolute right-0 top-12 w-40 rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl z-50 overflow-hidden">
                <button
                  onClick={() => {
                    handleCopy();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm hover:bg-zinc-800 active:bg-zinc-700"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
  
                <button
                  onClick={() => {
                    handleDownload();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm hover:bg-zinc-800 active:bg-zinc-700" 
                >
                  Download
                </button>
  
                <button
                  onClick={() => {
                    onReset();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm hover:bg-zinc-800 active:bg-zinc-700"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </>
      )}
  
      <button
        onClick={fetchReadme}
        disabled={isLoading || !hasInput}
        className="
          px-5
          py-2.5
          rounded-xl
          bg-white
          text-black
          text-sm
          font-medium
          hover:opacity-90
          disabled:opacity-40
          disabled:cursor-not-allowed
          transition
          cursor-pointer
        "
      >
        {isLoading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
};

export default Toolbar;
