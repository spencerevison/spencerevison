import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import SEO from "../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutPage = ({ data: { page } }) => {
  const mainImage = getImage(page.mainImage);
  return (
    <Layout>
      <SEO title={page.title} />
      <div className="container">
        <div className="flex-wrap text-center article md:flex">
          <h1
            className="md:w-full"
            dangerouslySetInnerHTML={{ __html: page.title }}
          />
          <GatsbyImage
            className="self-start flex-none md:mr-8"
            image={mainImage}
            alt=""
          />
          <article
            className="flex-1 text-left md:-mt-7"
            dangerouslySetInnerHTML={{ __html: page.body }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    page: datoCmsStandardPage(slug: { eq: "about" }) {
      mainImage {
        gatsbyImageData(placeholder: BLURRED, width: 250)
      }
      title
      body
    }
  }
`;
