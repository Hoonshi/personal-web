import React from 'react'
import Todo from './page/Todo'
import GlobalStyle from './style/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calendar from './component/calendar/Calendar'

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
