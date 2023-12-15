import NavbarSingleplayer from "@/components/NavbarSingleplayer";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <NavbarSingleplayer />
      {children}
    </div>
  );
};

export default Layout;
