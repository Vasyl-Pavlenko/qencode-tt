import { EyeIcon, EyeOffIcon } from '../../images/index';

export const PasswordInput = ({
  id,
  name,
  label = '',
  register,
  errors,
  errorMessage,
  toggleInputType,
  isButton,
  containerClassName,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="passwordLabel">
          {label}
        </label>
      )}
      <div className={containerClassName}>
        <input
          id={id}
          {...register(name)}
          className="formInput"
          type={isButton ? 'text' : 'password'}
          placeholder="Password"
        />
        <p className="errorMessage">{errors[name]?.message}</p>

        <div onClick={() => toggleInputType(name)} className="eyeButton">
          {isButton ? <EyeOffIcon alt="Hide Password" /> : <EyeIcon alt="Show Password" />}
        </div>
      </div>
    </>
  );
};
