"use client";

type Props = {
  date: string;
};

const SingleBlogDate = ({ date }: Props) => {
  // Convert the ISO date string to a readable format
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
  <span className="text-[16px] text-black lg:text-white">
    <span className="font-semibold">Published On:</span> {formattedDate}
  </span>
);
};

export default SingleBlogDate;
