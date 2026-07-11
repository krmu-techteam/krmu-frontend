"use client";
import { useState } from "react";
import { LibraryContent, LibrarySidebar } from "../components";

import { LibraryContentProps } from "../types/index";

const LibrarySection = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  const [activeSection, setActiveSection] = useState(0);
  const [open, setOpen] = useState(true);

  return (
    <section className="px-4">
      <div className="max-w-[1664px] mx-auto flex flex-col md:flex-row">
        <LibrarySidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          open={open}
          setOpen={setOpen}
        />

        <LibraryContent
          activeSection={activeSection}
          libraryContent={libraryContent}
        />
      </div>
    </section>
  );
};

export default LibrarySection;
