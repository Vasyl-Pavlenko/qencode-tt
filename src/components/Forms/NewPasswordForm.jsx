import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, verifyAccessToken } from '../../redux/authThunk';
import { resetPasswordSchema } from '../../helpers/schemas';
import { Button, PasswordInput } from '../index';
import { Notify } from 'notiflix';
import { StyledForm } from './Styles';

export const NewPasswordForm = () => {
  const [isButtonPassword, setIsButtonPassword] = React.useState(false);
  const [isButtonConfirmPassword, setIsButtonConfirmPassword] = React.useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  const isTokenValid = useSelector((state) => state.auth.tokenValid);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const toggleInputType = (inputName) => {
    if (inputName === 'password') {
      setIsButtonPassword(!isButtonPassword);
    } else if (inputName === 'password_confirm') {
      setIsButtonConfirmPassword(!isButtonConfirmPassword);
    }
  };

  const onSubmit = async (data) => {
    if (data.password === data.password_confirm) {
      if (isTokenValid) {
        try {
          await dispatch(resetPassword(data));
          Notify.success(
            'You have successfully changed your password, now you can try to log in again!',
          );
          history('/login');
        } catch (error) {
          Notify.failure('Failed to reset password. Please try again later.');
          if (error.message === 'Passwords do not match') {
            Notify.failure('Please check if the passwords match!');
          }
        }
      } else {
        Notify.failure('Access token is invalid. Please log in again.');
        history('/login');
      }
    } else {
      Notify.failure('Please check if the passwords match!');
    }
  };

  React.useEffect(() => {
    dispatch(verifyAccessToken());
  }, [dispatch]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <PasswordInput
        id="password"
        name="password"
        label="Password"
        register={register}
        errors={errors}
        toggleInputType={toggleInputType}
        isButton={isButtonPassword}
        containerClassName="newPasswordInputContainer"
      />

      <PasswordInput
        id="password_confirm"
        name="password_confirm"
        label="Confirm Password"
        register={register}
        errors={errors}
        toggleInputType={toggleInputType}
        isButton={isButtonConfirmPassword}
        containerClassName="newPasswordInputContainer"
      />

      <Button title="Reset Password" type="submit" disabled={Object.keys(errors).length > 0} />
    </StyledForm>
  );
};
