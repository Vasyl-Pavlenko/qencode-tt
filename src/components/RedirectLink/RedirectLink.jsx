import { Link } from "react-router-dom";

import { StyledLink } from "./Styles";

export const RedirectLink = ({ title, redirect }) => {
  return (
    <StyledLink>
      <Link className="redirectLink" to={redirect}>
        {title}
      </Link>
    </StyledLink>
  );
};
