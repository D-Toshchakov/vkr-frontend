'use client'
import React from "react";

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { BsCart } from "react-icons/bs";
import { NavItem } from "./AdminSidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: <AiOutlineHome className="w-6 h-6" />,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: <AiOutlineUser className="w-6 h-6" />,
  },
  {
    label: "Products",
    href: "/admin/products",
    icon: <BsCart className="w-6 h-6" />,
  },
];
