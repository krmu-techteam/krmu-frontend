"use client";
import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

type Props = {
  content: string;
  title?: string;
  date?: string;
  excerpt?: string;
};

const parseBlogContent = (
  content: string,
  setHeadings?: (headings: { id: string; text: string }[]) => void,
): string => {
  if (!content || typeof window === "undefined") return content;

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    const h2Elements = Array.from(doc.querySelectorAll("h2"));

    // Inject single custom CTA banner
    if (h2Elements.length >= 1) {
      const ctaHTML1 = `
<div class="krmu-blog-cta">
<style>
.krmu-blog-cta{
margin:35px 0;
border-radius:12px;
padding:24px;
background:linear-gradient(90deg, #E7C268 0%, #816C3A 100%);
color:#061623;
}
.krmu-blog-cta-inner{
display:flex;
align-items:center;
gap:18px;
}
.krmu-blog-cta-logo{
width:80px;
height:80px;
object-fit:contain;
}
.krmu-blog-cta-text{
flex:1;
}
.krmu-blog-cta-title{
font-size:22px;
font-weight:700;
margin-bottom:6px;
background-color:#E4BF67 !important;
color:#061623 !important;
width:fit-content !important;
box-shadow:2px 2px 5px rgba(0,0,0,0.2);
padding:0 10px !important;
border-radius:8px !important;
}
.krmu-blog-cta-desc{
font-size:15px;
opacity:.95;
color:#000000 !important;
font-weight:500;
padding:0 10px !important;
}
.krmu-blog-cta-actions{
display:flex;
flex-direction:column;
gap:10px;
}
.krmu-blog-cta a,
.krmu-blog-cta-btn,
.krmu-blog-cta-link{
text-decoration:none !important;
font-size:14px;
text-align:center;
transition:opacity 0.2s ease !important;
}
.krmu-blog-cta a:hover,
.krmu-blog-cta-btn:hover{
background:#061623 !important;
color:white !important;
opacity:0.85 !important;
text-decoration:none !important;
}
.krmu-blog-cta-link:hover{
background:transparent !important;
background-color:transparent !important;
color:#000000 !important;
opacity:0.85 !important;
text-decoration:none !important;
box-shadow:none !important;
}
.krmu-blog-cta-btn{
background:#061623 !important;
color:white !important;
padding:10px 24px;
border-radius:999px;
font-weight:600;
display:inline-block;
}
.krmu-blog-cta a.krmu-blog-cta-link,
.krmu-blog-cta-link{
color:#000000 !important;
font-weight:600;
display:inline-block;
text-decoration:none !important;
}
@media (max-width:640px){
.krmu-blog-cta-inner{
flex-direction:column;
align-items:flex-start;
}
.krmu-blog-cta-actions{
flex-direction:row;
align-items:center;
gap:16px;
}
}
</style>
<div class="krmu-blog-cta-inner">
<img src="/blogs/blog-author.webp" class="krmu-blog-cta-logo"/>
<div class="krmu-blog-cta-text">
<h3 class="krmu-blog-cta-title">Wanna Take Your Career to New Heights?</h3>
<p class="krmu-blog-cta-desc">K.R. Mangalam University offers industry-aligned programmes, practical learning, expert faculty, and strong placement support for sure-shot success!</p>
</div>
<div class="krmu-blog-cta-actions">
<a href="https://admissions.krmangalam.edu.in/" class="krmu-blog-cta-btn">Apply Now</a>
<a href="https://www.krmangalam.edu.in/programmes" class="krmu-blog-cta-link" style="color:#000000 !important; text-decoration:none !important;">Explore Programs</a>
</div>
</div>
</div>
`;
      if (h2Elements.length >= 2) {
        const targetHeading = h2Elements[1];
        const wrapper1 = doc.createElement("div");
        wrapper1.innerHTML = ctaHTML1;
        targetHeading.parentNode?.insertBefore(wrapper1, targetHeading);
      } else if (h2Elements.length === 1) {
        const targetHeading = h2Elements[0];
        const wrapper1 = doc.createElement("div");
        wrapper1.innerHTML = ctaHTML1;
        targetHeading.parentNode?.appendChild(wrapper1);
      }
    }

    const newHeadings = h2Elements.map((el, index) => {
      const id = `heading-${index + 1}`;
      el.setAttribute("id", id);
      el.classList.add("toc-target");

      el.style.color = "#ffffff";
      el.style.fontWeight = "600";
      el.style.fontSize = "22px";
      el.style.margin = "40px 0 20px 0";
      el.style.display = "block";

      return {
        id,
        text: el.textContent?.trim() || `Heading ${index + 1}`,
      };
    });

    if (setHeadings) {
      setHeadings(newHeadings);
    }

    // Dark Theme Table of Contents Matching User Design
    const tocHTML = `
<h2 class="text-[22px] font-semibold text-white mb-4 border-b-0 pb-0 !mt-0">Table of Contents</h2>
<ul class="flex flex-col gap-2.5 !list-none !p-0 !m-0">
${newHeadings
  .map(
    (h, i) => `
<li class="!list-none !p-0 !m-0 before:!content-none">
  <a href="#${h.id}" class="text-slate-300 hover:text-[#009bf2] text-sm sm:text-[15px] font-normal no-underline transition-all duration-300 ease-in-out inline-block leading-relaxed hover:translate-x-1.5">
    <span class="text-slate-400 font-normal mr-2">${i + 1}.</span>${h.text}
  </a>
</li>
`,
  )
  .join("")}
</ul>
`;

    if (h2Elements.length > 0) {
      const firstHeading = h2Elements[0];
      const wrapper = doc.createElement("div");
      wrapper.className =
        "blog-toc-card bg-[#14212c] border border-[#1d3448] rounded-[8px] p-5 font-poppins max-w-[650px] w-full shadow-none my-6";
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
      table.removeAttribute("style");
      table
        .querySelectorAll("th, td, tr, thead, tbody, p, span, strong, b")
        .forEach((child) => {
          child.removeAttribute("style");
        });

      const wrapper = doc.createElement("div");
      wrapper.className = "blog-table-responsive";
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    // Wrap Conclusion section in styled card
    const conclusionH2 = Array.from(
      doc.querySelectorAll("h1, h2, h3, h4, h5, h6, p, div, span, strong, b"),
    ).find((el) => {
      if (
        ["STRONG", "B", "SPAN"].includes(el.tagName) &&
        /^H[1-6]$/.test(el.parentElement?.tagName || "")
      ) {
        return false;
      }

      const text = (el.textContent || "")
        .replace(/\u00a0/g, " ")
        .toLowerCase()
        .trim();

      if (!text) return false;

      return (
        text.includes("conclusion") ||
        text.includes("final thought") ||
        text.includes("wrapping up")
      );
    });

    // Find FAQ heading
    const faqH2 = Array.from(
      doc.querySelectorAll("h1, h2, h3, h4, h5, h6, p, div, span, strong, b"),
    ).find((el) => {
      if (
        ["STRONG", "B", "SPAN"].includes(el.tagName) &&
        /^H[1-6]$/.test(el.parentElement?.tagName || "")
      ) {
        return false;
      }

      const text = (el.textContent || "")
        .replace(/\u00a0/g, " ")
        .toLowerCase()
        .trim();

      if (!text) return false;

      return (
        text === "faqs" ||
        text === "faq" ||
        text.includes("faq") ||
        text.includes("frequently asked") ||
        text.includes("common question")
      );
    });

    if (conclusionH2) {
      let targetNode: Element = conclusionH2;
      while (
        targetNode.parentElement &&
        targetNode.parentElement !== doc.body &&
        !["DIV", "MAIN", "ARTICLE", "SECTION"].includes(
          targetNode.parentElement.tagName,
        )
      ) {
        targetNode = targetNode.parentElement;
      }

      const cardWrapper = doc.createElement("div");
      cardWrapper.className = "krmu-blog-conclusion-card";

      const nodesToMove: Element[] = [targetNode];
      let curr = targetNode.nextElementSibling;
      while (curr) {
        const text = (curr.textContent || "")
          .replace(/\u00a0/g, " ")
          .toLowerCase()
          .trim();
        const tag = curr.tagName.toUpperCase();

        if (
          text.includes("faq") ||
          text.includes("frequently asked") ||
          curr.classList.contains("faq") ||
          curr.id.toLowerCase().includes("faq") ||
          (faqH2 && (curr === faqH2 || curr.contains(faqH2)))
        ) {
          break;
        }

        if (/^H[1-3]$/.test(tag) && !text.includes("conclusion")) {
          break;
        }

        nodesToMove.push(curr);
        curr = curr.nextElementSibling;
      }

      targetNode.parentNode?.insertBefore(cardWrapper, targetNode);
      nodesToMove.forEach((node) => cardWrapper.appendChild(node));
      cardWrapper
        .querySelectorAll("*")
        .forEach((el) => el.removeAttribute("style"));
    }

    // 1. Transform Rank Math / Yoast / Schema FAQ plugin blocks everywhere
    const wpFaqBlocks = Array.from(
      doc.querySelectorAll(
        "#rank-math-faq, .rank-math-faq-block, .schema-faq, .wp-block-yoast-seo-faq-block, .wp-block-schema-faq",
      ),
    );

    wpFaqBlocks.forEach((wpFaqBlock) => {
      const container = doc.createElement("div");
      container.className = "krmu-blog-faq-container";
      wpFaqBlock.parentNode?.insertBefore(container, wpFaqBlock);

      const wpItems = Array.from(
        wpFaqBlock.querySelectorAll(
          ".rank-math-faq-item, .schema-faq-section, .schema-faq-item",
        ),
      );

      if (wpItems.length > 0) {
        wpItems.forEach((wpItem) => {
          const qEl = wpItem.querySelector(
            ".rank-math-question, .schema-faq-question, h3, h4, strong",
          );
          const aEl = wpItem.querySelector(
            ".rank-math-answer, .schema-faq-answer, div, p",
          );

          if (qEl) {
            const details = doc.createElement("details");
            details.className = "krmu-blog-faq-item";
            details.setAttribute("name", "krmu-faq-accordion");

            const summary = doc.createElement("summary");
            summary.className = "krmu-blog-faq-summary";
            summary.textContent = qEl.textContent?.trim() || "";

            const answer = doc.createElement("div");
            answer.className = "krmu-blog-faq-answer";
            answer.innerHTML = aEl?.innerHTML || "";

            details.appendChild(summary);
            details.appendChild(answer);
            details
              .querySelectorAll("*")
              .forEach((el) => el.removeAttribute("style"));
            container.appendChild(details);
          }
        });
        wpFaqBlock.remove();
      }
    });

    // 2. Format FAQ Title
    if (faqH2) {
      faqH2.className = "text-[24px] font-bold text-white mb-6 mt-8";
      faqH2.removeAttribute("style");
    }

    // 3. Process all pre-existing details elements anywhere in the doc
    const detailsElements = Array.from(doc.querySelectorAll("details"));
    if (detailsElements.length > 0) {
      const container =
        doc.querySelector(".krmu-blog-faq-container") ||
        doc.createElement("div");

      if (!container.classList.contains("krmu-blog-faq-container")) {
        container.className = "krmu-blog-faq-container";
        if (faqH2) {
          faqH2.parentNode?.insertBefore(container, faqH2.nextElementSibling);
        } else {
          detailsElements[0].parentNode?.insertBefore(
            container,
            detailsElements[0],
          );
        }
      }

      detailsElements.forEach((detail) => {
        detail.className = "krmu-blog-faq-item";
        detail.setAttribute("name", "krmu-faq-accordion");
        detail.removeAttribute("open");
        detail
          .querySelectorAll("*")
          .forEach((el) => el.removeAttribute("style"));

        const summary = detail.querySelector("summary");
        if (summary) {
          summary.className = "krmu-blog-faq-summary";
          summary
            .querySelectorAll("*")
            .forEach((el) => el.removeAttribute("style"));
        }

        const contentDiv = detail.querySelector("div, p");
        if (
          contentDiv &&
          !contentDiv.classList.contains("krmu-blog-faq-answer")
        ) {
          contentDiv.classList.add("krmu-blog-faq-answer");
        }
        if (detail.parentNode !== container) {
          container.appendChild(detail);
        }
      });
    } else if (faqH2 && !doc.querySelector(".krmu-blog-faq-container")) {
      // 4. Fallback: Parse loose Q&A siblings under faqH2
      const faqContainer = doc.createElement("div");
      faqContainer.className = "krmu-blog-faq-container";

      const itemsToProcess: { question: string; answerHTML: string }[] = [];
      let sibling = faqH2.nextElementSibling;
      const nodesToRemove: Element[] = [];

      while (sibling) {
        const tag = sibling.tagName.toUpperCase();
        if (/^H[1-2]$/.test(tag) && sibling !== faqH2) break;

        const textContent = (sibling.textContent || "")
          .replace(/\u00a0/g, " ")
          .trim();

        if (textContent.includes("?") || tag === "H3" || tag === "H4") {
          nodesToRemove.push(sibling);

          let questionText = textContent;
          let inlineAnswer = "";

          if (textContent.includes("?")) {
            const qIndex = textContent.indexOf("?");
            questionText = textContent.substring(0, qIndex + 1).trim();
            inlineAnswer = textContent.substring(qIndex + 1).trim();
          }

          const tempDiv = doc.createElement("div");
          tempDiv.innerHTML = questionText;
          questionText = tempDiv.textContent?.trim() || questionText;

          let answerHTML = inlineAnswer ? `<p>${inlineAnswer}</p>` : "";

          let nextSub = sibling.nextElementSibling;
          while (
            nextSub &&
            nextSub.tagName !== "H2" &&
            nextSub.tagName !== "H3" &&
            nextSub.tagName !== "H4" &&
            !nextSub.textContent?.trim().includes("?")
          ) {
            answerHTML += nextSub.outerHTML || `<p>${nextSub.textContent}</p>`;
            nodesToRemove.push(nextSub);
            nextSub = nextSub.nextElementSibling;
          }

          itemsToProcess.push({
            question: questionText,
            answerHTML,
          });

          sibling = nextSub;
          continue;
        }

        sibling = sibling.nextElementSibling;
      }

      if (itemsToProcess.length > 0) {
        nodesToRemove.forEach((node) => node.remove());
        faqH2.parentNode?.insertBefore(faqContainer, faqH2.nextElementSibling);

        itemsToProcess.forEach((item) => {
          const details = doc.createElement("details");
          details.className = "krmu-blog-faq-item";
          details.setAttribute("name", "krmu-faq-accordion");

          const summary = doc.createElement("summary");
          summary.className = "krmu-blog-faq-summary";
          summary.textContent = item.question;

          const answer = doc.createElement("div");
          answer.className = "krmu-blog-faq-answer";
          answer.innerHTML = item.answerHTML;

          details.appendChild(summary);
          details.appendChild(answer);
          details
            .querySelectorAll("*")
            .forEach((el) => el.removeAttribute("style"));
          faqContainer.appendChild(details);
        });
      }
    }

    return doc.body.innerHTML;
  } catch {
    return content;
  }
};

