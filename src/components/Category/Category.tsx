import React from "react";
import { ButtonStyled } from "./index.style";

interface CategoryProps {
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const CategoryComponent: React.FC<CategoryProps> = ({
  name,
  onClick,
  type = "button",
}) => {
  return (
    <ButtonStyled onClick={onClick} type={type}>
      {name}
    </ButtonStyled>
  );
};

export default CategoryComponent;
