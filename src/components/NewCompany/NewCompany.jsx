import { RedirectLink } from '../RedirectLink';
import { StyledCompany } from './Styles';

export const NewCompany = () => {
  return (
    <StyledCompany>
      <p className="questionText">Is your company new to Qencode?</p>
      <RedirectLink title={'Sign up'} />
    </StyledCompany>
  );
};
