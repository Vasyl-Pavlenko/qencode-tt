import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/authThunk';
import { logInSchema } from '../../helpers/schemas';
import { StyledForm } from './Styles';
import { RedirectLink, Button, EmailInput, PasswordInput } from '../index';

export const LogInForm = () => {
  const [isButtonActive, setIsButtonActive] = React.useState(false);
  const [isFirstLoad, setIsFirstLoad] = React.useState(true);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const watchEmail = watch('email');

  const { email, password } = errors;

  const toggleInputType = React.useCallback(() => {
    setIsButtonActive((prev) => !prev);
  }, []);

  const onSubmit = (data) => {
    dispatch(loginThunk(data));
  };

  React.useEffect(() => {
    if (!isFirstLoad && watchEmail) {
      trigger('email');
    } else {
      setIsFirstLoad(false);
    }
  }, [watchEmail, trigger, isFirstLoad]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <EmailInput
        register={register}
        errorMessage={errors.email?.message}
        placeholder="Work email"
        isFirstLoad={isFirstLoad}
      />

      {watchEmail && !email && (
        <>
          <PasswordInput
            id="password"
            name="password"
            register={register}
            errors={errors}
            errorMessage={errors.password?.message}
            toggleInputType={toggleInputType}
            isButton={isButtonActive}
            containerClassName="passwordInputContainer"
          />

          <RedirectLink title={'Forgot your password?'} redirect={'/resetPassword'} />
        </>
      )}

      <Button title={'Log in to Qencode'} type={'submit'} aria-label="Log in" />
    </StyledForm>
  );
};
