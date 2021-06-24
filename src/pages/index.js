import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Navigation from '../components/Navigation'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Navigation/>
    <p>Ahoj Oldo, tak tady budes moct sledovat vyvoj stranek :-)</p>
  </Layout>
)

export default IndexPage
