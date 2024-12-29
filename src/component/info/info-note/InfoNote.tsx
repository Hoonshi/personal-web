import * as S from './InfoNote.styled'
import { useStore } from '@/store/useStore'

const PostCard = () => {
  const { info } = useStore()

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
