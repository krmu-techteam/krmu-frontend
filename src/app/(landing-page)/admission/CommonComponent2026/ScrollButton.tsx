"use client";

type ScrollButtonProps = {
  targetId: string;
  highlightClass: string;
  duration?: number;
  children: React.ReactNode;
  btnClass: string;
};

export default function ScrollButton({
  targetId,
  highlightClass,
  duration = 5000,
  children,
  btnClass,
}: ScrollButtonProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add(highlightClass);

    setTimeout(() => {
      el.classList.remove(highlightClass);
    }, duration);
  };

  return (
    <button onClick={handleClick} className={btnClass}>
      {children}
    </button>
  );
}
