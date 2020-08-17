import React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'


export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <Hero />
      <h4>Recent posts</h4>
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}{" "} - {node.frontmatter.date}</h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
