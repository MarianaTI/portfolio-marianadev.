import styled from "@emotion/styled";

export const ButtonStyled = styled.button<{ active: boolean }>`
  cursor: pointer;
  font-size: 14px;
  color: var(--neutral);
  font-weight: 600;
  padding: 4px 16px;
  border-radius: 15px;
  transition: background-color 0.9s ease;
  background-color: ${({ active }) => (active ? '#a555ec' : 'transparent')};  
  :hover {
    background-color: #a555ec;
  }
`;
