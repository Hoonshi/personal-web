import * as S from '@/component/todolist/todomodal/TodoModal.styled'

interface ModalProps {
  list: string[]
  setList: (list: string[]) => void
  editContent: string
  setEditContent: (editModal: string) => void
  editIndex: number | null
  setEditIndex: (editIndex: number | null) => void
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}

export default function TodoModal({
  list,
  setList,
  editContent,
  setEditContent,
  editIndex,
  setEditIndex,
  isModalOpen,
  setIsModalOpen
}: ModalProps) {
  //

  function handleEditSave() {
    if (editIndex !== null) {
      setList(
        list.map((cur, idx) => {
          return idx !== editIndex ? cur : editContent
        })
      )
    }
    setEditContent('')
    setEditIndex(null)
    setIsModalOpen(!isModalOpen)
  }

  function handleCloseModal() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <h2>수정하기</h2>
        <S.ModalInput
          type="text"
          value={editContent}
          onChange={e => setEditContent(e.target.value)}
        />
        <S.ModalBtn onClick={handleEditSave}>저장</S.ModalBtn>
        <S.ModalBtn onClick={handleCloseModal}>취소</S.ModalBtn>
      </S.ModalContent>
    </S.ModalContainer>
  )
}
