"use client";

import NoPaperFormsWidget from "../comp/NoPaperFormsWidget";

const SidebarBlogForm = () => {
  return (
    <div className="mb-6 mt-7 bg-white rounded-lg shadow-md" id="sidebar-blog-form">

      <h3 className="text-[19px] bg-[#2A60A3] font-bold text-center mb-3 text-[#ffffff] p-2">
        Admission Open
      </h3>

      <NoPaperFormsWidget
        widgetId="0d2d6e28c86e4213b353bfe132035965"
        height="480px"
      />

    </div>
  );
};

export default SidebarBlogForm;