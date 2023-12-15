import NavbarSingleplayer from "@/components/NavbarSingleplayer";
import { Navbar } from "@nextui-org/navbar";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavbarSingleplayer />
      {children}
    </div>
  );
};

export default Layout;
