import React from "react";
import Layout from "components/Layout";
import SEO from "../components/SEO";
import FadeIn from "react-fade-in";
import { graphql } from "gatsby";
import site from "../site.config.json";

const IndexPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO titleTemplate={site.title} />
      <div className="container flex items-center mx-auto">
        <FadeIn>
          <h1
            className="mb-6 text-4xl font-extrabold leading-snug sm:text-5xl sm:leading-snug"
            dangerouslySetInnerHTML={{ __html: page.heroTagline }}
          />
          <h2
            className="text-lg font-normal"
            dangerouslySetInnerHTML={{ __html: page.heroSubText }}
          />
        </FadeIn>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    page: datoCmsHomePage {
      heroTagline
      heroSubText
    }
  }
`;
