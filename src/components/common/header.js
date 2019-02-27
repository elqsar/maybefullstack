import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#bbb5b5`,
      marginBottom: ``,
    }}
  >
    <div
      className="w-4/5 p-4 m-auto flex justify-between text-black items-center"
    >
      <h3 >
        <Link
          to="/"
          className="no-underline font-body text-black"

        >
          {siteTitle}
        </Link>
      </h3>
      <h4 >
        <Link
          to="/"
          className="no-underline font-body text-black"

        >
          Portfolio
        </Link>
      </h4>
      <h4 >
        <Link
          to="/"
          className="no-underline font-body text-black"

        >
          Contact us
        </Link>
      </h4>
      <h4 >
        <Link
          to="/"
          className="no-underline font-body text-black"

        >
          Generate CV
        </Link>
      </h4>

    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
