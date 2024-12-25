import styled from 'styled-components'

export const InfoHeaderContainer = styled.div`
  width: 20%;
`

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: #f4f4f4;
  transition: background-color 0.3s ease;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: #f4f4f4;
  transition: background-color 0.3s ease;
`

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #666;
  transition: color 0.3s ease;
  border-radius: 20px;
  background-color: #f4f4f4;

  &:hover {
    color: #007bff; /* 돋보기 아이콘에 hover 효과 */
  }
`
