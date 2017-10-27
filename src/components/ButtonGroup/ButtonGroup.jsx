import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

const ButtonGroup = (props) => (
  <div className={`button-group ${props.className}`}>
    {
      props.children.map(btn =>
        <Button key={btn.type.name} {...btn.props}>{btn}</Button>
      )
    }
  </div>
)

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default ButtonGroup