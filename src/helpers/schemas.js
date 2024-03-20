import * as yup from 'yup';

const emailErrorMessage = 'Please provide a valid Email address';
const passwordErrorMessage =
  'Oops! Looks like we need to jazz up that password a bit. How about including at least 8 characters, with one uppercase letter, one lowercase letter, one number, and one special character (like @$!%*?&)? And hey, let"s keep it fun with Latin characters only—use letters from the Latin alphabet (A-Z, a-z), numbers, and special characters as specified. Thanks for keeping it secure!';
const passwordConfirmErrorMessage =
  'Passwords do not match. Please make sure your passwords match.';

export const logInSchema = yup.object({
  email: yup
    .string()
    .required(emailErrorMessage)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid Email format'),
  password: yup
    .string()
    .required(passwordErrorMessage)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      passwordErrorMessage,
    ),
});

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .required(emailErrorMessage)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid Email format'),
});

export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .required(passwordErrorMessage)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      passwordErrorMessage,
    ),
  password_confirm: yup
    .string()
    .required(passwordConfirmErrorMessage)
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
