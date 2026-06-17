import PointerListItem from "./PointerListItem";

interface PointerGroupProps {
  title: string;
  items: string[];
}

const PointerGroup = ({ title, items }: PointerGroupProps) => {
  return (
    <>
      <h3 className="text-3xl sm:text-4xl lg:text-[42px] text-white font-bold mb-2">
        {title}
      </h3>

      <ul className="flex flex-col gap-2.5 ">
        {items.map((item) => (
          <PointerListItem
            key={item}
            text={item}
          />
        ))}
      </ul>
    </>
  );
};

export default PointerGroup;