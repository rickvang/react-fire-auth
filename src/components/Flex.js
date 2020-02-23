import styled, { css } from 'styled-components'

export const FlexBox = styled.div(
  props => css`
    width: 100%;
    display: flex;
    padding-top: 8px;

    align-items: ${props.align};
    justify-content: ${props.justify};
  `
)
