import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .formInput {
    width: 320px;
    padding: 12px;
    border: 1px solid var(--primary-grey-color);
    border-radius: 6px;
    margin-bottom: 10px;
  }

  .emailInputContainer {
    margin-bottom: 25px;
  }

  .passwordInputContainer {
    position: relative;
    margin-bottom: 15px;
  }

  .eyeButton {
    position: absolute;
    top: 12px;
    right: 15px;
    color: var(--eye-icon-color);
    cursor: pointer;
    transition: all var(--transition-duration) var(--transition-timing-function);
  }

  .eyeButton:hover,
  .eyeButton:focus {
    transform: scale(var(--default-scale));
  }

  .errorMessage {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: var(--error-color);
  }

  .cancelButton {
    width: 100%;
    max-width: 400px;
    padding: 12px 0;
    color: var(--black-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    text-align: center;
    border-radius: 8px;
    background: transparent;
    border: 1px solid var(--primary-grey-color);
    margin-bottom: 20px;
    transition: all var(--transition-duration) var(--transition-timing-function);
  }

  .cancelButton:hover,
  .cancelButton:focus {
    transform: scale(var(--default-scale));
  }

  .newPasswordInputContainer {
    position: relative;
    margin-bottom: 25px;
  }

  .newPasswordInputContainer:last-of-type {
    margin-bottom: 30px;
  }

  .passwordLabel {
    font-size: 15px;
    font-weight: 500;
    line-height: 21px;
    text-align: left;
    margin-bottom: 8px;
    color: var(--secondary-black-color);
  }

  @media screen and (min-width: 400px) {
    .formInput {
      width: 400px;
    }

    .cancelButton {
      width: 400px;
    }
  }
`;
