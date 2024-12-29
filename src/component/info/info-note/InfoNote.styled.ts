import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 250px;
  width: 300px;
  margin: 20px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 16px;
  color: #333;
`

export const CardContent = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0 16px 16px;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`
