import Calendar from '@/page/calendar-page/Calendar'
import Info from '@/page/info-page/Info'
import RouteError from '@/page/route-error/RouteError'
import Todo from '@/page/todo-page/Todo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Todo />
  },
  {
    path: '/calendar',
    element: <Calendar />
  },
  {
    path: '/info',
    element: <Info />
  },
  {
    path: '*',
    element: <RouteError />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
