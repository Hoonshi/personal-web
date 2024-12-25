import * as S from './InfoForm.styled'
import { FaSearch } from 'react-icons/fa'

export default function InfoHeader() {
  return (
    <S.InfoHeaderContainer>
      <S.SearchForm>
        <S.SearchInput
          type="text"
          placeholder="어떤 내용을 찾고 싶어요?"></S.SearchInput>
        <S.SearchButton type="submit">
          <FaSearch />
        </S.SearchButton>
      </S.SearchForm>
    </S.InfoHeaderContainer>
  )
}
