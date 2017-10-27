import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <button {...props} className={`button ${props.className}`}>
    {props.children}
  </button>
)

Button.defaultProps = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  className: PropTypes.string
}

export default Button