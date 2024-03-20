import { Container, Separator, Title, Links, NewCompany, LogInForm } from "../components";

export const LoginPage = () => {
  return (
    <Container>
      <Title text={'Log in to your account'} />
      <Links />
      <Separator title={'or'}/>
      <LogInForm />
      <NewCompany />
    </Container>
  );
};

