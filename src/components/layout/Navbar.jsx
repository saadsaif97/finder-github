import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
  }

  render() {
    return (
      <nav>
        <p>
          <i className='fab fa-github'></i> {this.props.title}
        </p>
      </nav>
    )
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
