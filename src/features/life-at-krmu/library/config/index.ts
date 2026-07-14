import { RendererConfig } from "@/lib/types/common";
import { LibrarySection } from "@/presentation/life-at-krmu/library/sections";

export const Sections: RendererConfig[] = [
  {
    key: "library",
    Component: LibrarySection,
    dataKey: "libraryContent",
    propName: "libraryContent",
  },
];
