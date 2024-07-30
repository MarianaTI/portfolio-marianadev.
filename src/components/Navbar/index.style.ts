import styled from "@emotion/styled";

export const StyledLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 2px 12px;
  border-radius: 25px;
  transition: background 0.9s ease-in-out, color 0.9s ease-in-out;
  :hover{
    background: linear-gradient(90deg, #5B0888 0%, #A555EC 69%);
    color: var(--neutral);
  }
`;
