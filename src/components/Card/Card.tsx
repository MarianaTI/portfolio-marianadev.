  import React from "react";
  import { Container, Info } from "./index.style";

  interface CardProps {
    title?: string;
    description?: string;
    category?: string;
    coverImage?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  }

  const CardComponent: React.FC<CardProps> = ({
    title,
    description,
    category,
    onClick,
    coverImage,
  }) => {
    return (
      <Container onClick={onClick}>
        <img src={coverImage} />
        <h5>{title}</h5>
        <Info>
          <p>{category}</p>
          <li>{description}</li>
        </Info>
      </Container>
    );
  };

  export default CardComponent;
