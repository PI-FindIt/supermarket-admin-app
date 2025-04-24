'use client';

import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery, gql } from "@apollo/client";

const GET_TOP_PRODUCTS = gql`
  query GetTopProducts($supermarketId: Int!) {
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
`;

interface Product {
  price: number;
  product: {
    ean: number;
    brandName: string;
    categoryName: string;
  };
}

interface SupermarketData {
  supermarket: {
    products: Product[];
  };
}

interface TopProductsProps {
  supermarketId: number;
}

export function TopProducts({ supermarketId }: TopProductsProps) {
  const { loading, error, data } = useQuery<SupermarketData>(GET_TOP_PRODUCTS, {
    variables: { supermarketId }
  });

  // Show skeleton while loading
  if (loading) return <TopProductsSkeleton />;

  // Show error message if something went wrong
  if (error) return (
    <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="px-4 py-6 text-2xl font-bold text-dark dark:text-white md:px-6 xl:px-9">
        Top Products
      </h2>
      <div className="text-red-500 p-4">Error loading products: {error.message}</div>
    </div>
  );

  const products = data?.supermarket?.products || [];

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="px-4 py-6 text-2xl font-bold text-dark dark:text-white md:px-6 xl:px-9">
        Top Products
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-t text-base [&>th]:h-auto [&>th]:py-3 sm:[&>th]:py-4.5">
            <TableHead className="min-w-[120px]">Product Name</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((item: Product) => (
            <TableRow key={item.product.ean}>
              <TableCell className="font-medium">{item.product.brandName}</TableCell>
              <TableCell>{item.product.brandName}</TableCell>
              <TableCell>{item.product.categoryName}</TableCell>
              <TableCell>
                {item.price ? `$${item.price.toFixed(2)}` : 'N/A'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}


export function TopProductsSkeleton() {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="px-4 py-6 text-2xl font-bold text-dark dark:text-white md:px-6 xl:px-9">
        Top Products
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-t text-base [&>th]:h-auto [&>th]:py-3 sm:[&>th]:py-4.5">
            <TableHead className="min-w-[120px]">Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Sold</TableHead>
            <TableHead>Profit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell colSpan={100}>
                <Skeleton className="h-8" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
