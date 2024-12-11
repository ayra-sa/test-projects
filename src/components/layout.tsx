import React from "react";
import Head from "next/head";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title = "Dashboard", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="This is a basic layout for Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="py-24 px-10">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Layout;
