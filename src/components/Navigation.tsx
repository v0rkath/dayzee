"use client";

import { PropsWithChildren } from "react";
import SideNavigationBar from "./SideNavigationBar";
import { TopNavigationBar } from "./TopNavigationBar";

export default function Navigation({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col">
      <TopNavigationBar />
      <div className="flex">
        <div className="shrink-0">
          <SideNavigationBar />
        </div>
        <main className="grow overflow-x-clip">{children}</main>
      </div>
    </div>
  );
}
