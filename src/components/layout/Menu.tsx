"use client";
import { menuItems } from "@/data/menuData";
import { role } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2">
          <h2 className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </h2>
          <ul>
            {i.items.map((item) => {
              if (item.visible.includes(role)) {
                const isActive = pathname === item.href;

                return (
                  <Link
                    href={item.href}
                    key={item.label}
                    className={`flex items-center justify-center lg:justify-start gap-4
                      py-2 rounded-md md:px-2
                      hover:bg-sky-100 hover:dark:bg-sky-100/20 
                      hover:text-sky-600
                      ${
                        isActive
                          ? "bg-sky-100 dark:bg-sky-100/20 text-sky-600 font-medium"
                          : "text-gray-500"
                      }`}
                  >
                    {typeof item.icon === "function" && <item.icon />}
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                );
              }
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
