import { BookRenewalProps } from "@/features/life-at-krmu/library";
import { BookRenewalCard } from "./BookRenewalCard";

interface BookRenewalListProps {
  items: BookRenewalProps[];
}

const BookRenewalList = ({ items }: BookRenewalListProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      {items?.map((item, idx) => {
        return <BookRenewalCard key={idx} idx={idx} {...item} />;
      })}
    </div>
  );
};
export default BookRenewalList;
