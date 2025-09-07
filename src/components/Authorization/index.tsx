import { useState } from 'react';

import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';

export const Authorization = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(true);

  const handleChangeContent = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <>
      {hasAccount ? (
        <>
          <SignIn />
          <p className="my-[24px] text-center text-[#858383]">or</p>
          <button
            type="button"
            onClick={handleChangeContent}
            className="m-auto block w-max cursor-pointer text-[16px] text-[#3b6d9a] transition-colors duration-500 hover:text-[var(--dark-purple)]"
          >
            Register
          </button>
        </>
      ) : (
        <>
          <SignUp />
          <p className="my-[24px] text-center text-[#858383]">or</p>

          <button
            type="button"
            onClick={handleChangeContent}
            className="m-auto block w-max cursor-pointer text-[16px] text-[#3b6d9a] transition-colors duration-500 hover:text-[var(--dark-purple)]"
          >
            Login
          </button>
        </>
      )}
    </>
  );
};
