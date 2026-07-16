import { RendererConfig } from "@/lib/types/common";
import { Leaderships } from "@/presentation/about/leadership";

export const LeadershipConfig: RendererConfig[] = [
  {
    key: "leadership",
    Component: Leaderships,
    dataKey: "leadership",
    propName: "data",
  },
];
