import React, { useState } from "react";
import Logo from "../assets/images/pust_logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import NavLink from "./NavLink";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-3 sm:px-4">
        <img
          src={Logo}
          alt="PUST logo"
          className="h-10 w-auto object-contain "
        />
        <div className="hidden sm:block">
          <ul className="flex gap-1 text-sm lg:text-base lg:gap-2">
            <li>
              <a href="/">Home</a>
            </li>

            <NavLink>Governance</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Administration</NavLink>
            <NavLink>Academic</NavLink>
            <NavLink>Facilities</NavLink>
            <NavLink>Notices</NavLink>
            <NavLink>Admission</NavLink>
            <li>
              <a href="https://pust.ac.bd/online-examination">
                Online Examination
              </a>
            </li>
          </ul>
        </div>

        {/* Menu button on mobile device */}
        <button
          onClick={handleMenuClick}
          aria-label="Open menu"
          className="flex items-center gap-1 text-lg sm:text-xl p-2 hover:cursor-pointer hover:bg-[#80050b] sm:hidden"
        >
          {menuOpen ? (
            <>
              <MdOutlineClose /> <p>Close</p>
            </>
          ) : (
            <>
              <GiHamburgerMenu /> <p>Menu</p>
            </>
          )}
        </button>
      </div>

      {/* When menu button is clicked then*/}
      {/* a sidebar will be opened */}
      {menuOpen && (
        <div className="drawer drawer-end">
          <input
            id="my-drawer-5"
            type="checkbox"
            checked={menuOpen}
            readOnly
            className="drawer-toggle"
          />
          <div className="drawer-content">
            {/* Page content here */}
            {/* <label
              htmlFor="my-drawer-5"
              className="drawer-button btn btn-primary"
            >
              Open drawer
            </label> */}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-5"
              aria-label="close sidebar"
              className="drawer-overlay"
              onClick={() => setMenuOpen(false)}
            ></label>
            <ul className="menu bg-base-200 min-h-full w-60 max-w-sm sm:max-w-md p-4">
              {/* Sidebar content here */}
              <li>
                <a>Home</a>
              </li>
              <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-between items-center"
                  >
                    Governance <FaCaretDown />
                  </div>
                  <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
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
              <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-between items-center"
                  >
                    About <FaCaretDown />
                  </div>
                  <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
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
              <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-between items-center"
                  >
                    Administration <FaCaretDown />
                  </div>
                  <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
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
              <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-between items-center"
                  >
                    Academic <FaCaretDown />
                  </div>
                  <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
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
              <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-between items-center"
                  >
                    Facilities <FaCaretDown />
                  </div>
                  <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
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
              <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-between items-center"
                  >
                    Notices <FaCaretDown />
                  </div>
                  <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
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
              <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-between items-center"
                  >
                    Admission <FaCaretDown />
                  </div>
                  <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
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
              <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex justify-between items-center"
                  >
                    Online Exam
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
