import * as S from './CalendarMemo.styled'

interface Event {
  title: string
  date: string
}

interface CalendarMemo {
  event: Event[] // event의 타입을 Event[]로 수정
}

export default function CalendarMemo({ event }: CalendarMemo) {
  return (
    <S.MemoContainer>
      <S.MainDiv>
        <S.Content fontWeight={700}>오늘의 메인 일정</S.Content>
        {event.length > 0 ? (
          event.map((cur, idx) => (
            <S.Content key={idx}>
              {idx + 1}. {cur.title}
            </S.Content>
          ))
        ) : (
          <S.Content>일정이 없습니다</S.Content>
        )}
      </S.MainDiv>
      <S.DailyDiv>
        <S.Content fontWeight={700}>오늘의 할 일</S.Content>
        <S.Content>공부하기</S.Content>
      </S.DailyDiv>
    </S.MemoContainer>
  )
}
