import { useEffect, useRef } from 'react'
import * as S from './TodoForm.styled'

interface TodoFormProps {
  content: string
  setContent: (content: string) => void
  handleAdd: () => void
}

export const TodoForm = ({ content, setContent, handleAdd }: TodoFormProps) => {
  const inputEl = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputEl.current?.focus()
  }, [])

  return (
    <S.TodoForm onSubmit={handleAdd}>
      <S.TodoInput
        ref={inputEl}
        value={content}
        placeholder="오늘은 무엇을 하실건가요~?"
        onChange={e => setContent(e.target.value)}></S.TodoInput>
      <S.TodoBtn type="submit">가보자고</S.TodoBtn>
    </S.TodoForm>
  )
}
