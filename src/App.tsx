import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from './page/todo-page/Todo'
import GlobalStyle from './style/GlobalStyle'
import Calendar from './page/calendar-page/Calendar'
import Info from './page/info-page/Info'
import RouteError from './page/route-error/RouteError'

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
        <Route
          path="info"
          element={<Info />}
        />
        <Route
          path="*"
          element={<RouteError />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
