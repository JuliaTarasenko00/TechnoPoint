import { Controller, useForm } from 'react-hook-form';
import { PhoneInput } from '../../ui/inputs/PhoneInput';
import { TValidatePhone, validatePhone } from './validatePhone';
import { yupResolver } from '@hookform/resolvers/yup';

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<TValidatePhone>({
    defaultValues: {
      phone: '',
    },
    mode: 'onChange',
    resolver: yupResolver(validatePhone),
  });

  const handlePhoneNumber = (value: TValidatePhone) => {
    console.log('value: ', value);
  };

  return (
    <>
      <h2 className="mb-[24px] text-center text-[21px] font-semibold text-[var(--dark-text)]">
        Login
      </h2>
      <p className="mb-[24px] text-center text-[#858383]">
        Enter your phone number to sign in
      </p>
      <form onSubmit={handleSubmit(handlePhoneNumber)} className="w-[312px]">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              reset={resetField}
              errorMessage={errors.phone?.message}
              placeholder="+380"
            />
          )}
        />
        <button
          disabled={!isValid}
          type="submit"
          className="mt-[24px] w-full cursor-pointer rounded-[22px] bg-[var(--dark-purple)] p-[10px_13px] text-[14px] text-[var(--second-text-color)] disabled:cursor-not-allowed disabled:opacity-[.4]"
        >
          Next
        </button>
      </form>
    </>
  );
};
