import React, { useState } from "react";
import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

interface LightboxProps {
  isOpen: boolean;
  handleClose: () => void;
  title?: string;
  category?: string;
  image?: string;
  githubWeb?: string;
  githubApi?: string;
}

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 3%;
  max-height: 100vh;
  width: 100vw;
  gap: 28px;
  position: relative;
  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 28px;
    font-weight: 500;
    @media (max-width: 400px) {
      font-size: 20px;
      font-weight: 500;
    }
  }
  span {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const IconButton = styled.button`
  background-color: #343434;
  padding: 8px;
  border-radius: 100%;
  font-size: 26px;
  :hover {
    background-color: #414141;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const IconButtonResponsive = styled.button`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    justify-content: end;
    font-size: 26px;
  }
`;

export const GitHubButton = styled(IconButton)`
  background-color: #fff;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #5c2092;
  }
  @media (max-width: 800px) {
    display: flex;
  }
  @media (max-width: 400px) {
    width: 32px;
    height: 32px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const IconContainerResponsive = styled(IconContainer)`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
  }
`;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 8px;
  span {
    font-size: 11px;
    font-weight: 700;
    background: linear-gradient(90deg, #9720ff 0%, #e58fff 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ModalMain = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 32px;
  @media (max-width: 1440px) {
    img {
      width: 1200px;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
`;

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  handleClose,
  title,
  category,
  image,
  githubWeb,
  githubApi,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <ModalContent>
        <IconButtonResponsive aria-label="close" onClick={handleClose}>
          <IoIosClose />
        </IconButtonResponsive>
        <Header>
          <Info>
            <h1>{title}</h1>
            <span>{category}</span>
          </Info>
          {(githubWeb || githubApi) && (
            <IconContainerResponsive>
              <IconContent>
                <a href={githubWeb} target="_blank" rel="noopener noreferrer">
                  <GitHubButton>
                    <FaGithub color="#1f1f1f" size={24} />
                  </GitHubButton>
                </a>
                <span>Web</span>
              </IconContent>
              <IconContent>
                <a href={githubApi} target="_blank" rel="noopener noreferrer">
                  <GitHubButton>
                    <FaGithub color="#1f1f1f" size={24} />
                  </GitHubButton>
                </a>
                <span>Api</span>
              </IconContent>
            </IconContainerResponsive>
          )}
          <IconButton aria-label="close" onClick={handleClose}>
            <IoIosClose />
          </IconButton>
        </Header>
        <ModalMain>
          {isLoading && <ClipLoader color={"#5c2092"} />}
          <img
            src={image}
            alt={title}
            style={{ display: isLoading ? "none" : "block" }}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
          {(githubWeb || githubApi) && (
            <IconContainer>
              <IconContent>
                <a href={githubWeb} target="_blank" rel="noopener noreferrer">
                  <GitHubButton>
                    <FaGithub color="#1f1f1f" size={24} />
                  </GitHubButton>
                </a>
                <span>Web</span>
              </IconContent>
              <IconContent>
                <a href={githubApi} target="_blank" rel="noopener noreferrer">
                  <GitHubButton>
                    <FaGithub color="#1f1f1f" size={24} />
                  </GitHubButton>
                </a>
                <span>Api</span>
              </IconContent>
            </IconContainer>
          )}
        </ModalMain>
      </ModalContent>
    </Modal>
  );
};

export default Lightbox;
