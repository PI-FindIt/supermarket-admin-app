'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TopProductsSkeleton } from "@/components/Tables/top-products/skeleton";
import { useQuery } from "@apollo/client";
import { gql } from "@/../graphql/gql";

const GET_TOP_PRODUCTS = gql(`
    query GetTopProducts($supermarketId: Int!){
        supermarket(id: $supermarketId) { 
            products {
                price
                product {
                    ean 
                    brandName
                    categoryName
                }
            }
        }
    }
`);

export function TopProducts() {
  const { data, loading, error } = useQuery(GET_TOP_PRODUCTS, {
    variables: { supermarketId: 2 },
  });

  if (loading) return <TopProductsSkeleton />;
  if (error) return <div>Error: {error.message}</div>;

  const tableData = data?.supermarket?.products.map(item => ({
    brandName: item.product.brandName,
    category: item.product.categoryName,
    price: item.price,
    ean: item.product.ean
  })) || [];

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="px-6 py-4 sm:px-7 sm:py-5 xl:px-8.5">
        <h2 className="text-2xl font-bold text-dark dark:text-white">
          Top Products
        </h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-t text-base [&>th]:h-auto [&>th]:py-3 sm:[&>th]:py-4.5">
            <TableHead className="min-w-[120px] pl-5 sm:pl-6 xl:pl-7.5">
              Product Name
            </TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Sold</TableHead>
            <TableHead className="pr-5 text-right sm:pr-6 xl:pr-7.5">
              Profit
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData.map((product) => (
            <TableRow
              className="text-base font-medium text-dark dark:text-white"
              key={product.ean}
            >
              <TableCell className="flex min-w-fit items-center gap-3 pl-5 sm:pl-6 xl:pl-7.5">
                <div>{product.brandName}</div>
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TopProducts;