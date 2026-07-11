"use client";
import { useEffect } from "react";

export default function FacultyTabsScript() {
  useEffect(() => {
    const container = document.querySelector(".faculty_main_content_container");
    if (!container) return;

    const tabLinks = container.querySelectorAll<HTMLAnchorElement>(".tab-link");
    const tabPanes = container.querySelectorAll<HTMLElement>(".tab-pane");

    tabLinks.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active from all tabs
        tabLinks.forEach((t) => {
          t.parentElement?.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });

        // Hide all panes
        tabPanes.forEach((pane) => {
          pane.classList.remove("active", "in");
        });

        // Activate clicked tab
        tab.parentElement?.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        // Activate target pane
        const targetId = tab.getAttribute("href");
        if (!targetId) return;

        const targetPane = container.querySelector<HTMLElement>(targetId);
        if (targetPane) {
          targetPane.classList.add("active", "in");
        }
      });
    });
  }, []);

  return null;
}
