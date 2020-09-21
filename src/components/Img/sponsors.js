import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      cityImage: file(relativePath: { eq: "miamicity-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      countyImage: file(relativePath: { eq: "miamicounty-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      keonImage: file(relativePath: { eq: "keonlogo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <div class="cards">
            <div class="card-header">
              <Img fluid={data.cityImage.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="cards">
            <div class="card-header">
              <Img fluid={data.countyImage.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          {" "}
          <div class="cards">
            <div class="card-header">
              <Img fluid={data.keonImage.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
