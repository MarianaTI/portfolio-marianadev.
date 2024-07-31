import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: auto;
  gap: 8px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.5s ease, transform 0.5s ease;
  h5 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
  :hover {
    background: linear-gradient(-180deg, #48046c 0%, #5c2092 79%, #6d428a 100%);
    border-radius: 20px;
    transform: translateY(-5px);
  }
`;
