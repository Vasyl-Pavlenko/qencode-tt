import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 12px 0;
  color: var(--white-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  border-radius: 8px;
  background: var(--blue-color);
  border: 1px solid var(--blue-color);
  margin-bottom: 20px;

  transition: all var(--transition-duration) var(--transition-timing-function);

  &:hover,
  &:focus {
    background: var(--hover-color);
    transform: scale(var(--default-scale));
  }
`;
