"use client";

import "../globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/ui/modetoggle";
import Header from "@/components/ui/header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function PageRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex justify-between bg-[#18181B] px-4 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-10 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
            <div className="flex items-center gap-x-2">
              <ModeToggle />
              <Header />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-0 pt-0">
            <div className="min-h-[100vh] flex-1 md:min-h-min">{children}</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
