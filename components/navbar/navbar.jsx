"use client";

import React, { useState, useEffect } from "react";
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";
import ActionButtons from "./_components/action-buttons";

const Navbar = () => {
  const navbarClasses = `
    flex items-center justify-between space-x-10 bg-white h-14
    sticky top-0 z-50 border-b border-gray-200
  `;
  return (
    <div className={navbarClasses}>
      <div className="flex iitems-center justify-center">
        <Logo></Logo>
        <Menu></Menu>
      </div>
      <ActionButtons />
    </div>
  );
};

export default Navbar;
