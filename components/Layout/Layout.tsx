import React from "react";

function Layout({ children }: any) {
  return (
    <div className="container">
      <div className="flex justify-center">
        <img
          src="/logo.jpeg"
          alt="loto"
          height="100px"
          width="100px"
          className="m-4"
        />
        <h1 className="m-4 text-inherit	text-5xl text-center">
          Releasin Challenge
        </h1>
      </div>
      {children}
    </div>
  );
}

export default Layout;
