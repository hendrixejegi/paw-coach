import React from "react";
import { Link } from "react-router";

import logo from "@/assets/images/logo.png";

export const Footer = () => {
  return (
    <footer className="full-bleed bg-beige-300">
      <div className="font-nunito mx-auto flex max-w-[1280px] flex-col gap-8 p-4 py-12 md:flex-row md:*:basis-1/2 lg:items-center lg:justify-between">
        <div className="space-y-2">
          <div className="relative z-50 flex items-center gap-2">
            <img src={logo} alt="Paw Coach logo" className="max-w-[40px]" />
            <div className="font-baloo text-brown-400 text-3xl font-bold">
              PawCoach
            </div>
          </div>
          <p className="text-brown-300">
            Helping pets and their people live better, one paw at a time.
          </p>
        </div>

        <div className="space-y-4 lg:text-end">
          <p className="text-brown-300 flex flex-col">
            <span>Made with 🤎 by Hendrix</span>{" "}
            <span>Frontend Developer | Dog lover | Code whisperer</span>
          </p>
          <div className="flex gap-2 lg:justify-end">
            <Link
              to="https://github.com/hendrixejegi"
              target="_blank"
              className="text-brown-400"
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </Link>
            <Link
              to="https://linkedin.com/in/hendrixabugewaejegi"
              className="text-brown-400"
            >
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </Link>
          </div>
          <p className="text-brown-300">
            <small>&copy; 2025 PawCoach. All rights reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
};
