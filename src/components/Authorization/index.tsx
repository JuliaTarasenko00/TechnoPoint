import { useState } from "react";

import { SignIn } from "./SignIn/SignIn";
import { SignUp } from "./SignUp/SignUp";

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
          <p className="text-[#858383] text-center my-[24px]">or</p>
          <button
            type="button"
            onClick={handleChangeContent}
            className=" text-[#3b6d9a] cursor-pointer text-[16px] hover:text-[var(--dark-purple)] transition-colors duration-500 w-max m-auto block"
          >
            Register
          </button>
        </>
      ) : (
        <>
          <SignUp />
          <p className="text-[#858383] text-center my-[24px]">or</p>

          <button
            type="button"
            onClick={handleChangeContent}
            className=" text-[#3b6d9a] cursor-pointer text-[16px] hover:text-[var(--dark-purple)] transition-colors duration-500 w-max m-auto block"
          >
            Login
          </button>
        </>
      )}
    </>
  );
};
