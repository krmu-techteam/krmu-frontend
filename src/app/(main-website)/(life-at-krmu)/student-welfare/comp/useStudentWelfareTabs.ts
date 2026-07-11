"use client";
import { useEffect, useRef } from "react";

export default function useStudentWelfareTabs() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Query only inside the scroll container area
    const sidebarItems = Array.from(
      document.querySelectorAll(".student_welfare-sidebar__item")
    ) as HTMLElement[];

    const sections = Array.from(
      container.querySelectorAll(".student_welfare-tab-content__container")
    ) as HTMLElement[];

    // --- CLICK HANDLER ---
    sidebarItems.forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.target;
        if (!id) return;

        const targetEl = container.querySelector(id) as HTMLElement;
        if (!targetEl) return;

        // Remove active classes
        sidebarItems.forEach((el) => el.classList.remove("active"));
        sections.forEach((sec) => sec.classList.remove("active"));

        // Add active
        item.classList.add("active");
        targetEl.classList.add("active");

        // Scroll inside container
        container.scrollTo({
          top: targetEl.offsetTop,
          behavior: "smooth",
        });
      });
    });

    // --- SCROLL SPY ---
    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const viewHeight = container.offsetHeight;
      const threshold = viewHeight * 0.2;

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;

        if (scrollTop >= top - threshold && scrollTop < bottom) {
          const id = sec.id;

          sidebarItems.forEach((el) => el.classList.remove("active"));
          sections.forEach((s) => s.classList.remove("active"));

          const sidebarItem = document.querySelector(
            `.student_welfare-sidebar__item[data-target="#${id}"]`
          );

          sidebarItem?.classList.add("active");
          sec.classList.add("active");
        }
      });
    };

    container.addEventListener("scroll", onScroll);

    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return { containerRef };
}
