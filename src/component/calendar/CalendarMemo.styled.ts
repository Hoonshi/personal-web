import styled from 'styled-components'

interface TextProps {
  fontWeight?: number
}

export const MemoContainer = styled.div`
  height: 94vh;
  width: 20%;
  margin-top: 24px;
  background-color: white;
  border-radius: 15px;
`
//
export const MainDiv = styled.div`
  height: 20%;
  width: 90%;
  margin: 12px auto 12px auto;
`
export const Content = styled.div<TextProps>`
  text-align: center;
  font-weight: ${props => props.fontWeight || 0};
  margin-top: 24px;
`
export const DailyDiv = styled.div`
  height: 70%;
  width: 90%;
  margin: 12px auto 12px auto;
`
