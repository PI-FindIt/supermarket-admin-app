'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";

const client = new ApolloClient({
  uri: "https://localhost",
  cache: new InMemoryCache(),
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
    <SidebarProvider>
      {children}
    </SidebarProvider>
  </ApolloProvider>
  );
}