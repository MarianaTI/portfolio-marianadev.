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

export const Circle2 = styled.div`
  background: #e5cff7;
  height: 250px;
  width: 250px;
  border-radius: 100%;
`;

//

export const ToolsContainer = styled.aside`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

export const GridAboutMe = styled(Grid)`
  height: 850px;
`;

export const InfoContentAboutMe = styled(InfoContent)`
  text-align: right;
  width: 630px;
  h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 800;
    background: linear-gradient(90deg, #a555ec 20%, #f3ccff 90%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 64px 0 164px 0;
  h2 {
    margin: 0;
    font-size: 48px;
    font-weight: 800;
    background: linear-gradient(90deg, #a555ec 0%, #f3ccff 15%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 56px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  @media (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 320px) {
    justify-content: center;
    margin-top: 32px;
    grid-template-columns: 1fr;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin: 16% 0;
`;

export const ArticleTitle = styled.div`
  width: 90%;
  h3 {
    margin: 0;
    font-size: 40px;
    font-weight: 700;
  }
  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CharacteristicContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 140px;
`;

export const PhraseContent = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18% 0;
  span {
    width: 90%;
    font-size: 38px;
    font-weight: 600;
    color: rgba(251, 236, 255, 1);
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  margin-bottom: 40px;
`;

export const Line = styled.hr`
  border: 0;
  width: 80%;
  height: 0.1rem;
  background-image: linear-gradient(
    to right,
    transparent,
    #a555ec,
    transparent
  );
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

export const ContactMe = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  h1 {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
  }
  p {
    margin-bottom: 24px;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const SocialMediasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 32px;
  a {
    :hover {
      box-shadow: 0 4px 15px rgba(90, 90, 90, 0.5);
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  span:first-child {
    font-size: 22px;
    font-weight: 600;
  }
  span:last-child {
    font-size: 12px;
    font-weight: 400;
  }
`;
