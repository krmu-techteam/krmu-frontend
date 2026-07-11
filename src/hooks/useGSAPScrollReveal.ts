import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger client-side only
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPScrollReveal = (containerRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Single Slide Up (.gsap-reveal-up)
      const revealUp = el.querySelectorAll(".gsap-reveal-up");
      revealUp.forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // 2. Single Slide Left (.gsap-reveal-left)
      const revealLeft = el.querySelectorAll(".gsap-reveal-left");
      revealLeft.forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // 3. Staggered Items Up (.gsap-stagger-up-container with children .gsap-stagger-item)
      const staggerUpContainers = el.querySelectorAll(".gsap-stagger-up-container");
      staggerUpContainers.forEach((container) => {
        const items = container.querySelectorAll(".gsap-stagger-item");
        if (items.length > 0) {
          gsap.fromTo(items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              stagger: 0.1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: container,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // 4. Staggered Items Left (.gsap-stagger-left-container with children .gsap-stagger-item)
      const staggerLeftContainers = el.querySelectorAll(".gsap-stagger-left-container");
      staggerLeftContainers.forEach((container) => {
        const items = container.querySelectorAll(".gsap-stagger-item");
        if (items.length > 0) {
          gsap.fromTo(items,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Refresh ScrollTrigger positions after paint
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};
