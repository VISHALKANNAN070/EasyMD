const PLACEHOLDER = `Describe your project here…

EasyMD converts plain project descriptions into clean README.md files.

Users can:
• Generate README files
• Preview output
• Copy markdown
• Download README.md`;

const InputText = ({ inputText, setInputText }) => {
  return (
    <textarea
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder={PLACEHOLDER}
      spellCheck={false}
      className="
        flex-1
        w-full
        resize-none
        bg-transparent
        outline-none
        px-7
        py-7
        text-[15px]
        leading-8
        text-zinc-200
        placeholder:text-zinc-600
      "
    />
  );
};

export default InputText;
