import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro
}) => (
    <div>
        <div
            className="full-width-image margin-top-0"
            style={{
                backgroundImage: `url(${
                !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image})`,
                backgroundPosition: `top`,
                backgroundAttachment: `fixed`,
                height: '200px'
            }}></div>
        <section
            className="section section--gradient" 
            >
            <div className="row">
                <div className="recentPosts">
                    <h3 className="has-text-weight-semibold is-size-3"
                    style={{marginBottom:'10px'}}>
                        Recent Posts
                    </h3>
                    <BlogRoll/>
                    <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/blog">
                            Read more
                        </Link>
                    </div>
                </div>
                    <div className="tags" style={{marginBottom:'10px'}}>
                    <h3 className="has-text-weight-semibold is-size-3">
                        Tags
                    </h3>
                </div>
               
            </div>
        </section>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({blurbs: PropTypes.array})
}

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}/>
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({frontmatter: PropTypes.object})
    })
}

export default IndexPage

export const pageQuery = graphql `
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
