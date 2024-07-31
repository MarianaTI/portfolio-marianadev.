import React from "react";
import { Container, IconContainer } from "./index.style";
import { FaPalette } from "react-icons/fa";

interface CharacteristicProps {
  label?: string;
  description?: string;
}

const CharacteristicComponent: React.FC<CharacteristicProps> = ({
  label,
  description,
}) => {
  return (
    <Container>
      <IconContainer>
        <FaPalette size={25} color="#a555ec" />
      </IconContainer>
      <h1>{label}</h1>
      <p>{description}</p>
    </Container>
  );
};

export default CharacteristicComponent;
