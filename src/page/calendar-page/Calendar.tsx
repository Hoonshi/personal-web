import { useState } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import * as S from './Calendar.styled'
import Menu from '@/component/menu/Menu'
import CalendarMemo from '@/component/calendar/CalendarMemo'

interface Event {
  title: string
  date: string
}
export default function Calendar() {
  const [newEvent, setNewEvent] = useState<Event[]>([])

  const handleDateClick = (arg: { dateStr: string }) => {
    const title = prompt('오늘은 무엇을 하실건가요~~?')
    if (title) {
      const event = { title, date: arg.dateStr }
      setNewEvent([...newEvent, event])
    }
  }

  return (
    <S.CalendarBacgkround>
      <Menu />
      <S.CalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="kr"
          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next'
          }}
          events={newEvent}
          dateClick={handleDateClick}
        />
      </S.CalendarWrapper>
      <CalendarMemo event={newEvent} />
    </S.CalendarBacgkround>
  )
}
