import React from "react";
import Link from "next/link";

const SideBar: React.FC = () => {
  return (
    <div className="flex-shrink-0 w-64 bg-gray-800 text-white">
      {/* Sidebar content goes here */}

      <div className="p-4">
        Dashboard Menu
        <div className=" flex flex-col ">
          <div>
            <Link href="/dashboard">Dashboard</Link>
          </div>
          <div className="mt-4">
            <Link href="/dashboard/exam-list">Exams</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
