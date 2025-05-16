import { Controller, useForm } from "react-hook-form";
import { registerSchema, TRegisterSchema } from "./validateRegisterValue";
import { yupResolver } from "@hookform/resolvers/yup";
import { PhoneInput } from "../../ui/inputs/PhoneInput";
import { EmailInput } from "../../ui/inputs/EmailInput";
import { UserNameInput } from "../../ui/inputs/UserNameInput";

const defaultValues: TRegisterSchema = {
  name: "",
  phone: "",
  email: "",
};

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<TRegisterSchema>({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (value: TRegisterSchema) => {
    console.log("value: ", value);
  };

  return (
    <>
      <h2 className=" text-center text-[21px] font-semibold mb-[24px] text-[var(--dark-text)]">
        Register
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[312px] flex flex-col gap-[10px]"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <UserNameInput
              {...field}
              reset={resetField}
              errorMessage={errors.name?.message}
              placeholder="Name"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <EmailInput
              {...field}
              reset={resetField}
              errorMessage={errors.email?.message}
              placeholder="email@gmail.com"
            />
          )}
        />
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
