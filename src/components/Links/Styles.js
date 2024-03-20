import styled from 'styled-components';

export const StyledLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 30px;

  .socialLink {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 48px;
    padding: 0 20px;
    border: 1px solid var(--primary-grey-color);
    border-radius: 6px;
    cursor: pointer;
    transition: all var(--transition-duration) var(--transition-timing-function);
  }

  .socialLink:hover,
  .socialLink:focus {
    transform: scale(var(--default-scale));
  }

  .socialLink__title {
    color: var(--secondary-black-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding-left: 10px;
  }

  @media screen and (min-width: 400px) {
    .socialLink {
      width: 192px;
    }
  }
`;
