import styled from 'styled-components'

export const ListContainer = styled.ul`
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 30px 0 100px 0;
`

export const ListTitle = styled.h5`
  text-align: center;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  padding: 5px;
  border-radius: 5px;
  margin: 0 auto;
  /* background-color: #f9f9f9; */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */

  /* &:hover {
    background-color: #f1f1f1;
  } */
`

export const TodoText = styled.span`
  font-size: 16px;
  color: #333;
`

export const DeleteButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  background-color: ${props => props.color || '#5c7cfa'};
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
export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`
