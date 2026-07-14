import React from "react";
import {
  pgColumn1Notes,
  pgColumn2Notes,
  NoteItem,
} from "@/features/admission/scholarship";

const NotesPG = () => {
  const renderNote = (item: NoteItem) => (
    <div key={item.id} className="flex gap-5">
      <span className="rounded-full py-[3px] px-2 border border-white text-white w-[25px] h-[28px] flex items-center justify-center shrink-0">
        {item.id}
      </span>
      <span className="text-white font-semibold text-base notesul">
        {item.text}
        {item.list && item.listType === "ul" && (
          <ul className="font-normal">
            {item.list.map((sub, idx) => (
              <li key={idx}>{sub}</li>
            ))}
          </ul>
        )}
        {item.extra}
      </span>
    </div>
  );

  return (
    <section className="bg-[url(/scholarship/notes-bg.webp)] bg-cover bg-no-repeat py-[30px] mt-10">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
        <h3 className="text-5xl text-white font-semibold mb-10">Notes:</h3>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2 flex flex-col gap-5">
            {pgColumn1Notes.map(renderNote)}
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5">
            {pgColumn2Notes.map(renderNote)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesPG;
