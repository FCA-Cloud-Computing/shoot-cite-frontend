import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components";
import { AppSidebar } from "@/components";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
