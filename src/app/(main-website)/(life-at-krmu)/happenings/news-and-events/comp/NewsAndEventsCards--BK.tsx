// "use client";

// import { useEffect, useState } from "react";
// import NewsCard from "./NewsCard";
// import { getAllNewsAndEventsWithMeta } from "@/lib/api/news-events"; // import your function
// import { NewsEventItem } from "@/lib/types/news-events";

// const NewsAndEventsCards = () => {
//   const [news, setNews] = useState<NewsEventItem[]>([]);
//   const [page, setPage] = useState(1);
//   const [pageSize] = useState(12); // 4 per page
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     async function fetchNews() {
//       const res = await getAllNewsAndEventsWithMeta(page, pageSize);
//       setNews(res.data);
//       setTotalPages(res.meta.pagination.pageCount);
//     }
//     fetchNews();
//   }, [page, pageSize]);

//   return (
//     <div>
//       {/* News Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {news.map((item) => (
//           <NewsCard
//             key={item.id}
//             title={item.title}
//             slug={item.slug}
//             firstImage={item?.newsmedia[0]?.url}
//             publishedAt={item.publishedAt}
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center gap-4 mt-6">
//         <button
//           disabled={page === 1}
//           onClick={() => setPage((p) => p - 1)}
//           className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
//         >
//           Prev
//         </button>
//         <span className="text-white">
//           Page {page} of {totalPages}
//         </span>
//         <button
//           disabled={page === totalPages}
//           onClick={() => setPage((p) => p + 1)}
//           className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewsAndEventsCards;
