import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => (
  <label className={`field-group ${props.group}`}>
    {props.label && <span className="label">{props.label}</span>}
    <input {...props} className={`field-input ${props.className}`} name={props.name} type={props.type} />
  </label>
)

Input.propTypes = {
  label: PropTypes.string,
  group: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Input