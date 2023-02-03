import Logo from "@components/Logo";
import menu from "@config/menu.json";
import SearchModal from "@layouts/partials/SearchModal";
import Image from "next/image";
import Link from "next/link";
import social from "@config/social.json";
import React, { useEffect, useState } from "react";
import {
  IoLogIn,
  IoLogInOutline,
  IoLogInSharp,
  IoSearch,
} from "react-icons/io5";
import Social from "@layouts/components/Social";

const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navFixed, setNavFixed] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.pageYOffset >= 1) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
  });

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white py-2 transition-all ${
          navFixed ? "shadow" : "shadow"
        }`}
      >
        <nav className="navbar container">
          {/* logo */}
          <div className="order-0">
            <Logo />
          </div>
          {/* navbar toggler */}
          <input id="nav-toggle" type="checkbox" className="hidden" />
          <label
            id="show-button"
            htmlFor="nav-toggle"
            className="order-2 flex cursor-pointer items-center md:hidden md:order-1"
          >
            <svg className="h-4 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          </label>
          <label
            id="hide-button"
            htmlFor="nav-toggle"
            className="order-2 hidden cursor-pointer items-center md:order-1"
          >
            <svg className="h-4 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          </label>
          {/* /navbar toggler */}

          <ul
            id="nav-menu"
            className="navbar-nav order-3 hidden w-full md:flex md:w-4/6 md:space-x-2 md:order-1"
          >
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  // <li className="nav-item nav-dropdown group relative">
                  //   <span className="nav-link inline-flex items-center">
                  //     {menu.name}
                  //     <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  //       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  //     </svg>
                  //   </span>
                  //   <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                  //     {menu.children.map((child, i) => (
                  //       <li className="nav-dropdown-item" key={`children-${i}`}>
                  //         <Link
                  //           href={child.url}
                  //           className="nav-dropdown-link block"
                  //         >
                  //           {child.name}
                  //         </Link>
                  //       </li>
                  //     ))}
                  //   </ul>
                  // </li>
                  <></>
                ) : (
                  <>
                    <li className="nav-item hidden md:block">
                      <Link href={menu.url} className="nav-link block text-xs">
                        {menu.name}
                      </Link>
                    </li>
                    <div className="nav-item block text-lg font-semibold capitalize md:hidden">
                      {i == 0 ? (
                        <>
                          {" "}
                          <div className="bg-white">
                            <div className="capitaliz flex flex-col items-center space-y-2 p-14 pb-6 text-center">
                              <Link legacyBehavior href="">
                                <a className="group text-lg text-primary hover:text-primary">
                                  Design
                                </a>
                              </Link>
                              <Link legacyBehavior href="">
                                <a className="group  text-lg text-zinc-300 hover:text-primary">
                                  About
                                </a>
                              </Link>
                              <Link legacyBehavior href="">
                                <a className="group  text-lg text-zinc-300 hover:text-primary">
                                  License
                                </a>
                              </Link>
                              <Link legacyBehavior href="">
                                <a className="group  text-lg text-zinc-300 hover:text-primary">
                                  Contact
                                </a>
                              </Link>
                              <Link legacyBehavior href="">
                                <a className="group  text-lg text-zinc-300 hover:text-primary">
                                  Terms & Conditions
                                </a>
                              </Link>
                              <Link legacyBehavior href="">
                                <a className="group  text-lg text-zinc-300 hover:text-primary">
                                  Privacy
                                </a>
                              </Link>
                            </div>
                            <div className="flex flex-col justify-center p-10 space-y-4">
                              <p className="text-center text-lg text-zinc-200">
                                @CreativesBox, INC
                              </p>
                              {/* social icons */}
                              <Social
                                source={social}
                                className="social-icons-header mb-8 pb-80"
                              />
                              {/* <div className="flex justify-around space-x-7 p-10 pb-80">
                                <Image
                                  src={`/images/Favicon.png`}
                                  alt="something went wrong"
                                  width={`20`}
                                  height={`20`}
                                ></Image>
                                <Image
                                  src={`/images/Favicon.png`}
                                  alt="something went wrong"
                                  width={`20`}
                                  height={`20`}
                                ></Image>
                                <Image
                                  src={`/images/Favicon.png`}
                                  alt="something went wrong"
                                  width={`20`}
                                  height={`20`}
                                ></Image>
                                <Image
                                  src={`/images/Favicon.png`}
                                  alt="something went wrong"
                                  width={`20`}
                                  height={`20`}
                                ></Image>
                              </div> */}
                            </div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </ul>
          <div className="order-1 mr-2 ml-auto flex md:ml-0 md:order-2">
            <div
              className="cursor-pointer p-2 text-xl text-dark hover:text-primary"
              onClick={() => {
                setSearchModal(true);
              }}
            >
              <IoSearch />
            </div>
            <button className="btn btn-primary hidden text-xs capitalize md:ml-3 md:block">
              Login
            </button>
          </div>

          <SearchModal
            searchModal={searchModal}
            setSearchModal={setSearchModal}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
