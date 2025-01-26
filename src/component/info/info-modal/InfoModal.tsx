import { useEffect, useRef, useState } from 'react'
import * as S from './InfoModal.styled'
import { useStore } from '@/store/useStore'

interface Btn {
  onClick: () => void
}

export default function InfoModal({ onClick }: Btn) {
  const inputEl = useRef<HTMLInputElement>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addInfo } = useStore()

  function handleSubmit() {
    addInfo(title, content)
    setTitle('')
    setContent('')
    onClick()
  }

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
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <S.TextArea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <S.ButtonContainer>
          <S.SubmitButton onClick={handleSubmit}>완료</S.SubmitButton>
          <S.CancelButton onClick={onClick}>취소</S.CancelButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.Overlay>
  )
}
