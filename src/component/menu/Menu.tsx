import { useState } from 'react'
import * as S from './Menu.styled'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.MenuContainer>
      <S.MenuToggle onClick={toggleMenu}>☰</S.MenuToggle>
      {isOpen && (
        <S.Menu>
          <S.MenuList>
            <S.MenuNavLink to="/">
              <S.MenuItem>오늘의 할 일</S.MenuItem>
            </S.MenuNavLink>

            <S.MenuNavLink to="calendar">
              <S.MenuItem>캘린더</S.MenuItem>
            </S.MenuNavLink>

            <S.MenuItem>정보 기록</S.MenuItem>
          </S.MenuList>
        </S.Menu>
      )}
    </S.MenuContainer>
  )
}
