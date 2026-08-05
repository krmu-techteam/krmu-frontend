// "use client";

// import { Editor } from "@tinymce/tinymce-react";
// import { ControllerRenderProps } from "react-hook-form";

// interface Props {
//   field: ControllerRenderProps<any>;
// }

// export default function TinyMCEField({ field }: Props) {
//   return (
//     <Editor
//       apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
//       value={field.value}
//       onEditorChange={(content) => field.onChange(content)}
//       init={{
//         height: 400,
//         menubar: true,
//         plugins: [
//           "lists",
//           "link",
//           "image",
//           "table",
//           "code",
//           "fullscreen",
//         ],
//         toolbar:
//           "undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image table | code fullscreen",
//       }}
//     />
//   );
// }