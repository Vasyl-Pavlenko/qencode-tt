import styled from 'styled-components';

export const StyledLink = styled.p`
  margin-bottom: 30px;
  text-align: right;

  .redirectLink {
    color: var(--blue-color);
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    transition: all var(--transition-duration) var(--transition-timing-function););
  }

  .redirectLink:hover,
  .redirectLink:focus {
    color: var(--hover-color);
  }
`;
