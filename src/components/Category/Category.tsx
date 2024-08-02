import React from "react";
import { ButtonStyled } from "./index.style";

interface CategoryProps {
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  active?: boolean;
}

const CategoryComponent: React.FC<CategoryProps> = ({
  name,
  onClick,
  type = "button",
  active = false,
}) => {
  return (
    <ButtonStyled onClick={onClick} type={type} active={active}>
      {name}
    </ButtonStyled>
  );
};

export default CategoryComponent;
