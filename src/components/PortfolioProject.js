import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ArrowRight } from "react-feather";
import "styles/button.css";

export default function PortfolioProject({ project }) {
  const image = getImage(project.image);
  return (
    <div className="mb-6 lg:-mt-6 lg:mb-10 lg:flex gap-8">
      <div className="lg:w-1/2">
        <h2 className="lg:mt-0">{project.title}</h2>
        <div
          className="mb-8"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <div className="flex gap-8">
          <a
            href={project.projectUrl}
            className="relative inline-block px-5 py-0 overflow-hidden text-sm font-semibold tracking-widest text-center uppercase border border-gray-900 border-solid rounded-lg button button--slick"
            data-text="SEE LIVE"
            target="_blank"
            rel="noreferrer"
          >
            <span className="align-middle">S</span>
            <span className="align-middle">E</span>
            <span className="align-middle">E</span>
            <span className="align-middle">&nbsp;</span>
            <span className="align-middle">L</span>
            <span className="align-middle">I</span>
            <span className="align-middle">V</span>
            <span className="align-middle">E</span>
          </a>
          <a
            href={project.codeUrl}
            className="inline-block px-5 text-sm tracking-widest no-underline uppercase button button--arrow"
            target="_blank"
            rel="noreferrer"
          >
            Source Code <ArrowRight className="inline ml-2 arrow" />
          </a>
        </div>
      </div>
      <GatsbyImage
        className="self-start mt-6 lg:mt-14 lg:w-1/2"
        image={image}
        alt=""
      />
    </div>
  );
}
