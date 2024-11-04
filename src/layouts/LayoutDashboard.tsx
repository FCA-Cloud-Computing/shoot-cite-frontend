import { AppSidebar, SidebarProvider, SidebarTrigger } from "@/components";
import { ReactNode } from "react";
import { Layout } from "@/layouts";

interface Props {
  children: ReactNode;
}

export function LayoutDashboard({ children }: Props) {
  return (
    <Layout title="SC - Dashboard">
      <SidebarProvider>
        <AppSidebar />
        <main className="p-4">
          <header className="flex gap-4 items-center">
            <SidebarTrigger size="sm"/>
            <span>Dashboard &gt; </span>
          </header>
          {children}
        </main>
      </SidebarProvider>
    </Layout>
  );
}
