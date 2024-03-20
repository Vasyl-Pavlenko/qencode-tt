import styled from 'styled-components';

export const StyledSeparator = styled.p`
  position: relative;
  color: var(--primary-grey-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 30px;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 140px;
    border: 1px solid var(--secondary-grey-color);
  }

  &::before {
    right: 100%;
    margin-right: 10px;
  }

  &::after {
    left: 100%;
    margin-left: 10px;
  }

  &::placeholder {
    color: var(--primary-grey-color);
    font-family: Basis Grotesque Pro;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 400px) {
  &::before,
  &::after {
    width: 180px;
  }
`;
