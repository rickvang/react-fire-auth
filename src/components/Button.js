import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-weight: bold;
  text-transform: uppercase;

  cursor: pointer;

  outline: none;
  border-radius: 4px;
  border: 1px solid #212121;
  background-color: #212121;

  transition: all 0.2s;

  &:hover,
  &:focus {
    border-color: #383838;
    background-color: #383838;
  }

  &:active {
    border-color: #3f3f3f;
    background-color: #3f3f3f;
  }
`
