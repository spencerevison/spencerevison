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
          <FadeIn delay={0} className="md:w-full">
            <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
          </FadeIn>
          <FadeIn delay={50} className="self-start flex-none md:mr-8">
            <StaticImage
              src="../../static/images/profilePic.jpg"
              placeholder="blurred"
              alt=""
              width={250}
            />
          </FadeIn>
          <FadeIn delay={100} className="flex-1 text-left md:-mt-6">
            <article dangerouslySetInnerHTML={{ __html: page.body }} />
          </FadeIn>
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
