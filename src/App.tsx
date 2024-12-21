import React from 'react'
import Todo from './page/Todo'
import GlobalStyle from './style/GlobalStyle'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Todo />
    </>
  )
}

export default App
