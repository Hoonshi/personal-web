import * as S from './InfoBtn.styled'

interface Btn {
  onClick: () => void
}

export default function InfoBtn({ onClick }: Btn) {
  return <S.InfoBtn onClick={onClick}>작성하기</S.InfoBtn>
}
