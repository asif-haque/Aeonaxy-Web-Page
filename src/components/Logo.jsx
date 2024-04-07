import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <img src="/logo.png" alt="logo" className="size-12" />
      <h1 className="hidden lg:block capitalize text-3xl">BRILLIANT</h1>
    </div>
  );
};

export default Logo;
