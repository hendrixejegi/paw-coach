import React, { useState } from "react";
import clsx from "clsx";
import logo from "@/assets/images/logo.png";

import { NavLink } from "react-router";

import { AlignJustify, House, Dog, Dumbbell, Info, Phone } from "lucide-react";

type NavItem = [to: string, label: string, icon?: React.ElementType];

const navLinks: NavItem[] = [
  ["/", "Home", House],
  ["/adoption", "Adoption", Dog],
  ["/coaching", "Coaching", Dumbbell],
  ["/about", "About", Info],
  ["/contact", "Contact", Phone],
];

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between p-4">
        <div className="relative z-50 flex items-center gap-2">
          <img src={logo} alt="Paw Coach logo" className="max-w-[40px]" />
          <div className="font-baloo text-brown-400 text-3xl font-bold">
            PawCoach
          </div>
        </div>

        <button
          className="fixed top-4 right-4 z-50 flex items-center lg:hidden"
          aria-label={
            isNavOpen ? "Close Navigation Menu" : "Open Navigatoin Menu"
          }
          aria-controls={"main-navigation"}
          aria-expanded="false"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <AlignJustify />
        </button>

        <nav aria-label="Primary Navigation">
          <ul
            className={clsx(
              "bg-beige-300 fixed top-0 bottom-0 left-0 z-40 flex w-[min(70%,_500px)] -translate-x-full flex-col items-start justify-center gap-4 p-4 transition-transform duration-150 lg:relative lg:w-fit lg:translate-x-0 lg:flex-row lg:bg-transparent lg:p-0",
              isNavOpen ? "translate-x-0" : "",
            )}
          >
            {navLinks.map(([to, label, Icon], index) => (
              <li key={index}>
                <NavLink
                  to={to}
                  className="text-brown-400 font-nunito relative flex items-center gap-4 px-2 py-1 text-lg font-bold hover:[&_img]:scale-100 hover:[&_img]:-rotate-30"
                >
                  {({ isActive }) => (
                    <>
                      {Icon && (
                        <Icon aria-hidden="true" className="lg:hidden" />
                      )}

                      <img
                        src={logo}
                        alt="Paw Coach logo"
                        className={clsx(
                          "absolute top-0 left-0 -z-10 hidden max-w-[20px] transition-transform duration-300 lg:block",
                          isActive
                            ? "scale-100 -rotate-30 opacity-70"
                            : "scale-0 rotate-0 opacity-50",
                        )}
                        aria-hidden="true"
                      />

                      {label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
