import React from "react";
import { Button } from "@/components/ui/button";
import {
  Root as PopoverRoot,
  Trigger as PopoverTrigger,
  Content as PopoverContent,
} from "@radix-ui/react-popover";
import {
  Root as AvatarRoot,
  Image as AvatarImage,
  Fallback as AvatarFallback,
} from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "@/redux/store";

function Navbar() {
  const navigate = useNavigate();

  // Change this to true after login
  // const user = false;
  // const user = true;
  const { user } = useSelector(store=>store.auth);


  return (
    <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 h-16">
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer"
        >
          Crowdfund<span className="text-[#096e07]">Portal</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center font-medium gap-8 text-gray-700">
          <li
            onClick={() => navigate("/")}
            className="hover:text-[#096e07] cursor-pointer"
          >
            HOME
          </li>
          <li
            onClick={() => navigate("/campaign")}
            className="hover:text-[#096e07] cursor-pointer"
          >
            CAMPAIGN
          </li>
          <li
            onClick={() => navigate("/browse")}
            className="hover:text-[#096e07] cursor-pointer"
          >
            BROWSE
          </li>
          <li
            onClick={() => navigate("/about")}
            className="hover:text-[#096e07] cursor-pointer"
          >
            ABOUT
          </li>
        </ul>

        {/* User Section */}
        {!user ? (
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button
              className="bg-[#05892a] hover:bg-[#096e07]"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </div>
        ) : (
          <PopoverRoot>
            <PopoverTrigger asChild>
              <AvatarRoot className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback className="flex items-center justify-center bg-gray-200 text-sm font-medium">
                  M
                </AvatarFallback>
              </AvatarRoot>
            </PopoverTrigger>

            <PopoverContent className="w-64 p-4 bg-white rounded-md shadow-md border mr-4 mt-2">
              {/* Profile Info */}
              <div className="flex gap-4 mb-3">
                <AvatarRoot className="w-12 h-12 rounded-full overflow-hidden">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </AvatarRoot>
                <div>
                  <h4 className="font-medium">Mohit Binjhade</h4>
                  <p className="text-sm text-gray-500">
                    mohit@example.com
                  </p>
                </div>
              </div>

              <hr className="my-2" />

              {/* Menu Options */}
              <div className="flex flex-col gap-3 text-gray-700">
                <div
                  className="flex w-fit items-center gap-2 cursor-pointer hover:text-[#096e07]"
                  onClick={() => navigate("/profile")}
                >
                  <User2 className="w-4 h-4" />
                  <Button variant="link" className="p-0 text-gray-700">
                    <Link to="/profile">View Profile</Link>
                  </Button>
                </div>

                <div
                  className="flex w-fit items-center gap-2 cursor-pointer hover:text-red-600"
                  onClick={() => {
                    // Handle logout logic
                    console.log("User logged out");
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  <Button variant="link" className="p-0 text-gray-700">
                    Logout
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </PopoverRoot>
        )}
      </div>
    </div>
  );
}

export default Navbar;

