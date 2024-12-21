import styled from 'styled-components'

export const TodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 10px;
  width: 30%;
`

export const ListTitle = styled.h5`
  text-align: center;
`

export const TodoInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    outline: 1px solid blue;
  }
`

export const TodoBtn = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  background-color: #5c7cfa;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #364fc7;
  }

  &:focus {
    outline: none;
  }
`
