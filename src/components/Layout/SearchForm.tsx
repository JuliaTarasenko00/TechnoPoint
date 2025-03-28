import { Controller, useForm } from "react-hook-form";
import { TextInput } from "../ui/inputs/TextInput";
import { RiSearchLine } from "react-icons/ri";
import { FiX } from "react-icons/fi";

const defaultValues = {
  text: "",
};

export const SearchForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<typeof defaultValues>({
    defaultValues,
    mode: "onSubmit",
  });

  const onSubmitFilter = (value: typeof defaultValues) => {
    console.log("value: ", value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFilter)} className=" relative">
      <Controller
        name="text"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            errorMessage={errors.text?.message}
            placeholder="Search"
          />
        )}
      />
      <button
        type="submit"
        disabled={!isDirty}
        className=" absolute text-[#989898] top-[50%] hover:text-[#777676] transition-colors duration-300 cursor-pointer left-[16px] translate-y-[-50%] "
      >
        <RiSearchLine />
      </button>
      {isDirty && (
        <button
          type="button"
          onClick={() => reset()}
          className=" absolute text-[#989898] top-[50%] hover:text-[#777676] transition-colors duration-300 cursor-pointer right-[16px] translate-y-[-50%] "
        >
          <FiX />
        </button>
      )}
    </form>
  );
};
