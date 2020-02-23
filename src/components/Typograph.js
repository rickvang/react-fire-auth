import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Text = styled.p``

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`

export const Link = styled(RouterLink)`
  font-size: 1rem;
  text-decoration: none;

  outline: none;
  color: #212121;

  &:hover,
  &:focus {
    color: #424242;
  }
`
