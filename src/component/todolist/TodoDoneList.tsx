import * as S from './TodoLists.styled'

interface TodoListsProps {
  list: string[]
  handleDelete: (idx: number) => void
}

export default function TodoDoneList({ list, handleDelete }: TodoListsProps) {
  return (
    <S.ListContainer>
      <S.ListTitle>오늘의 끝난 일</S.ListTitle>
      {list.map((cur, idx) => (
        <S.ListItem key={idx}>
          <S.TodoText>{cur}</S.TodoText>
          <S.DeleteButton
            type="button"
            onClick={() => handleDelete(idx)}>
            삭제 🤔
          </S.DeleteButton>
        </S.ListItem>
      ))}
    </S.ListContainer>
  )
}
