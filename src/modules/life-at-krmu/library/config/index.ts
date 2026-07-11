import { RendererConfig } from "@/lib/types/common";
import { LibrarySection } from "../sections";

export const Sections: RendererConfig[] = [
  {
    key: "library",
    Component: LibrarySection,
    dataKey: "libraryContent",
    propName: "libraryContent",
  },
];
