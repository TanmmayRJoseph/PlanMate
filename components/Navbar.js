import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky-top-0 w-full bg-gradient-to-r from-indigo-600 to-blue-800 text-white text-xl py-4 px-8 flex justify-between items-center fixed shadow-md">
      {/* Logo */}
      <Link href={"/"}>
        <h1 className="text-3xl font-semibold flex items-center gap-2 hover:text-indigo-200 transition-colors duration-300">
          <span className="text-4xl">📅</span> PlanMate
        </h1>
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link
          href={"/plan"}
          className="text-lg font-medium px-6 py-2 bg-blue-700 hover:bg-blue-600 rounded-md transition duration-300 transform hover:scale-105"
        >
          Make a Plan
        </Link>
        <Link
          href={"/about"}
          className="text-lg font-medium px-6 py-2 bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 rounded-md transition duration-300 transform hover:scale-105"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}
