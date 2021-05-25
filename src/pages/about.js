import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";

const AboutPage = ({ data: { markdownRemark } }) => {
  console.log(markdownRemark);
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <div className="container">
        <article
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          className="py-12 mx-auto prose sm:py-18 lg:prose-lg xl:prose-xl max-w-7xl"
        />
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
