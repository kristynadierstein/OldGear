import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getQuery } from 'functions/getQuery';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { NavigationContainer } from './style'

const Navigation = props => {
  const data = useStaticQuery(graphql`
    {
      allPrismicNavigation {
        edges {
          node {
            data {
              main_meta_info_seo {
                text
              }
              menu_item_1 {
                text
              }
              menu_item_2 {
                text
              }
              menu_item_3 {
                text
              }
              menu_item_4 {
                text
              }
              menu_item_5 {
                text
              }
              menu_item_6 {
                text
              }
              menu_item_link_1 {
                uid
              }
              menu_item_link_2 {
                uid
              }
              menu_item_link_3 {
                uid
              }
              menu_item_link_4 {
                uid
              }
              menu_item_link_5 {
                uid
              }
              menu_item_link_6 {
                uid
              }
              navigation_logo {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 150
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `)


  const navigationQuery = getQuery(['allPrismicNavigation', 'edges', 0, 'node', 'data'], data)
  const logo = getImage(navigationQuery.navigation_logo.localFile)

  return (
    <NavigationContainer>
      <GatsbyImage image={logo}/>
    </NavigationContainer>
  )
}

Navigation.propTypes = {}

export default Navigation
