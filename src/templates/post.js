import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image';

import Layout from '../components/layout'
import Metatags from '../components/metatags'

const Post = ({ data, location }) => {
  const post = data.markdownRemark;
  const { description, image, title } = post.frontmatter;
  const url = '';
  const thumbnail = image.childImageSharp.resize.src

  return (
    <Layout>
      <Metatags
        title={title}
        description={description}
        thumbnail={url + thumbnail}
        url={url}
        pathname={location.pathname}
      />
      <h1>{title}</h1>
      <Img fluid={image.childImageSharp.fluid} style={{ marginBottom: '15px' }}/>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
};

export const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
   }
}
`

export default Post;
