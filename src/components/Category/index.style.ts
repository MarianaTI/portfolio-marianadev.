import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  cursor: pointer;
  font-size: 14px;
  color: var(--neutral);
  font-weight: 600;
  padding: 4px 16px;
  border-radius: 15px;
  transition: background-color 0.9s ease;
  :hover {
    background-color: #a555ec;
  }
`;
