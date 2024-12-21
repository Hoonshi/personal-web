import { useState } from 'react'
import * as S from './TodoLists.styled'
import TodoModal from './todomodal/TodoModal'

interface TodoListsProps {
  list: string[]
  setList: (list: string[]) => void
  handleAddDone: (idx: number) => void
}

export default function TodoLists({
  list,
  setList,
  handleAddDone
}: TodoListsProps) {
  //
  const [editContent, setEditContent] = useState('')
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(Boolean)

  function handleDelete(idx: number): void {
    setList(list.filter((_, index) => idx !== index))
  }

  function handleModalOpen(idx: number) {
    setEditIndex(idx)
    setEditContent(list[idx])
    setIsModalOpen(true)
  }

  return (
    <S.ListContainer>
      <S.ListTitle>오늘의 할 일</S.ListTitle>
      {list.map((cur, idx) => (
        <S.ListItem key={idx}>
          <S.TodoText>
            {idx + 1}. {cur}
          </S.TodoText>

          <S.BtnContainer>
            <S.DeleteButton
              type="button"
              onClick={() => handleAddDone(idx)}>
              완료 🥰
            </S.DeleteButton>

            <S.DeleteButton
              type="button"
              onClick={() => handleModalOpen(idx)}>
              수정 😅
            </S.DeleteButton>

            {isModalOpen && (
              <TodoModal
                list={list}
                setList={setList}
                editContent={editContent}
                setEditContent={setEditContent}
                editIndex={editIndex}
                setEditIndex={setEditIndex}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            )}

            <S.DeleteButton
              type="button"
              onClick={() => handleDelete(idx)}>
              안해 😡
            </S.DeleteButton>
          </S.BtnContainer>
        </S.ListItem>
      ))}
    </S.ListContainer>
  )
}
