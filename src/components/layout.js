import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../css/style.css'

const Layout = ({ children }) => (
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
      <>
        <div
          style={{
            padding: `0px 1.0875rem 1.45rem`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 0,
            height: '100vh',
            backgroundColor: '#003E6B'
          }}
          className="m-auto"
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
