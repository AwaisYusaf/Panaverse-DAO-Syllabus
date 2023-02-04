import React from "react";

function PageLayout({ children }: any) {
  return (
    <main className="flex flex-col w-full items-center">
      <section className="flex flex-col w-11/12">{children}</section>
    </main>
  );
}

export default PageLayout;
