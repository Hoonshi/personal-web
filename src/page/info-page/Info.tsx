import Menu from '@/component/menu/Menu'
import * as S from './Info.styled'
import InfoNote from '@/component/info/info-note/InfoNote'
import InfoHeader from '@/component/info/info-form/InfoForm'
import InfoBtn from '@/component/info/info-botton/InfoBtn'
import { useState } from 'react'
import InfoModal from '@/component/info/info-modal/InfoModal'

export default function Info() {
  const [isModal, setIsModal] = useState<Boolean>(false)

  function handleOpenModal() {
    setIsModal(!isModal)
  }

  return (
    <S.InfoBacgkround>
      <Menu />

      <S.InfoHeader>Hoonshi님의 메모</S.InfoHeader>

      <S.HeaderContainer>
        <InfoHeader />
        <InfoBtn onClick={handleOpenModal} />
        {isModal && <InfoModal onClick={handleOpenModal} />}
      </S.HeaderContainer>
      <S.NoteContainer>
        <InfoNote />
      </S.NoteContainer>
    </S.InfoBacgkround>
  )
}
