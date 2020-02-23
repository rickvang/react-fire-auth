import styled from 'styled-components'

export const InputWrapper = styled.div`
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;

  outline: none;
  border-radius: 4px;
  border: 1px solid #e2e2e2;

  transition: border 0.2s;

  &:focus {
    border-color: #212121;
  }
`
