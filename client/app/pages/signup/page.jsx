const page = () => {
  return (
    <div className="px-[125px] pt-[64px] flex flex-col items-center gap-[73px]">
      <div className="welcome flex flex-col gap-[16px] justify-center">
        <p className="text-[36px] text-center">Welcome back to</p>
        <p className="text-[36px] logo text-center">DRADIANTBAGS</p>
      </div>
      <form className="flex flex-col w-[657px] h-[610px] rounded-[30px] bg-[#E8E2D4] px-[135px] py-[64px] gap-[30px] items-center">
        <p className="signin text-[32px] self-start">Sign Up:</p>
        <div className="email self-start flex flex-col gap-[10px] w-full">
          <label htmlFor="" className="self-start">
            Email
          </label>
          <input
            type="email"
            className="self-start bg-[#E8E2D4] border-[1px] border-[#6A5F11] px-[16px] py-[8px] w-full rounded-[8px] outline-none"
            placeholder="e.g Olubimo@gmail.com"
          />
        </div>
        <div className="password self-start flex flex-col gap-[10px] w-full">
          <label htmlFor="" className="self-start">
            password
          </label>
          <input
            type="password"
            className="self-start bg-[#E8E2D4] border-[1px] border-[#6A5F11] px-[16px] py-[8px] w-full rounded-[8px] outline-none"
            placeholder="***"
          />
        </div>
        <button
          type="submit"
          className="self-start bg-[#6A5F11] text-[16px] text-[#fff] p-[16px] rounded-[8px] w-full"
        >
          Sign Up
        </button>
        <div className="signup flex items-center gap-[8px]">
          <p className="text-[16px]">Got an account already?</p>
          <p className="text-[#426651] underline text-[16px]">Sign In</p>
        </div>
      </form>
    </div>
  );
};

export default page;
