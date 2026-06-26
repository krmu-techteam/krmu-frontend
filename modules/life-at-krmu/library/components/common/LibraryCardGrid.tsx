import Image from "next/image";

interface LibraryCard {
  content: string;
  imageUrl?: string;
}

interface LibraryCardGridProps {
  items: LibraryCard[];
}

export const LibraryCardGrid = ({ items }: LibraryCardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10">
      {items.map((item, index) => (
        <div key={index} className="w-full relative libcountcard">
          <p>{item.content}</p>

          {item.imageUrl && (
            <Image
              src={item.imageUrl}
              alt={item.content}
              width={100}
              height={100}
              className="libcount"
            />
          )}
        </div>
      ))}
    </div>
  );
};
