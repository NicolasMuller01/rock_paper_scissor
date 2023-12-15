import React from "react";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function NavbarSingleplayer() {
  return (
    <nav>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
