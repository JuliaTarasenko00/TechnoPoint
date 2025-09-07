import { useForm } from 'react-hook-form';

type TProductsColors = {
  brandColors: Record<string, string>;
  productColor: Record<string, string>;
};

type FormValues = {
  color: string;
};

export const ProductColorRadio = ({
  brandColors,
  productColor,
}: TProductsColors) => {
  const colors = Object.values(brandColors);
  const activeColor = Object.values(productColor).join(' ') || '';

  const { watch, register } = useForm<FormValues>({
    defaultValues: { color: activeColor },
    mode: 'onChange',
  });

  const selectedColor = watch('color');

  return (
    <div className="mt-4 flex items-center gap-6">
      <p className="text-lg font-normal text-[#0c0c0c]">Select color:</p>
      <form className="flex items-center gap-1.5">
        {colors.map((col) => {
          const isSelected = selectedColor === col;
          return (
            <label
              key={col}
              style={{ backgroundColor: col }}
              className={`relative z-10 h-[38px] w-[38px] cursor-pointer rounded-full transition-all duration-400 hover:scale-107 ${
                isSelected
                  ? 'scale-107 shadow-[0_0_5px_-2px] shadow-black/50'
                  : ''
              }`}
            >
              <input
                type="radio"
                value={col}
                {...register('color', { required: true })}
                className="hidden"
              />
            </label>
          );
        })}
      </form>
    </div>
  );
};
