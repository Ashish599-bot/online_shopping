"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function Header() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Signup", path: "/signup" },
  ];
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/signup");
  };
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex gap-6">
          <img src={"/logo.jpg"} className="h-[80px] rounded-lg" />
          <h1 className="text-xl font-bold pt-6">Nivro</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`hover:text-blue-200 cursor-pointer ${
                    pathname === item.path ? "font-bold underline" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          {window.localStorage.getItem("isLoggedIn") ? (
            <div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/signup"
              className="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
