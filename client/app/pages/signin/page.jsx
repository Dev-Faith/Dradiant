"use client";
import { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
import { loginUser } from "../../../stateSlices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useRouter } from "next/navigation";
import Link from "next/link";
import  useAuth  from "../../UseAuth";

const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [see, setSee] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();
  const { error, loading, user, isAuthenticated, role} = useSelector(
    (state) => state.auth
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)
  );
  !loading && setFormData({ email: "", password: "" });
  !loading && isAuthenticated && router.back();
  console.log(isAuthenticated);
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
  //     // if (role === "admin") {
  //     //    router.push("/pages/admin");
  //     // } else {
  //     //   isAuthenticated && router.push("/pages/cart");
  //     // }
  //     isAuthenticated && role==="user"&& router.push("/pages/cart");
  //     role == "admin" && router.push("/pages/admin");

  //   !loading && setFormData({ email: "", password: "" });
  // }, []);

  useEffect(() => {
   isAuthenticated && router.back();
  }, [isAuthenticated])
  

  return (
    <div className=" px-[16px] xl:px-[125px] pt-[64px] flex flex-col items-center gap-[36px]">
      <div className="welcome flex flex-col gap-[16px] justify-center">
        <p className=" text-[18px] xl:text-[24px] text-center">
          Welcome back to
        </p>
        <p className="text-[18px] xl:text-[24px] logo text-center">
          DRADIANTBAGS
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full h-auto xl:w-[657px] xl:h-[550px] rounded-[10px] xl:rounded-[30px] bg-[#E8E2D4] px-[13px] py-[16px] xl:px-[135px] xl:py-[64px] gap-[30px] items-center"
      >
        <p className="signin text-[16px] font-bold xl:text-[32px] self-start">
          Sign In:
        </p>
        <div className="email self-start flex flex-col gap-[10px] w-full">
          <label htmlFor="" className="self-start">
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
        <div className="password relative self-start flex flex-col gap-[10px] w-full">
          <label htmlFor="" className="self-start">
            Password
          </label>
          <input
            value={formData.password}
            onChange={onChangeHandler}
            type={see ? "text" : "password"}
            className="self-start bg-[#E8E2D4] border-[1px] border-[#6A5F11] px-[16px] py-[8px] w-full rounded-[8px] outline-none"
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
          className="self-start bg-[#6A5F11] text-[16px] text-[#fff] p-[16px] rounded-[8px] w-full flex justify-center"
        >
          {loading ? (
            <FallingLines
              color="#fff"
              width="33"
              visible={true}
              className="hidden"
            />
          ) : (
            "sign In"
          )}
        </button>
        <div className="signup flex items-center gap-[8px]">
          <p className="text-[16px]">Got no account?</p>
          <Link href="./signup">
            {" "}
            <p className="text-[#426651] underline text-[16px]">Sign up</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
