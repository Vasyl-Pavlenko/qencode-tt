import { StyledContainer } from './Styles';
import { Logo } from '../index';

export const Container = ({ children }) => {
  return (
    <StyledContainer>
      <Logo />
      {children}
    </StyledContainer>
  );
};
