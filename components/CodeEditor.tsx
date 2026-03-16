import React, { useState, useRef, useEffect } from 'react';

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

export function CodeEditor({ code, onChange }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [lines, setLines] = useState(1);

  useEffect(() => {
    setLines(code.split('\n').length);
  }, [code]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      onChange(newCode);
      
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };

  return (
    <div className="relative flex w-full h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm rounded-xl overflow-hidden border border-zinc-800 shadow-inner">
      <div className="flex flex-col items-end py-4 px-3 bg-[#252526] border-r border-zinc-800 text-zinc-500 select-none min-w-[3rem]">
        {Array.from({ length: Math.max(lines, 5) }).map((_, i) => (
          <div key={i + 1} className="leading-6">{i + 1}</div>
        ))}
      </div>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 w-full h-full p-4 bg-transparent resize-none outline-none leading-6 whitespace-pre font-mono"
        spellCheck={false}
      />
    </div>
  );
}
