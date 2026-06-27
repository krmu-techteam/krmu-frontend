export const getPageNumbers = (
  page: number,
  totalPages: number,
  maxVisiblePages = 5,
) => {
  const pages: (number | string)[] = [];

  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  pages.push(1);

  let start = Math.max(2, page - 1);
  let end = Math.min(totalPages - 1, page + 1);

  if (page <= 3) end = 4;
  else if (page >= totalPages - 2) start = totalPages - 3;

  if (start > 2) pages.push("ellipsis-start");

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) pages.push("ellipsis-end");

  pages.push(totalPages);

  return pages;
};
