import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import SEO from "../components/SEO";
import "styles/button.css";

const ContactPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <section className="container">
        <div className="mx-auto article">
          <h1 className="text-center">{page.title}</h1>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm text-gray-600 leading-7"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-1 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none bg-opacity-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-600 leading-7"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-1 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none bg-opacity-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-600 leading-7"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 px-3 py-1 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none resize-none bg-opacity-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  className="relative block px-5 py-0 ml-auto overflow-hidden text-sm font-semibold tracking-widest text-center uppercase border-2 border-gray-900 border-solid rounded-lg button button--slick focus:outline-none"
                  data-text="Submit"
                  rel="noreferrer"
                >
                  <span className="align-middle">S</span>
                  <span className="align-middle">U</span>
                  <span className="align-middle">B</span>
                  <span className="align-middle">M</span>
                  <span className="align-middle">I</span>
                  <span className="align-middle">T</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    page: datoCmsStandardPage(slug: { eq: "contact" }) {
      title
      body
    }
  }
`;
