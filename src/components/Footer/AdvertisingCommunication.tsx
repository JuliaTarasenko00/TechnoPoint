import { Controller, useForm } from "react-hook-form";
import { TextInput } from "../ui/inputs/TextInput";
import technoInfo from "../../assets/image/techno_info.webp";

export const AdvertisingCommunication = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
  });

  const onSubmitEmail = (value) => {
    console.log("value: ", value.email);
  };

  return (
    <div className=" flex flex-col border-[1px] border-[#ffffffad] rounded-2xl p-[20px]">
      <h3 className="text-[var(--second-text-color)] text-start font-medium text-[14px]">
        Subscribe to discounts!
      </h3>
      <p className="text-[#fff9] text-start mb-[10px] text-[13px]">
        Don't worry, we don't spam{" "}
        <span className=" text-[var(--second-text-color)] text-[14px]">🥰</span>
      </p>
      <form
        onSubmit={handleSubmit(onSubmitEmail)}
        className="w-[300px] mt-[10px] w-max-full"
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              errorMessage={errors.email?.message}
              {...field}
              placeholder="email@email.com"
            />
          )}
        />
        <button
          type="submit"
          className=" w-full cursor-pointer bg-[var(--dark-purple)] text-[var(--second-text-color)] h-[48px] mt-[8px] rounded-[8px]"
        >
          Send
        </button>
      </form>
      <img
        src={technoInfo}
        alt=" "
        width={250}
        height={250}
        className=" object-center place-self-center"
      />
    </div>
  );
};
