import { Controller, useForm } from "react-hook-form";
import { PhoneInput } from "../../ui/inputs/PhoneInput";
import { TValidatePhone, validatePhone } from "./validatePhone";
import { yupResolver } from "@hookform/resolvers/yup";

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<TValidatePhone>({
    defaultValues: {
      phone: "",
    },
    mode: "onChange",
    resolver: yupResolver(validatePhone),
  });

  const handlePhoneNumber = (value: TValidatePhone) => {
    console.log("value: ", value);
  };

  return (
    <>
      <h2 className=" text-center text-[21px] font-semibold mb-[24px] text-[var(--dark-text)]">
        Login
      </h2>
      <p className="text-[#858383] text-center mb-[24px]">
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
          className=" disabled:opacity-[.4] disabled:cursor-not-allowed cursor-pointer bg-[var(--dark-purple)] w-full p-[10px_13px] rounded-[22px] text-[var(--second-text-color)] text-[14px] mt-[24px]"
        >
          Next
        </button>
      </form>
    </>
  );
};
