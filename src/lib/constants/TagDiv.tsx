import React from "react";

type TagDivProps = {
  tags: string; // comma-separated string of tags
  extraClass?: string; // optional extra class
};

const TagDiv: React.FC<TagDivProps> = ({ tags, extraClass = "" }) => {
  // Split the comma-separated string into an array and trim spaces
  const tagArray = tags ? tags.split(",").map((tag) => tag.trim()) : [];

  // Convert each tag to `tag-{slug}` class
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");

  const className = [
    ...tagArray.map((tag) => `tag-${slugify(tag)}`),
    extraClass,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={className} />;
};

export default TagDiv;
