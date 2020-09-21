import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import HeroTwo from "../components/herotwo";
import About from "../components/about";
import Education from "../components/education";
import Sponsors from "../components/sponsors";
import Films from "../components/films";
import Layout from "../components/layout";
import Contact from "../components/Contact";
import Navigator from "../components/navigation";
import ArticlePreview from "../components/article-preview";
import { ParallaxProvider } from "react-scroll-parallax";
import HeaderImage from "../components/Img/headerImg";
import { Button, Col, Row, ButtonGroup } from "react-bootstrap";
import Scroll from "../components/Scroll";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [author] = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout location={this.props.location}>
        {" "}
        <div>
          <Helmet title={siteTitle} />
          <header className="masthead">
            <Hero />
          </header>{" "}
          <About />
          <Education />
          <Sponsors />
          <Contact />
          {/* <Films />
          <section className="blog" id="blog">
            <div className="blog-content">
              <div className="container">
                <div class="section-heading mt-5 ">
                  <h3 class="mrb-15 text-gray "> Recent News</h3>
                  <hr className="divider mb-4" />
                  <h2 class="mrb-25">
                    Recent news on future
                    <span class="display-font">
                      {" "}
                      projects, special guests and upcoming events{" "}
                    </span>
                    .
                  </h2>
                  <p>Recent news on</p>
                </div>
              </div>
              <ul className="container-cards">
                {posts.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </section> */}
        </div>{" "}
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
