export const getPaginationButtonState = (
  currentPage: number,
  totalPages: number,
  isNext: boolean
) => {
  if (isNext && currentPage === totalPages)
    return "pointer-events-none opacity-50";
  if (!isNext && currentPage === 1) return "pointer-events-none opacity-50";
  return "cursor-pointer";
};
