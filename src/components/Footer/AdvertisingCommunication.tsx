import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '../ui/inputs/TextInput';
import technoInfo from '../../assets/image/techno_info.webp';

export const AdvertisingCommunication = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
  });

  const onSubmitEmail = (value) => {
    console.log('value: ', value.email);
  };

  return (
    <div className="flex flex-col rounded-2xl border-[1px] border-[#ffffffad] p-[20px]">
      <h3 className="text-start text-[14px] font-medium text-[var(--second-text-color)]">
        Subscribe to discounts!
      </h3>
      <p className="mb-[10px] text-start text-[13px] text-[#fff9]">
        Don't worry, we don't spam{' '}
        <span className="text-[14px] text-[var(--second-text-color)]">🥰</span>
      </p>
      <form
        onSubmit={handleSubmit(onSubmitEmail)}
        className="w-max-full mt-[10px] w-[300px]"
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
          className="mt-[8px] h-[48px] w-full cursor-pointer rounded-[8px] bg-[var(--dark-purple)] text-[var(--second-text-color)]"
        >
          Send
        </button>
      </form>
      <img
        src={technoInfo}
        alt=" "
        width={250}
        height={250}
        className="place-self-center object-center"
      />
    </div>
  );
};
