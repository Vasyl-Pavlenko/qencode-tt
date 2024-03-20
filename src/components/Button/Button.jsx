import { StyledButton } from "./Styles";

export const Button = ({ title, type }) => {
  return <StyledButton type={type}>{title}</StyledButton>;
};
