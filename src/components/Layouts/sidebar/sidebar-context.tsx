"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type SidebarState = "expanded" | "collapsed";

type SidebarContextType = {
  state: SidebarState;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
}

type SidebarProviderProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export function SidebarProvider({ children, defaultOpen = true }: Readonly<SidebarProviderProps>) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  const obj = useMemo<SidebarContextType>(() => ({
    state: isOpen ? "expanded" : "collapsed",
    isOpen,
    setIsOpen,
    isMobile,
    toggleSidebar,
  }), [isOpen, isMobile]);

  return (
    <SidebarContext.Provider value={obj}>
      {children}
    </SidebarContext.Provider>
  );
}
