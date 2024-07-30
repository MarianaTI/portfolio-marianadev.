import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 16px 100px;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 750px;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoContent = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  span {
    font-size: 24px;
    font-weight: 600;
  }
  h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 800;
    background: linear-gradient(90deg, #a555ec 0%, #f3ccff 69%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

//delete
export const Circle = styled.div`
  background: #e5cff7;
  height: 400px;
  width: 400px;
  border-radius: 100%;
`;

export const ToolsContainer = styled.aside`
    width: 100%;    
    height: 60px;
    display: flex;
    justify-content: space-between;
`;