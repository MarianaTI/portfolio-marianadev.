import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;
  width: 300px;
  height: 300px;
  background-color: #292929;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(75, 75, 75, 0.25);
  h1 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
  p {
    width: 200px;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  border: 1.5px solid #a555ec;
`;
