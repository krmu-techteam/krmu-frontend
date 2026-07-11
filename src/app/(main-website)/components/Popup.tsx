"use client"; // Important for interactivity
import { CircleX, MoveRight } from "lucide-react";
import { useState } from "react";

type PopupProps = {
  buttonText?: React.ReactNode;
  buttonClass?: string;
  buttonIcon?: React.ReactNode;
  formBodyTextColor?: string;
  children: React.ReactNode;
};

export default function Popup({
  buttonText = "Open Popup",
  buttonClass = "hero-common-btn-b mt-12 null",
  buttonIcon = <MoveRight />,
  formBodyTextColor = "",
  children,
}: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={buttonClass}>
        {buttonText} {buttonIcon}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 text-black">
          <div
            className={`bg-[#ddd] p-5 max-w-[500px] w-full z-10 shadow-lg relative rounded-[10px]`}
          >
            <div
              className={`flex mb-2.5 text-[${formBodyTextColor || "#000"}]`}
            >
              <div className="w-4/5">
                <h4 className="text-xl text-center font-bold">Apply Now</h4>
              </div>
              <div className="w-1/5 text-right">
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer"
                >
                  <CircleX />
                </button>
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
