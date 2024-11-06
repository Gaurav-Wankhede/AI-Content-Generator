import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PROPS {
  aiOutput: string;
}

/**
 * OutputSection component renders a markdown editor with the provided AI output.
 * 
 * @param {PROPS} props - The props for the component.
 * @param {string} props.aiOutput - The AI-generated output to be displayed in the editor.
 * @returns {JSX.Element} The rendered OutputSection component.
 */
function OutputSection({ aiOutput }: PROPS): JSX.Element {
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 md:p-5 gap-3 sm:gap-0">
        <h2 className="font-medium text-base sm:text-lg">Your Result</h2>
        <Button className="flex gap-2 w-full sm:w-auto text-sm sm:text-base">
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear"
        height="400px"
        className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  );
}

export default OutputSection;