const SingleBlogContent = ({ content, title, date, excerpt }: Props) => {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [processedContent, setProcessedContent] = useState<string>(() => {
    if (typeof window !== "undefined" && content) {
      return parseBlogContent(content, setHeadings);
    }
    return content;
  });

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "July 10, 2026";

  const cleanExcerpt = excerpt
    ? excerpt
        .replace(/\[&hellip;\]/g, "")
        .replace(/\[&hellip;/g, "")
        .replace(/&hellip;/g, "")
        .replace(/\[&#8230;\]/g, "")
        .replace(/&#8230;/g, "")
        .replace(/\[\.\.\.\]/g, "")
        .replace(/\[\s*\]/g, "")
        .replace(/<[^>]*>?/gm, "")
        .trim()
    : "";

  useEffect(() => {
    if (content && typeof window !== "undefined") {
      setProcessedContent(parseBlogContent(content, setHeadings));
    }
  }, [content]);

  return (
    <div className="w-full text-white font-poppins">
      {/* Blog Title */}
      {title && (
        <h1
          className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-white font-serif leading-tight mb-4 tracking-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {/* Metadata Sub-Header Bar (Views, Published Date, Social Share) */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-white/80 text-xs sm:text-sm border-y border-[#FFFFFF33] py-3 my-5">
        {/* Left Stats */}
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-white/80">
            <Eye className="w-4 h-4 text-white/70" />
            1,32,124
          </span>
          <span className="text-white/80">
            Published On:{" "}
            <strong className="text-white font-semibold">
              {formattedDate}
            </strong>
          </span>
        </div>

        {/* Right Social Share Icons */}
        <div className="flex items-center gap-2">
          <span className="text-white/70 text-xs mr-1">Share:</span>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/krmuniv/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition"
              title="Share on Facebook"
            >
              <FaFacebookF className="w-3 h-3" />
            </a>
            <a
              href="https://www.instagram.com/krmangalamuniv/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:opacity-80 transition"
              title="Instagram"
            >
              <FaInstagram className="w-3 h-3" />
            </a>
            <a
              href="https://www.linkedin.com/school/k-r-mangalam-university/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-80 transition"
              title="Share on LinkedIn"
            >
              <FaLinkedinIn className="w-3 h-3" />
            </a>
            <a
              href="https://api.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-80 transition"
              title="Share on WhatsApp"
            >
              <FaWhatsapp className="w-3 h-3" />
            </a>
            <a
              href="https://twitter.com/krmuniv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-black border border-white/20 text-white flex items-center justify-center hover:opacity-80 transition"
              title="Share on X"
            >
              <FaXTwitter className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Single Blog Content */}
      {processedContent ? (
        <div
          className="krmu_single_blog !leading-normal !text-white"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      ) : (
        <div
          className="krmu_single_blog !leading-normal text-white/90"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default SingleBlogContent;
