import React from "react";
import { Linkedin, Twitter, GitHub } from "react-feather";
import Logo from "svg/logo.svg";
import site from "site.config.json";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
        <Link
          to="/"
          className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
        >
          <Logo className="w-10 h-10 p-2 pl-0 text-white" />
          <span className="pr-2 text-l">{site.title}</span>
        </Link>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:pl-4 sm:py-2 sm:border-l sm:border-gray-200">
          © 2021 {site.author}
        </p>
        <span className="inline-flex justify-center mt-4 sm:justify-start sm:ml-auto sm:mt-0">
          <a
            className="text-gray-500"
            href="https://twitter.com/spencerevison"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://github.com/spencerevison"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className="w-5 h-5" />
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/campbellspencer/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
}
