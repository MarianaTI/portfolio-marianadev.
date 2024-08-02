import React from "react";
import { Container } from "./index.style";

interface CardProps {
  title?: string;
  description?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <Container>
      <img src="/image/Rectangle.png" />
      <h5>{title}</h5>
      <p>{description}</p>
    </Container>
  );
};

export default CardComponent;
