'use client';

import { Button } from '@/components/ui/button';
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
} from 'contenido';
import { EditorState } from 'draft-js';
import { useState } from 'react';

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const toolbarButtons = [
    { name: 'Bold', handler: toggleBold, detector: isBold },
    { name: 'Italic', handler: toggleItalic, detector: isItalic },
    { name: 'Underline', handler: toggleUnderline, detector: isUnderline },
    { name: 'Overline', handler: toggleOverline, detector: isOverline },
    {
      name: 'LineThrough',
      handler: toggleLineThrough,
      detector: isLineThrough,
    },
  ];

  return (
    <div className="mt-4 rounded-sm border p-4">
      <div className="mb-2 space-x-2">
        {toolbarButtons.map((btn) => (
          <button
            key={btn.name}
            onMouseDown={(e) => {
              e.preventDefault();
              btn.handler(editorState, setEditorState);
            }}
            style={{
              color: btn.detector(editorState) ? 'gray' : 'white',
            }}
            className="rounded-sm border px-2 hover:bg-gray-400"
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div className="h-auto rounded-sm border p-4">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={shortcutHandler(setEditorState)}
          keyBindingFn={getDefaultKeyBindingFn}
          customStyleMap={initialStyleMap}
        />
      </div>
      <div className="mt-2 flex justify-end space-x-2">
        <Button variant="outline">Draft</Button>
        <Button variant="secondary">Publish</Button>
      </div>
    </div>
  );
};

export default MyEditor;
