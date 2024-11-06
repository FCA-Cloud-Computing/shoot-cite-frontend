import { AppSidebar, SidebarProvider, SidebarTrigger } from "@/components";
import { ReactNode } from "react";
import { Layout } from "@/layouts";
import { capitalizePath } from "@/utils/capitalizePath";

interface Props {
  children: ReactNode;
}

export function LayoutDashboard({ children }: Props) {
  const currentPath = capitalizePath();
  return (
    <Layout title="SC - Dashboard">
      <SidebarProvider>
        <AppSidebar />
        <main className="p-4 w-full flex flex-col gap-4">
          <header className="flex gap-4 items-center">
            <SidebarTrigger size="sm"/>
            <span>Dashboard &gt; {currentPath}</span>
          </header>
          {children}
        </main>
      </SidebarProvider>
    </Layout>
  );
}
