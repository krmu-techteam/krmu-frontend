"use client";

import { useEffect, useState } from "react";
import { Underline } from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  placeholder?: string;
  error?: string;
  field: ControllerRenderProps<T, Path<T>>;
}

type ViewMode = "visual" | "html" | "preview";

export function TextEditorField<T extends FieldValues>({
  label,
  placeholder,
  error,
  field,
}: Props<T>) {
  const [viewMode, setViewMode] = useState<ViewMode>("visual");
  const [html, setHtml] = useState<string>(
    field.value || ""
  );

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Underline,
    ],

    content: field.value || "",

    immediatelyRender: false,

    onUpdate: ({ editor }) => {
      const newHtml = editor.getHTML();

      setHtml(newHtml);
      field.onChange(newHtml);
    },

    editorProps: {
      attributes: {
        class:
          "min-h-[300px] w-full px-4 py-3 outline-none",
      },
    },
  });

  /*
   * When HTML is changed directly,
   * update Tiptap editor as well.
   */
  const handleHtmlChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newHtml = e.target.value;

    setHtml(newHtml);
    field.onChange(newHtml);
  };

  /*
   * When switching from HTML → Visual,
   * load the manually written HTML into Tiptap.
   */
  const handleVisualMode = () => {
    if (editor) {
      editor.commands.setContent(html);
    }

    setViewMode("visual");
  };

  /*
   * When switching from Visual → HTML,
   * get latest HTML from Tiptap.
   */
  const handleHtmlMode = () => {
    if (editor) {
      const newHtml = editor.getHTML();

      setHtml(newHtml);
      field.onChange(newHtml);
    }

    setViewMode("html");
  };

  /*
   * Preview should always use the latest HTML.
   */
  const handlePreviewMode = () => {
    if (editor && viewMode === "visual") {
      const newHtml = editor.getHTML();

      setHtml(newHtml);
      field.onChange(newHtml);
    }

    setViewMode("preview");
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="space-y-2">
      {/* Label */}
      <label className="text-sm font-medium">
        {label}
      </label>

      <div className="overflow-hidden rounded-lg border border-black/20">

        {/* =====================================
            TOP TABS
        ===================================== */}

        <div className="flex border-b bg-gray-50">

          {/* Visual */}
          <button
            type="button"
            onClick={handleVisualMode}
            className={`px-4 py-2 text-sm ${
              viewMode === "visual"
                ? "border-b-2 border-black bg-white font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Visual
          </button>

          {/* HTML */}
          <button
            type="button"
            onClick={handleHtmlMode}
            className={`px-4 py-2 text-sm ${
              viewMode === "html"
                ? "border-b-2 border-black bg-white font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Text
          </button>

          {/* Preview */}
          <button
            type="button"
            onClick={handlePreviewMode}
            className={`px-4 py-2 text-sm ${
              viewMode === "preview"
                ? "border-b-2 border-black bg-white font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Preview
          </button>
        </div>

        {/* =====================================
            VISUAL EDITOR
        ===================================== */}

        {viewMode === "visual" && (
          <>
            {/* Toolbar */}
            <div className="flex flex-wrap gap-1 border-b bg-gray-50 p-2">

              {/* Paragraph */}
              <button
                type="button"
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .setParagraph()
                    .run()
                }
                className="rounded px-3 py-1.5 text-sm hover:bg-gray-200"
              >
                P
              </button>

              {/* H1 - H6 */}
              {[1, 2, 3, 4, 5, 6].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({
                        level: level as
                          | 1
                          | 2
                          | 3
                          | 4
                          | 5
                          | 6,
                      })
                      .run()
                  }
                  className={`rounded px-3 py-1.5 text-sm ${
                    editor.isActive("heading", {
                      level,
                    })
                      ? "bg-black text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  H{level}
                </button>
              ))}

              {/* Bold */}
              <button
                type="button"
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .toggleBold()
                    .run()
                }
                className={`rounded px-3 py-1.5 text-sm ${
                  editor.isActive("bold")
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                <strong>B</strong>
              </button>

              {/* Italic */}
              <button
                type="button"
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run()
                }
                className={`rounded px-3 py-1.5 text-sm ${
                  editor.isActive("italic")
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                <em>I</em>
              </button>

              {/* Underline */}
              <button
                type="button"
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .toggleUnderline()
                    .run()
                }
                className={`rounded px-3 py-1.5 text-sm ${
                  editor.isActive("underline")
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                <u>U</u>
              </button>

              {/* Bullet */}
              <button
                type="button"
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .toggleBulletList()
                    .run()
                }
                className="rounded px-3 py-1.5 text-sm hover:bg-gray-200"
              >
                • List
              </button>

              {/* Ordered */}
              <button
                type="button"
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .toggleOrderedList()
                    .run()
                }
                className="rounded px-3 py-1.5 text-sm hover:bg-gray-200"
              >
                1. List
              </button>

              {/* Undo */}
              <button
                type="button"
                onClick={() =>
                  editor.chain().focus().undo().run()
                }
                disabled={!editor.can().undo()}
                className="rounded px-3 py-1.5 text-sm hover:bg-gray-200 disabled:opacity-40"
              >
                Undo
              </button>

              {/* Redo */}
              <button
                type="button"
                onClick={() =>
                  editor.chain().focus().redo().run()
                }
                disabled={!editor.can().redo()}
                className="rounded px-3 py-1.5 text-sm hover:bg-gray-200 disabled:opacity-40"
              >
                Redo
              </button>
            </div>

            {/* Editor */}
            <div className="relative">
              {!editor.getText() && placeholder && (
                <div className="pointer-events-none absolute left-4 top-3 text-sm text-gray-400">
                  {placeholder}
                </div>
              )}

              <EditorContent editor={editor} />
            </div>
          </>
        )}

        {/* =====================================
            DIRECT HTML / TEXT MODE
        ===================================== */}

        {viewMode === "html" && (
          <textarea
            value={html}
            onChange={handleHtmlChange}
            placeholder={`Write HTML here...

Example:

<h1>Heading</h1>

<p>
  This is a paragraph.
</p>

<h2>Sub Heading</h2>

<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>`}
            className="min-h-[350px] w-full resize-y bg-gray-950 p-4 font-mono text-sm leading-6 text-white outline-none"
            spellCheck={false}
          />
        )}

        {/* =====================================
            PREVIEW
        ===================================== */}

        {viewMode === "preview" && (
          <div className="min-h-[350px] p-6">

            {html ? (
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              />
            ) : (
              <p className="text-sm text-gray-400">
                Nothing to preview.
              </p>
            )}

          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}