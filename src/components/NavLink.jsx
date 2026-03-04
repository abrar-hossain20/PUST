import React from "react";
import { FaCaretDown } from "react-icons/fa";

const NavLink = ({ children }) => {
  return (
    <>
      {/* {children} */}
      <li>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="flex justify-between items-center"
          >
            {children} <FaCaretDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-black"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default NavLink;
