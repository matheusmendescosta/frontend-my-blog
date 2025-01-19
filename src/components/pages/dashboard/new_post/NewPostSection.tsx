"use client";

import { Button } from "@/components/ui/button";
import {
  Editor,
  getDefaultKeyBindingFn,
  initialStyleMap,
  isBold,
  isItalic,
  isLineThrough,
  isOverline,
  isUnderline,
  shortcutHandler,
  toggleBold,
  toggleItalic,
  toggleLineThrough,
  toggleOverline,
  toggleUnderline,
} from "contenido";
import { EditorState } from "draft-js";
import { useState } from "react";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const toolbarButtons = [
    { name: "Bold", handler: toggleBold, detector: isBold },
    { name: "Italic", handler: toggleItalic, detector: isItalic },
    { name: "Underline", handler: toggleUnderline, detector: isUnderline },
    { name: "Overline", handler: toggleOverline, detector: isOverline },
    {
      name: "LineThrough",
      handler: toggleLineThrough,
      detector: isLineThrough,
    },
  ];

  return (
    <div className="border mt-4 p-4 rounded-sm">
      <div className="space-x-2 mb-2">
        {toolbarButtons.map((btn) => (
          <button
            key={btn.name}
            onMouseDown={(e) => {
              e.preventDefault();
              btn.handler(editorState, setEditorState);
            }}
            style={{
              color: btn.detector(editorState) ? "gray" : "white",
            }}
            className="border rounded-sm px-2 hover:bg-gray-400"
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div className="border rounded-sm p-4 h-auto">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={shortcutHandler(setEditorState)}
          keyBindingFn={getDefaultKeyBindingFn}
          customStyleMap={initialStyleMap}
        />
      </div>
      <div className="flex justify-end mt-2 space-x-2">
        <Button variant="outline">Draft</Button>
        <Button variant="secondary">Publish</Button>
      </div>
    </div>
  );
};

export default MyEditor;
