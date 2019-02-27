import React from 'react'
import { node } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './common/header'
import '../css/_style.css'
import '../css/animations/_Boris.css'
import '../css/animations/_Vera.css'
import './adobe'
import BorisVera from './B_V/BorisVera'


const Layout = () => {


  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="mf-container w-5/6 m-auto relative z-1 ">
          <Header siteTitle={data.site.siteMetadata.title}/>
          {/*<i className="fas fa-bars"></i>*/}
          <BorisVera />
        </div>
      )
      }
    />
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
