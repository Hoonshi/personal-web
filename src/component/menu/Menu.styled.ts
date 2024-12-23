import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MenuNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit; //inherit는 기본값을 그대로 유지한다는 뜻임~

  &:hover {
    text-decoration: none;
    color: inherit;
  }

  &:focus {
    color: inherit;
  }
`

export const MenuContainer = styled.div`
  position: fixed;
  top: 18px;
  right: 20px;
`

export const MenuToggle = styled.button`
  font-size: 30px;
  cursor: pointer;
  background: none;
  border: none;
`

export const Menu = styled.div`
  background-color: none;
  color: black;
  position: absolute;
  top: 30px;
  right: 0;
  width: 150px;
`

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`
export const MenuItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #444;

  &:hover {
    background-color: rgb(144, 183, 166);
  }
`
