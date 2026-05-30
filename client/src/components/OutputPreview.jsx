import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownStyles = `
  .md-body{
    color:#d4d4d8;
    line-height:1.8;
    font-size:15px;
  }

  .md-body h1,
  .md-body h2{
    margin-top:1.8rem;
    margin-bottom:0.8rem;
    font-weight:700;
    color:#fafafa;
  }

  .md-body h1{
    font-size:2rem;
  }

  .md-body h2{
    font-size:1.35rem;
  }

  .md-body h3{
    margin-top:1.5rem;
    margin-bottom:0.6rem;
    color:#f4f4f5;
    font-size:1.1rem;
    font-weight:600;
  }

  .md-body p{
    margin:1rem 0;
  }

  .md-body ul,
  .md-body ol{
    padding-left:1.5rem;
    margin:1rem 0;
  }

  .md-body li{
    margin:.4rem 0;
  }

  .md-body code{
    background:#18181b;
    padding:.2rem .5rem;
    border-radius:6px;
    color:#86efac;
    font-size:.9em;
  }

  .md-body pre{
    background:#09090b;
    border:1px solid #27272a;
    border-radius:14px;
    padding:1.25rem;
    overflow:auto;
  }

  .md-body pre code{
    background:none;
    padding:0;
    color:#e4e4e7;
  }

  .md-body blockquote{
    border-left:3px solid #22c55e;
    padding-left:1rem;
    color:#a1a1aa;
    margin:1rem 0;
  }

  .md-body table{
    width:100%;
    border-collapse:collapse;
    margin:1rem 0;
  }

  .md-body th,
  .md-body td{
    border:1px solid #27272a;
    padding:.75rem;
  }

  .md-body th{
    background:#18181b;
    color:#fafafa;
  }
`;

const OutputPreview = ({ readme, loading, error }) => {
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center text-zinc-500">
        Generating README...
      </div>
    );
  }

  if (!readme && !error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-400 text-sm">Nothing generated yet</p>

          <p className="text-zinc-600 text-xs mt-2">
            Your README will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <style>{markdownStyles}</style>

      <article className="max-w-3xl mx-auto px-10 py-10">
        <div className="md-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default OutputPreview
