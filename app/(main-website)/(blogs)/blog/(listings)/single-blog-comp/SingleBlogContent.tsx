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

<style>

.krmu-blog-cta{
margin:30px 0;
border-radius:12px;
padding:22px;
background:linear-gradient(92.34deg,#111D32 35.25%,#345898 98.04%);
color:white;
}

.krmu-blog-cta-inner{
display:flex;
align-items:center;
gap:18px;
}

.krmu-blog-cta-logo{
width:90px;
height:90px;
}

.krmu-blog-cta-text{
flex:1;
}

.krmu-blog-cta-title{
font-size:24px;
font-weight:700;
margin-bottom:6px;
}

.krmu-blog-cta-desc{
font-size:16px;
opacity:.9;
}

.krmu-blog-cta-actions{
display:flex;
flex-direction:column;
gap:10px;
}

.krmu-blog-cta-btn{
background:#e50914;
padding:8px 20px;
border-radius:999px;
color:white;
font-weight:600;
font-size:14px;
text-align:center;
display:inline-block;
}

.krmu-blog-cta-link{
color:white;
text-decoration:underline;
font-size:14px;
text-align:center;
}

/* MOBILE */

@media (max-width:640px){

.krmu-blog-cta-inner{
flex-direction:column;
align-items:flex-start;
}

.krmu-blog-cta-logo{
width:70px;
height:70px;
}

.krmu-blog-cta-title{
font-size:20px;
}

.krmu-blog-cta-desc{
font-size:14px;
margin-bottom:10px;
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

<h3 class="krmu-blog-cta-title">
Pursuing a career in Science?
</h3>

<p class="krmu-blog-cta-desc">
K.R. Mangalam University offers industry-aligned BSc programs with hands-on labs, expert faculty, and strong placement support.
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
  el.style.background = "#1f5fa8";
  el.style.color = "#ffffff";
  el.style.fontWeight = "600";
  el.style.fontSize = "22px";
  el.style.padding = "12px 18px";
  el.style.borderRadius = "4px";
  el.style.margin = "35px 0 15px 0";
  el.style.display = "block";

  return {
    id,
    text: el.textContent?.trim() || `Heading ${index + 1}`,
  };
});

setHeadings(newHeadings);


const tocHTML = `
<div class="blog-toc">

<style>

.blog-toc{
margin-bottom:30px;
}

.blog-toc-title{
font-size:20px;
font-weight:700;
margin-bottom:16px;
color:#222;
cursor:pointer;
display:flex;
align-items:center;
justify-content:space-between;
}

.blog-toc-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:12px;
}

.blog-toc-item{
display:flex;
align-items:center;
gap:10px;
padding:10px 14px;
border-radius:6px;
border:1px solid #e2e2e2;
background:#f5f6f7;
font-size:14px;
font-weight:500;
color:#333;
text-decoration:none;
}

.blog-toc-number{
display:flex;
align-items:center;
justify-content:center;
width:24px;
height:24px;
border-radius:50%;
background:#e9edf2;
color:#1f5fa8;
font-size:12px;
font-weight:600;
}

.blog-toc-text{
line-height:1.2;
}

.blog-toc-item.active{
background:#1f5fa8;
color:white;
border-color:#1f5fa8;
}

.blog-toc-item.active .blog-toc-number{
background:white;
color:#1f5fa8;
}

/* MOBILE */

@media (max-width:640px){

.blog-toc-grid{
display:grid;              /* ✅ always visible */
grid-template-columns:1fr;
margin-top:12px;
}


.blog-toc-title::after{
content:"";               /* ❌ remove arrow */
}



}

</style>

<h3 class="blog-toc-title">
Table of Contents
</h3>

<div class="blog-toc-grid">

${newHeadings
  .map(
    (h, i) => `
<a href="#${h.id}" class="blog-toc-item ${i === 0 ? "active" : ""}">
<span class="blog-toc-number">${i + 1}</span>
<span class="blog-toc-text">${h.text}</span>
</a>
`
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
          .trim()
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
      const wrapper = doc.createElement("div");
      wrapper.className = "blog-table-responsive";
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    setProcessedContent(doc.body.innerHTML);
  }, [content]);

  return (
    <div
      className="w-full"
    >


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
