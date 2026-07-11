import { LibraryCardGrid } from "./LibraryCardGrid";

interface LibraryCard {
  content: string;
  imageUrl?: string;
}

interface LibraryTabContentProps {
  tagLine: string;
  heading: string;
  description: string;
  items: LibraryCard[];
}

export const LibraryTabContent = ({
  tagLine,
  heading,
  description,
  items,
}: LibraryTabContentProps) => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent font-poppins text-white">
      <p>{tagLine}</p>
      <h2>{heading}</h2>
      <p>{description}</p>
      <LibraryCardGrid items={items} />
    </div>
  );
};
