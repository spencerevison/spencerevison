import React from "react";
import Layout from "components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import site from "../site.config.json";

const IndexPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO titleTemplate={site.title} />
      <div className="container flex items-center mx-auto h-screen-nav-xs md:h-screen-nav-md">
        <div className="">
          <h1 className="mb-6 text-4xl font-extrabold leading-snug sm:text-5xl sm:leading-snug">
            Hi, I'm Spencer
            <br /> Evison Campbell.
          </h1>
          <h2 className="text-lg font-normal fadeInLeft">
            I'm a freelance Front End Developer based in California. I'm
            passionate about creating beautiful user experiences that are both
            <span className="font-semibold"> accessible</span> and
            <span className="font-semibold"> performant</span>. I especially
            love working with
            <span className="font-semibold"> React</span> and
            <span className="font-semibold"> JAMstack</span>.
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    page: datoCmsHomePage {
      heroImage {
        gatsbyImageData(
          placeholder: BLURRED
          imgixParams: {
            duotone: "88363B,F1E4FF"
            duotoneAlpha: 60
            fit: "crop"
          }
        )
      }
      heroTagline
      heroSubText
    }
  }
`;
