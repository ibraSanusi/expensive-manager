import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="m-auto flex w-full flex-col gap-4 xl:max-w-7xl">
      {children}
    </main>
  );
}

export default MainLayout;
