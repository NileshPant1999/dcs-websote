import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
{
  file(relativePath: {eq: "hero.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm Nilesh</h1>
          <h4>I am a freelance Machine learning Engineer with experience in full-stack development</h4>
          <Link to="/contact" className="btn">
            contact me
          </Link>
          <SocialLinks />
        </article>
      </div>
    </header>
  )
}

export default Hero
