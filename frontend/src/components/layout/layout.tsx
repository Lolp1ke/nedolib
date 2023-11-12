import { type ReactNode } from "react";

import { useUser } from "@/hooks/user/useUser";

import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

interface LayoutProps {
  children?: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const { user } = await useUser();

  return (
    <>
      <Header user={user} />
      <main className={"relative flex-1"}>
        <Sidebar />
        {children}
      </main>
    </>
  );
}
