import React from 'react'
import PropTypes from 'prop-types'

import { Input, InputWrapper } from './styled'
import { Label } from '../Typograph'

export const Field = props => (
  <InputWrapper>
    {props.label && (
      <Label htmlFor={props.id || props.name}>{props.label}</Label>
    )}
    <Input
      {...props}
      id={props.id || props.name}
      name={props.name}
      type={props.type}
    />
  </InputWrapper>
)

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
