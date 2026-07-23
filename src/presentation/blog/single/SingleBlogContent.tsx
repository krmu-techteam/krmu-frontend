"use client";
import React, { useEffect, useState } from "react";

type Props = {
  content: string;
};

const SingleBlogContent = ({ content }: Props) => {
  const [processedContent, setProcessedContent] = useState<string>("");
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    if (!content) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    const h2Elements = Array.from(doc.querySelectorAll("h2"));

    // belwo cta shot apply now

    if (h2Elements.length >= 3) {
      const ctaHTML1 = `
<div class="krmu-blog-cta">

<div class="krmu-blog-cta-inner">

<img src="/blogs/blog-author.webp" class="krmu-blog-cta-logo"/>

<div class="krmu-blog-cta-text">

<h3 class="krmu-blog-cta-title">
Wanna Take Your Career to New Heights?
</h3>

<p class="krmu-blog-cta-desc">
K.R. Mangalam University offers industry-aligned programmes, practical learning, expert faculty, and strong placement support for sure-shot success!
</p>

</div>

<div class="krmu-blog-cta-actions">

<a href="https://admissions.krmangalam.edu.in/?utm_source=website&utm_medium=Homepage&utm_campaign=header&_gl=1*1iwmm9u*_gcl_au*MTczMTQ5NTcxOC4xNzczODk2NjIz*_ga*ODAwNDY0ODEyLjE3NzM4OTQ2NzY.*_ga_VJJK572TGN*czE3NzQyNjcyNTYkbzE2JGcwJHQxNzc0MjY3MjU2JGo2MCRsMCRoMA.." class="krmu-blog-cta-btn">
Apply Now
</a>

<a href="https://www.krmangalam.edu.in/programmes" class="krmu-blog-cta-link">
Explore Programs
</a>

</div>

</div>

</div>
`;

      const secondHeading = h2Elements[2];
      const wrapper1 = doc.createElement("div");
      wrapper1.innerHTML = ctaHTML1;

      secondHeading.parentNode?.insertBefore(wrapper1, secondHeading);
    }

    const newHeadings = h2Elements.map((el, index) => {
      const id = `heading-${index + 1}`;
      el.setAttribute("id", id);
      el.classList.add("toc-target");

      // Apply inline styles for heading design

      el.style.color = "#ffffff";
      el.style.fontWeight = "600";
      el.style.fontSize = "22px";
      el.style.padding = "10px 0px";
      el.style.borderRadius = "4px";
      el.style.display = "block";

      return {
        id,
        text: el.textContent?.trim() || `Heading ${index + 1}`,
      };
    });

    setHeadings(newHeadings);

    const tocHTML = `
<div class="single-blog-toc">
<h3 class="single-blog-toc-title">
Table of Contents
</h3>

<div class="single-blog-toc-list">
${newHeadings
  .map(
    (h, i) => `
<a href="#${h.id}" class="single-blog-toc-item">
<span class="single-blog-toc-number">${i + 1}.</span>
<span class="single-blog-toc-text">${h.text}</span>
</a>
`,
  )
  .join("")}
</div>
</div>
`;

    if (h2Elements.length > 0) {
      const firstHeading = h2Elements[0];

      const wrapper = doc.createElement("div");
      wrapper.innerHTML = tocHTML;

      firstHeading.parentNode?.insertBefore(wrapper, firstHeading);
    }

    const images = Array.from(doc.querySelectorAll("img"));
    images.forEach((img) => {
      const origSrc = img.getAttribute("data-orig-src");
      const dataSrcSet = img.getAttribute("data-srcset");
      const origSizes = img.getAttribute("data-orig-sizes");

      if (origSrc) img.setAttribute("src", origSrc);

      if (dataSrcSet) img.setAttribute("srcset", dataSrcSet);

      if (origSizes) img.setAttribute("sizes", origSizes);

      img.removeAttribute("data-orig-src");
      img.removeAttribute("data-srcset");
      img.removeAttribute("data-sizes");
      img.removeAttribute("data-orig-sizes");

      const className = img.getAttribute("class");
      if (className) {
        img.setAttribute(
          "class",
          className
            .replace(/lazyload/g, "")
            .replace(/\s+/g, " ")
            .trim(),
        );
      }

      const currentSrc = img.getAttribute("src");
      if (currentSrc && currentSrc.startsWith("data:image")) {
        img.removeAttribute("src");
      }
      const srcset = img.getAttribute("srcset");
      if (srcset && srcset.startsWith("data:image")) {
        img.removeAttribute("srcset");
      }
    });

    const tables = Array.from(doc.querySelectorAll("table"));
    tables.forEach((table) => {
      table.className = "krmu-custom-blog-table";

      const cells = Array.from(table.querySelectorAll("th, td"));
      cells.forEach((cell) => {
        cell.removeAttribute("align");

        const style = cell.getAttribute("style") || "";
        if (style) {
          cell.setAttribute(
            "style",
            style
              .split(";")
              .filter((s) => !/text-align|justify-content/i.test(s))
              .join(";"),
          );
        }

        const cellChildren = Array.from(cell.querySelectorAll("*"));
        cellChildren.forEach((child) => {
          child.removeAttribute("align");
          const childStyle = child.getAttribute("style") || "";
          if (childStyle) {
            child.setAttribute(
              "style",
              childStyle
                .split(";")
                .filter((s) => !/text-align|justify-content/i.test(s))
                .join(";"),
            );
          }
        });
      });

      const wrapper = doc.createElement("div");
      wrapper.className = "blog-table-responsive";
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    // Wrap Conclusion block in container card
    const headingsForConclusion = Array.from(doc.querySelectorAll("h2, h3"));
    const conclusionHeading = headingsForConclusion.find(
      (el) => el.textContent?.trim().toLowerCase() === "conclusion",
    );
    if (conclusionHeading) {
      const conclusionWrapper = doc.createElement("div");
      conclusionWrapper.className = "krmu-blog-conclusion-card";

      conclusionHeading.parentNode?.insertBefore(
        conclusionWrapper,
        conclusionHeading,
      );

      const siblingsToWrap: Element[] = [];
      let current: Element | null = conclusionHeading;
      while (current) {
        const text = current.textContent?.trim().toLowerCase() || "";
        const isFAQHeading =
          (current.tagName === "H2" || current.tagName === "H3") &&
          (text.includes("faq") || text.includes("f.a.q"));
        const isFAQContainer =
          current.classList.contains("krmu-blog-faq-container") ||
          current.classList.contains("schema-faq-code") ||
          current.className.includes("faq");

        if (siblingsToWrap.length > 0 && (isFAQHeading || isFAQContainer)) {
          break;
        }

        const next: Element | null = current.nextElementSibling;
        siblingsToWrap.push(current);
        current = next;
      }

      siblingsToWrap.forEach((sibling) => {
        conclusionWrapper.appendChild(sibling);
      });
    }

    // Parse and normalize FAQ sections into dynamic accordions
    const faqWrappers = Array.from(doc.querySelectorAll(".faq-wrapper"));
    faqWrappers.forEach((faqWrapper) => {
      const heading = faqWrapper.querySelector(".faq-heading, h2, h3");
      const faqContainer = doc.createElement("div");
      faqContainer.className = "krmu-blog-faq-container";

      const cards = Array.from(faqWrapper.querySelectorAll(".faq-card"));
      const groupName = `faq-group-${Math.random().toString(36).substring(2, 9)}`;
      
      cards.forEach((card, index) => {
        const questionEl = card.querySelector(".faq-question, h3, h4");
        const answerEl = card.querySelector(".faq-answer, p, div");

        if (questionEl && answerEl) {
          const details = doc.createElement("details");
          details.className = "krmu-blog-faq-item";
          details.setAttribute("name", groupName);
          
          if (index === 0) {
            details.setAttribute("open", "");
          }

          const summary = doc.createElement("summary");
          summary.className = "krmu-blog-faq-summary";
          summary.textContent = questionEl.textContent?.trim() || "";

          const answerDiv = doc.createElement("div");
          answerDiv.className = "krmu-blog-faq-answer";
          answerDiv.innerHTML =
            answerEl.innerHTML || answerEl.textContent || "";

          details.appendChild(summary);
          details.appendChild(answerDiv);
          faqContainer.appendChild(details);
        }
      });

      if (heading) {
        const newHeading = doc.createElement("h2");
        newHeading.textContent = heading.textContent;
        newHeading.style.color = "#ffffff";
        newHeading.style.fontWeight = "600";
        newHeading.style.fontSize = "22px";
        newHeading.style.padding = "10px 0px";
        newHeading.style.display = "block";
        faqWrapper.parentNode?.insertBefore(newHeading, faqWrapper);
      }
      faqWrapper.parentNode?.replaceChild(faqContainer, faqWrapper);
    });

    const yoastFaqs = Array.from(doc.querySelectorAll(".schema-faq"));
    yoastFaqs.forEach((yoastFaq) => {
      const faqContainer = doc.createElement("div");
      faqContainer.className = "krmu-blog-faq-container";

      const items = Array.from(
        yoastFaq.querySelectorAll(".schema-faq-section"),
      );
      const groupName = `faq-group-${Math.random().toString(36).substring(2, 9)}`;
      
      items.forEach((item, index) => {
        const questionEl = item.querySelector(".schema-faq-question");
        const answerEl = item.querySelector(".schema-faq-answer");

        if (questionEl && answerEl) {
          const details = doc.createElement("details");
          details.className = "krmu-blog-faq-item";
          details.setAttribute("name", groupName);
          
          if (index === 0) {
            details.setAttribute("open", "");
          }

          const summary = doc.createElement("summary");
          summary.className = "krmu-blog-faq-summary";
          summary.textContent = questionEl.textContent?.trim() || "";

          const answerDiv = doc.createElement("div");
          answerDiv.className = "krmu-blog-faq-answer";
          answerDiv.innerHTML =
            answerEl.innerHTML || answerEl.textContent || "";

          details.appendChild(summary);
          details.appendChild(answerDiv);
          faqContainer.appendChild(details);
        }
      });

      yoastFaq.parentNode?.replaceChild(faqContainer, yoastFaq);
    });

    // --- Insert Horizontal Divider Above FAQ ---
    const finalFaqContainers = Array.from(doc.querySelectorAll(".krmu-blog-faq-container"));
    if (finalFaqContainers.length > 0) {
      const firstFaqContainer = finalFaqContainers[0];
      
      // Determine if there is a heading right before the FAQ
      let targetNode: Element = firstFaqContainer;
      let prevNode = firstFaqContainer.previousElementSibling;
      
      while (prevNode) {
        const text = prevNode.textContent?.trim().toLowerCase() || "";
        const isHeading = prevNode.tagName === "H2" || prevNode.tagName === "H3";
        const isFaqHeading = text.includes("faq") || text.includes("f.a.q") || text.includes("frequently asked");
        
        if (isHeading && isFaqHeading) {
          targetNode = prevNode;
          break;
        }
        
        if (text === "") {
          prevNode = prevNode.previousElementSibling;
        } else {
          break;
        }
      }
      
      const divider = doc.createElement("div");
      divider.className = "w-full h-[1px] mt-8 mb-8 sm:mb-10";
      divider.style.background = "linear-gradient(90deg, rgb(26, 26, 26) 0%, rgb(255, 255, 255) 48.08%, rgb(26, 26, 26) 100%)";
      targetNode.parentNode?.insertBefore(divider, targetNode);
    }

    setProcessedContent(doc.body.innerHTML);
  }, [content]);

  return (
    <div className="w-full">
      {processedContent ? (
        <div
          className="krmu_single_blog"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      ) : (
        <div
          className="krmu_single_blog"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};
export default SingleBlogContent;
