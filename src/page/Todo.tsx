import { useState } from 'react'
import TodoDoneList from '@/component/todolist/TodoDoneList'
import { TodoForm } from '@/component/todolist/TodoForm'
import TodoLists from '@/component/todolist/TodoLists'
import * as S from '@/page/Todo.styled'

export default function Todo() {
  const [content, setContent] = useState('')
  const [list, setList] = useState<string[]>([])
  const [doneList, setDoneList] = useState<string[]>([])

  function handleAdd() {
    if (content) {
      setList([...list, content])
    }

    setContent('')
  }

  function handleAddDone(idx: number) {
    setList(list.filter((_, index) => index !== idx))
    const newDone = list.filter((_, index) => index === idx)
    setDoneList([...doneList, ...newDone])
  }

  function handleDoneDelete(idx: number) {
    setDoneList(doneList.filter((_, index) => index !== idx))
  }

  return (
    <S.MainContainer>
      <S.MainHeader>행복한 하루 되세요, Hoonshi!</S.MainHeader>
      <TodoForm
        content={content}
        setContent={setContent}
        handleAdd={handleAdd}
      />
      {/* <S.Container> */}
      <TodoLists
        list={list}
        setList={setList}
        handleAddDone={handleAddDone}
      />
      <TodoDoneList
        list={doneList}
        handleDelete={handleDoneDelete}
      />
      {/* </S.Container> */}
    </S.MainContainer>
  )
}
