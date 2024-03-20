import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/authThunk';

import { forgotPasswordSchema } from '../../helpers/schemas';
import { Button, EmailInput } from '../index';
import { Notify } from 'notiflix';
import { StyledForm } from './Styles';

export const ForgotPasswordForm = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const { email } = errors;

  const onSubmit = async (data) => {
    try {
      await dispatch(forgotPassword(data));
      Notify.success('Please check your email for password reset instructions.');
      history('/newPassword');
    } catch (error) {
      Notify.failure('Failed to send reset password email. Please try again later.');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <EmailInput
        register={register}
        errorMessage={email?.message}
        placeholder="Enter your email"
      />

      <Button title={'Send'} type={'submit'} />

      <Link className="cancelButton" to="/login">
        Cancel
      </Link>
    </StyledForm>
  );
};
