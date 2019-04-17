import React from "react"
import { graphql } from 'gatsby'

import Layout from './layout'

const Post = ({ data }) => {
  const post = data.markdownRemark;
  const { title } = post.frontmatter;
  return (
    <Layout>
      <h2>{title}</h2>
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
       }
   }
}`

export default Post;
