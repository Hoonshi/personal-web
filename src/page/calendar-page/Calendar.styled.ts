import styled from 'styled-components'

export const CalendarBacgkround = styled.div`
  display: flex;
  gap: 42px;
  background-image: url(./public/bg1234.jpg);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
`

export const CalendarWrapper = styled.div`
  width: 60%;
  margin-left: 24px;

  .fc {
    background-color: none;
    overflow: hidden;
    padding: 24px;
  }

  .fc-view {
    background-color: none;
    border-radius: 15px;
  }

  .fc-daygrid {
    background-color: white;
    cursor: pointer;
  }
`
