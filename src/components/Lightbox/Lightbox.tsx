import React from "react";
import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import { IoIosClose } from "react-icons/io";

interface LightboxProps {
  isOpen: boolean;
  handleClose: () => void;
  title?: string;
  category?: string;
  image?: string;
}

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 10%;
  max-height: 100vh;
  width: 100vw;
  gap: 28px;
  position: relative;
  overflow: auto;
  @media (max-width: 800px) {
    padding: 40px 5%;
  }
  @media (max-width: 400px) {
    padding: 15px 2%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 28px;
    font-weight: 500;
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
`;

export const ModalMain = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
  }
`;

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  handleClose,
  title,
  category,
  image,
}) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <ModalContent>
        <Header>
          <Info>
            <h1>{title}</h1>
            <span>{category}</span>
          </Info>
          <IconButton aria-label="close" onClick={handleClose}>
            <IoIosClose />
          </IconButton>
        </Header>
        <ModalMain>
          <img src={image} alt={title} />
        </ModalMain>
      </ModalContent>
    </Modal>
  );
};

export default Lightbox;
