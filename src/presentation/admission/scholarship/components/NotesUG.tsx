import React from "react";
import {
  ugColumn1Notes,
  ugColumn2Notes,
  ugColumn3Notes,
  NoteItem,
} from "@/features/admission/scholarship";

const NotesUG = () => {
  const renderNote = (item: NoteItem) => (
    <div key={item.id} className="flex gap-5">
      <span className="rounded-full py-[3px] px-2 border border-white text-white w-[25px] h-[28px] flex items-center justify-center shrink-0">
        {item.id}
      </span>
      <span className="text-white text-base notesul">
        {item.text}
        {item.list && item.listType === "div" && (
          <div className="font-light flex flex-col gap-2 my-2.5 pl-5">
            {item.list.map((sub, idx) => (
              <span key={idx}>{sub}</span>
            ))}
          </div>
        )}
        {item.extra}
      </span>
    </div>
  );

  return (
    <section className="bg-[url(/scholarship/notes-bg.webp)] bg-cover bg-no-repeat py-[30px] mt-10">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <h3 className="text-5xl text-white font-semibold mb-8">Notes:</h3>
        <div className="flex flex-col lg:flex-row lg:gap-5">
          <div className="w-full lg:w-4/12 flex flex-col gap-5 justify-between">
            {ugColumn1Notes.map(renderNote)}
          </div>
          <div className="w-full lg:w-5/12 flex flex-col gap-5 justify-between">
            {ugColumn2Notes.map(renderNote)}
          </div>
          <div className="w-full lg:w-3/12 flex flex-col gap-5">
            {ugColumn3Notes.map(renderNote)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesUG;
