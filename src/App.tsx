import React from 'react'
import Todo from './page/todo-page/Todo'
import GlobalStyle from './style/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calendar from './page/calendar-page/Calendar'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          index
          element={<Todo />}
        />
        <Route
          path="/calendar"
          element={<Calendar />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
