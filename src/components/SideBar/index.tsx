import React from "react";
import Link from "next/link";

const SideBar: React.FC = () => {
  return (
    <div className="flex-shrink-0 w-64 bg-gray-800 text-white">
      {/* Sidebar content goes here */}

      <div className="p-4">
        Dashboard Menu
        <div className=" flex flex-col ">
          {/* <Link href="/dashboard">Dashboard</Link> */}
          <Link href="/dashboard/contact">Contact</Link>
          <Link href="/dashboard/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
