import * as S from './TodoForm.styled'

interface TodoFormProps {
  content: string
  setContent: (content: string) => void
  handleAdd: () => void
}

export const TodoForm = ({ content, setContent, handleAdd }: TodoFormProps) => {
  return (
    <S.TodoForm>
      <S.TodoInput
        value={content}
        onChange={e => setContent(e.target.value)}></S.TodoInput>
      <S.TodoBtn
        type="button"
        onClick={handleAdd}>
        가보자고
      </S.TodoBtn>
    </S.TodoForm>
  )
}
