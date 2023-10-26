import { UserButton } from "@clerk/nextjs";
import React from "react";

export const Navigation = () => {
  return (
    <header>
      <nav>
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  );
};
