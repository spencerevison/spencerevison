import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import SEO from "../components/SEO";
import FadeIn from "react-fade-in";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <div className="container">
        <div className="flex-wrap text-center article md:flex">
          <h1
            className="md:w-full"
            dangerouslySetInnerHTML={{ __html: page.title }}
          />
          <StaticImage
            className="self-start flex-none md:mr-8"
            src="../../static/images/profilePic.jpg"
            placeholder="blurred"
            alt=""
            width={250}
          />
          <article
            className="flex-1 text-left md:-mt-6"
            dangerouslySetInnerHTML={{ __html: page.body }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    page: datoCmsStandardPage(slug: { eq: "about" }, title: {}) {
      title
      body
    }
  }
`;
