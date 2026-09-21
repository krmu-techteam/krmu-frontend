import { ReactNode } from "react";
interface BaseCardProps {
  children: ReactNode;
  className?: string;
}
const BaseCard = ({ children, className = "" }: BaseCardProps) => {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className}`}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default BaseCard;
