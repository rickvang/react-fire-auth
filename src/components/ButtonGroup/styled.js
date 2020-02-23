import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;

  button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
  }

  button:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  button:last-of-type {
    border-radius: 0 4px 4px 0;
  }
`
