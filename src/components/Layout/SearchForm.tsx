import { Controller, useForm } from 'react-hook-form';

import { RiSearchLine } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';

import { SearchInput } from '../ui/inputs/SearchInput';

const defaultValues = {
  text: '',
};

export const SearchForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<typeof defaultValues>({
    defaultValues,
    mode: 'onSubmit',
  });

  const onSubmitFilter = (value: typeof defaultValues) => {
    console.log('value: ', value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFilter)} className="relative">
      <Controller
        name="text"
        control={control}
        render={({ field }) => (
          <SearchInput {...field} errorMessage={errors.text?.message} />
        )}
      />
      <button
        type="submit"
        disabled={!isDirty}
        className="absolute top-[50%] left-[16px] translate-y-[-50%] cursor-pointer text-[#989898] transition-colors duration-300 hover:text-[#777676] focus:text-[#777676]"
      >
        <RiSearchLine className="h-[24px] w-[24px]" />
      </button>
      {isDirty && (
        <button
          type="button"
          onClick={() => reset()}
          className="absolute top-[50%] right-[16px] translate-y-[-50%] cursor-pointer text-[#989898] transition-colors duration-300 hover:text-[#777676] focus:text-[#777676]"
        >
          <FiX className="h-[24px] w-[24px] border-l-[1px] border-l-[#989898] pl-[7px]" />
        </button>
      )}
    </form>
  );
};
