"use client";

import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { ThemeProvider } from "next-themes";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { useState, useEffect } from "react";

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const [client, setClient] = useState<ApolloClient<any> | null>(null);

  useEffect(() => {
    const url = `http://${window.location.hostname}`;

    const httpLink = createHttpLink({
      uri: url,
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json",
      }
    });

    const apolloClient = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        }
      },
    });

    setClient(apolloClient);
  }, []);

  if (!client) return null;


  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="light" attribute="class">
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
