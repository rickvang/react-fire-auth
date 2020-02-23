import styled, { css } from 'styled-components'

export const Content = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;

  align-items: center;
  justify-content: center;

  background-color: #fefefe;

  ${props =>
    props.columns &&
    css`
      flex-direction: column;
    `}
`
