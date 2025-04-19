import { CustomPaginationProps } from "../../interfaces/pagination";
import { getPaginationButtonState } from "../../utils/paginationHelpers";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";

const CustomPagination: React.FC<CustomPaginationProps> = ({
  page,
  setPage,
  totalPages,
  disabled = false,
}) => {
  return (
    <Pagination className="p-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={page > 1 ? () => setPage((p) => p - 1) : undefined}
            className={getPaginationButtonState(page, totalPages, false)}
            aria-disabled={disabled}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={
              page < totalPages ? () => setPage((p) => p + 1) : undefined
            }
            className={getPaginationButtonState(page, totalPages, true)}
            aria-disabled={disabled}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default CustomPagination;
