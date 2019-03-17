import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

interface Data {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: number
          frontmatter: {
            country: "Malaysia" | "Panama"
          }
        }
      }>
    }
  }
}

const StyledLink = styled(Link)`
  color: black;
  -webkit-text-decoration-color: #409cf0;
  text-decoration-color: #409cf0;
  &:hover {
    color: #409cf0;
  }
`

export default ({ data }: Data) => {
  console.log(data.allMarkdownRemark.edges)
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <StyledLink to={node.id}>{node.frontmatter.country}</StyledLink>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            country
          }
          excerpt
        }
      }
    }
  }
`
