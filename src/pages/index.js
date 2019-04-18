import React from "react"
import { Link } from "gatsby"

import Typography from '@material-ui/core/Typography'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostListItem from "../templates/postListItem";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
      <PostListItem linkTo={node.fields.slug}>
        <div className="post-list">
          <Typography>{node.frontmatter.date}</Typography>
          <Link to={node.fields.slug} className="link" key={index}>
            <h1>{node.frontmatter.title}</h1>
          </Link>
          <h4>{node.frontmatter.description}</h4>
          <p>{node.excerpt}</p>
        </div>
      </PostListItem>
    ))}
  </Layout>
)

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            description
          }
        }
      }
    }
  }
`

export default IndexPage
