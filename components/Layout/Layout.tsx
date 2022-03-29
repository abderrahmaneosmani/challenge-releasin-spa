import React from "react";

function Layout({ children }: any) {
  return (
    <div className="container">
      <h1 className="text-inherit	text-5xl text-center">Realeasin Challenge</h1>
      {children}
    </div>
  );
}

export default Layout;
