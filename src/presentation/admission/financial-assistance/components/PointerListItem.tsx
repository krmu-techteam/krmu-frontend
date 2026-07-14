import { Check } from "lucide-react";

interface PointerListItemProps {
  text: string;
}

const PointerListItem = ({ text }: PointerListItemProps) => {
  return (
    <li className="flex items-center gap-2.5">
      <span className="w-8 h-8 bg-white flex items-center justify-center rounded-full shrink-0">
        <Check color="#051630" strokeWidth={3} size={25} />
      </span>
      <span className="text-white font-poppins">{text}</span>
    </li>
  );
};

export default PointerListItem;