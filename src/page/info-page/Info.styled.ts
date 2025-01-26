import styled from 'styled-components'

export const InfoBacgkround = styled.div`
  background-image: url(./public/bg1234.jpg);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
`

export const InfoContainer = styled.div`
  width: 100%;
  margin: 16px;
  box-sizing: border-box;
`

export const InfoHeader = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  width: 30%;
  margin: 0 auto;
  padding-top: 18px;
  margin-bottom: 24px;
`

export const HeaderContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
`
export const NoteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
