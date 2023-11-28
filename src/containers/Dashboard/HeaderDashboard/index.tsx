"use client";
import { FC, useState } from "react";
import { signOut, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

const HeaderDashboard: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = () => {
    if (session) {
      setIsMenuOpen(false);
      signOut();
      router.push("/");
    }
  };
  return (
    <>
      <div className="flex justify-between bg-gray-200 p-4">
        <div>Hello {session?.user?.name}</div>
        <div>
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={
                    session?.user?.image ||
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  }
                  alt=""
                />
              </button>
            </div>

            {isMenuOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <h1>{session?.user?.name}</h1>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="user-menu-item-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="user-menu-item-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="user-menu-item-2"
                  onClick={handleSignOut}
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDashboard;
