import * as S from './InfoNote.styled'
import { useInfoStore } from '@/store/useInfoStore'

const PostCard = () => {
  const { info } = useInfoStore()

  return (
    <>
      {info.map((cur, index) => (
        <S.CardContainer key={index}>
          <S.CardTitle>{cur.title}</S.CardTitle>
          <S.CardContent>{cur.content}</S.CardContent>
        </S.CardContainer>
      ))}
    </>
  )
}

export default PostCard
