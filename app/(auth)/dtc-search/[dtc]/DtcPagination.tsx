import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  currentPage: number;
  totalPages: number;
  dtc: string;
};

const DtcPagination = ({ currentPage, totalPages, dtc }: Props) => {
  return (
    <Pagination>
      <PaginationContent>
        {currentPage !== 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/dtc-search/${dtc}/${currentPage - 1}`}
            />
          </PaginationItem>
        )}
        {currentPage !== 1 && (
          <PaginationItem>
            <PaginationLink href={`/dtc-search/${dtc}`}>1</PaginationLink>
          </PaginationItem>
        )}
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={`/dtc-search/${dtc}/${currentPage}`} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage + 1 < totalPages && (
          <PaginationItem>
            <PaginationLink href={`/dtc-search/${dtc}/${currentPage + 1}`}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage + 2 < totalPages && (
          <PaginationItem>
            <PaginationLink href={`/dtc-search/${dtc}/${currentPage + 2}`}>
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage + 3 < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink href={`/dtc-search/${dtc}/${totalPages}`}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={`/dtc-search/${dtc}/${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default DtcPagination;
