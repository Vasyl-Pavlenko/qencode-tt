import { Notify } from 'notiflix';
import { GoogleIcon, GithubIcon } from '../../images';
import { StyledLinks } from './Styles';

export const Links = () => {
  const handleLinkClick = () => {
    Notify.info(
      'We apologize for any inconvenience. This functionality is currently under development and will be available soon. Thank you for your patience!',
    );
  };

  return (
    <StyledLinks>
      <div onClick={handleLinkClick} className="socialLink">
        <GoogleIcon />

        <p className='socialLink__title'>Google</p>
      </div>

      <div onClick={handleLinkClick} className="socialLink">
        <GithubIcon />

        <p className='socialLink__title'>Github</p>
      </div>
    </StyledLinks>
  );
};
