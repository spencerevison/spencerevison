import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import SEO from "../components/SEO";
import PortfolioProject from "../components/PortfolioProject";
import FadeIn from "react-fade-in/src/FadeIn";

const WorkPage = ({ data: { page, projects } }) => {
  console.log(projects);
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
          <FadeIn>
            {projects.nodes
              .slice(0)
              .reverse()
              .map((project) => (
                <PortfolioProject key={project.title} project={project} />
              ))}
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
};

export default WorkPage;

export const query = graphql`
  query {
    page: datoCmsStandardPage(slug: { eq: "work" }) {
      title
    }
    projects: allDatoCmsProject {
      nodes {
        codeUrl
        description
        projectUrl
        title
        image {
          gatsbyImageData(width: 800)
        }
      }
    }
  }
`;
