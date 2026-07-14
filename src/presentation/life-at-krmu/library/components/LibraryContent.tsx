"use client";

import { LIBRARY_SECTIONS } from "@/features/life-at-krmu/library/library.library-sections";

import { LibraryContentProps } from "@/features/life-at-krmu/library";

type Props = {
  activeSection: number;
  libraryContent: LibraryContentProps;
};

const LibraryContent = ({ activeSection, libraryContent }: Props) => {
  const ActiveComponent = LIBRARY_SECTIONS[activeSection].Component;

  return (
    <div className="md:w-3/4 pt-10 md:pt-[15%] md:px-10 pb-10">
      <ActiveComponent libraryContent={libraryContent} />
    </div>
  );
};

export default LibraryContent;
