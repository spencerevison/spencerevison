import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import SEO from "../components/SEO";
import FadeIn from "react-fade-in";
import { StaticImage } from "gatsby-plugin-image";

const WorkPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <div className="container">
        <div className="article">
          <h1
            className="text-center md:w-full"
            dangerouslySetInnerHTML={{ __html: page.title }}
          />
          <article
            className=""
            dangerouslySetInnerHTML={{ __html: page.body }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default WorkPage;

export const query = graphql`
  query WorkQuery {
    page: datoCmsStandardPage(slug: { eq: "work" }, title: {}) {
      title
      body
    }
  }
`;
