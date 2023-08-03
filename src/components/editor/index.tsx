"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  // The command that we have added here ensures that when we click somewhere on the div element, we will set the focus to the last position in the editor. This is a very important step, because otherwise the editor would not be focused and we would not be able to type anything.
  // The .chain() is required to start a new chain and the .run() is needed to actually execute all the commands in between.
  // added a placeholder for a saveStatus, which will let us indicate to the user if the current content is already saved to the database.
  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className="relative flex min-h-screen w-full cursor-text flex-col items-center p-32"
    >
      <div className="absolute left-8 top-8 rounded-lg bg-gray-100 px-2 py-1 text-sm text-gray-400">
        Saved {/* {saveStatus} */}
      </div>
      <div className="relative w-full max-w-screen-lg">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
