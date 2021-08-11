import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Popover } from "@headlessui/react";
import { Link } from "gatsby";
import site from "../site.config.json";
import Logo from "../../static/images/svg/logo.svg";
import { MenuIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <Popover className="container relative py-2 bg-white md:py-4">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between md:justify-start md:space-x-10">
              <div className="flex justify-start lg:flex-1 lg:w-0">
                <Link to="/" className="h-7 sm:h-8 md:h-10">
                  <span className="sr-only">{site.title}</span>
                  <Logo className="w-auto h-full" />
                </Link>
              </div>
              <div className="md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-900 bg-white hover:text-gray-400 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-primary focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-6 md:flex">
                {site.nav.map((item) => {
                  if (item.download === true) {
                    return (
                      <a
                        key={item.title}
                        href={item.path}
                        target="_blank"
                        className="p-2 text-base text-gray-900 border-b border-transparent hover:border-gray-900"
                        rel="noreferrer"
                      >
                        {item.title}
                      </a>
                    );
                  } else {
                    return (
                      <Link
                        key={item.title}
                        to={item.path}
                        target={item.target}
                        className="p-2 text-base text-gray-900 border-b border-transparent hover:border-gray-900"
                        activeClassName="border-b border-gray-900"
                      >
                        {item.title}
                      </Link>
                    );
                  }
                })}
              </Popover.Group>
            </div>
            <HamburgerMenu open={open} />
          </>
        )}
      </Popover>
    </header>
  );
}
