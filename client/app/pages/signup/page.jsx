"use client";
import { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../../stateSlices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [see, setSee] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();
  const { loading, error, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signupUser(formData));
    !loading && isAuthenticated && router.back();
  };

  const onChangeHandler = (e) => {
    switch (e.target.type) {
      case "email":
        setFormData({ ...formData, email: e.target.value });
        break;
      case "password":
        setFormData({ ...formData, password: e.target.value });
    }
  };

  // useEffect(() => {
  //   isAuthenticated && router.push("/pages/cart");
  //   !loading && setFormData({ email: "", password: "" });
  // }, [isAuthenticated, loading, user, error]);

  useEffect(() => {
    isAuthenticated && router.back();
   }, [isAuthenticated])

  return (
    <div className=" px-[16px] xl:px-[125px] pt-[64px] flex flex-col items-center gap-[36px]">
      <div className="welcome flex flex-col gap-[16px] justify-center">
        <p className=" text-[18px] xl:text-[24px] text-center">Welcome to</p>
        <p className="text-[18px] xl:text-[24px] logo text-center">
          DRADIANTBAGS
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full h-auto xl:w-[657px] xl:h-[550px] rounded-[10px] xl:rounded-[30px] bg-[#E8E2D4] px-[13px] py-[16px] xl:px-[135px] xl:py-[64px] gap-[30px] items-center"
      >
        <p className="signin font-bold text-[16px] font-bold xl:text-[32px] self-start">
          Sign Up:
        </p>
        <div className="email self-start flex flex-col gap-[10px] w-full">
          <label htmlFor="" className="self-start font-bold">
            Email
          </label>
          <input
            value={formData.email}
            onChange={onChangeHandler}
            type="email"
            className="self-start bg-[#E8E2D4] border-[1px] border-[#6A5F11] px-[16px] py-[8px] w-full rounded-[8px] outline-none"
            placeholder="e.g Olubimo@gmail.com"
          />
        </div>
        <div className="relative password self-start flex flex-col gap-[10px] w-full">
          <label htmlFor="" className="self-start font-bold">
            Password
          </label>
          <input
            value={formData.password}
            onChange={onChangeHandler}
            type={see ? "text" : "password"}
            className=" self-start bg-[#E8E2D4] border-[1px] border-[#6A5F11] px-[16px] py-[8px] w-full rounded-[8px] outline-none"
            placeholder="***"
          />
          <button
            type="button"
            className="absolute bottom-[12px] right-[16px]"
            onClick={() => setSee(!see)}
          >
            {see ? <GoEye /> : <GoEyeClosed />}
          </button>
        </div>
        <button
          type="submit"
          className="self-start bg-[#6A5F11] text-[16px] text-[#fff] p-[16px] rounded-[8px] w-full flex justify-center font-bold"
        >
          {loading ? (
            <FallingLines color="#fff" width="33" visible={true} />
          ) : (
            "sign Up"
          )}
        </button>
        <div className="signup flex items-center gap-[8px]">
          <p className="text-[16px]">Got an account already?</p>
          <Link href="./signin">
            <p className="text-[#426651] underline text-[16px] font-bold">
              Sign In
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
