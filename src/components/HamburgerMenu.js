import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "gatsby";
import Logo from "svg/logo.svg";
import site from "site.config.json";

export default function HamburgerMenu({ open }) {
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        static
        className="absolute inset-x-0 top-0 z-50 p-2 transform origin-top-right transition md:hidden"
      >
        <div className="bg-white rounded-lg shadow-lg divide-gray-50 divide-y-2 ring-black ring-opacity-5 ring-1">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <Link to="/">
                <span className="sr-only">{site.title}</span>
                <Logo className="w-auto h-8" />
              </Link>
              <div>
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-900 bg-white hover:text-gray-400 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-primary focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="px-5 py-6 space-y-6">
            <div className="grid gap-x-8 gap-y-4">
              {site.nav.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="text-base text-gray-900"
                  activeClassName="font-semibold"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
