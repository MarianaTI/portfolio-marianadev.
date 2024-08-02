import React from "react";
import { Container, Info } from "./index.style";

interface CardProps {
  title?: string;
  description?: string;
  category?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  category,
  onClick,
}) => {
  return (
    <Container>
      <img src="/image/Rectangle.png" />
      <h5>{title}</h5>
      <Info>
        <p>{category}</p>
        <li>{description}</li>
      </Info>
    </Container>
  );
};

export default CardComponent;
