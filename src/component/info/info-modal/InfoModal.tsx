import { useEffect, useRef } from 'react'
import * as S from './InfoModal.styled'

export default function InfoModal() {
  const inputEl = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputEl.current?.focus()
  }, [])

  return (
    <S.Overlay>
      <S.ModalContainer>
        <h2>나의 기록 작성</h2>
        <S.InputField
          type="text"
          placeholder="제목을 입력하세요"
          ref={inputEl}
        />
        <S.TextArea placeholder="내용을 입력하세요" />
        <S.ButtonContainer>
          <S.SubmitButton>완료</S.SubmitButton>
          <S.CancelButton>취소</S.CancelButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.Overlay>
  )
}
