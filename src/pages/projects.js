import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data: { allStrapiProjects: { nodes: projects } }
}) => {
  return (
    <Layout>
      <section className='project-page'>
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}


export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        description
        url
        id
        title
        image {
          childImageSharp {
            fluid {
               ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`


export default ProjectsPage