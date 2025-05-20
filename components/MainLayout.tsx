import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-4 m-auto w-full xl:max-w-7xl">
      {children}
    </main>
  );
}

export default MainLayout;
