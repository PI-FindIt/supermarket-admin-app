"use client";

import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { ThemeProvider } from "next-themes";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
  uri: "http://localhost",
  credentials: 'include',
  headers: {
    "Content-Type": "application/json",
  },
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="light" attribute="class">
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
