import React from "react";
import { Container, IconContainer } from "./index.style";
import { FaPalette } from "react-icons/fa";
import { IconType } from "react-icons";

interface CharacteristicProps {
  label?: string;
  description?: string;
  icon: IconType;
}

const CharacteristicComponent: React.FC<CharacteristicProps> = ({
  label,
  description,
  icon: Icon
}) => {
  return (
    <Container>
      <IconContainer>
        <Icon size={25} color="#a555ec" />
      </IconContainer>
      <h1>{label}</h1>
      <p>{description}</p>
    </Container>
  );
};

export default CharacteristicComponent;
