import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export function TopProductsSkeleton() {
  const skeletonRows = [
    "skeleton-row-1",
    "skeleton-row-2",
    "skeleton-row-3",
    "skeleton-row-4",
    "skeleton-row-5"
  ];

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="px-4 py-6 text-2xl font-bold text-dark dark:text-white md:px-6 xl:px-9">
        Top Products
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-t text-base [&>th]:h-auto [&>th]:py-3 sm:[&>th]:py-4.5">
            <TableHead className="min-w-[120px]">Product</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {skeletonRows.map((rowId) => (
            <TableRow key={rowId}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </TableCell>
              <TableCell><Skeleton className="h-4 w-24" /></TableCell>
              <TableCell><Skeleton className="h-4 w-24" /></TableCell>
              <TableCell><Skeleton className="h-4 w-16" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
