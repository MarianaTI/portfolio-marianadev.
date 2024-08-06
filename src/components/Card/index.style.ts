import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  gap: 8px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.5s ease, transform 0.5s ease;
  img{
    object-fit: cover;
    border-radius: 10px;
  }
  h5 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
  }
  :hover {
    background: linear-gradient(-180deg, #48046c 0%, #5c2092 79%, #6d428a 100%);
    border-radius: 20px;
    transform: translateY(-5px);
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  color: #F3CCFF;
`;
