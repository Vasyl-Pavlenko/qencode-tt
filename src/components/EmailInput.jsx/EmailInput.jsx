export const EmailInput = ({ register, errorMessage, placeholder, isFirstLoad = false }) => {
  return (
    <div className="emailInputContainer">
      <input {...register('email')} className="formInput" type="email" placeholder={placeholder} />
      {!isFirstLoad && <p className="errorMessage">{errorMessage}</p>}
    </div>
  );
};
