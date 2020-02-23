import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export const ButtonGroup = props => (
  <S.ButtonWrapper>{props.children}</S.ButtonWrapper>
)

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
}
