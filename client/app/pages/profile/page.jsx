"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { profile, defaultProfile } from "../../DradiantImages";
import { RiEditLine } from "react-icons/ri";
import { motion as m, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "@/stateSlices/authSlice";
import { FallingLines } from "react-loader-spinner";
import { authActions } from "@/store";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function splitAtCapital(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2"); // Corrected spacing issue
}

function joinWithCamelCase(str) {
  const camelCased = str.replace(/ (\w)/g, (_, letter) => letter.toUpperCase());
  return camelCased.charAt(0).toLowerCase() + camelCased.slice(1);
}

// Memoize the Modal to avoid unnecessary re-renders
const Modal = React.memo(function Modal({
  type,
  closeModal,
  profileDetails,
  handleInputChange,
  setCloudProfileDetails,
  cloudProfileDetails,
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user?.user || {});
  const { loading, error } = useSelector((state) => state.auth);
  const router = useRouter();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImage, setpreviewImage] = useState([]);

  const [image, setImage] = useState(null);
  const [fileArray, setFileArray] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [filea, setFiles] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileUpload = (files) => {
    setImage(files[0]);
    setFiles(files);
    setFileArray(
      Array.from(files).map((file) => {
        return { ...file, displayName: file.name };
      })
    );
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // Prepare updated profile data based on modal type
    const updatedProfile = cloudProfileDetails[
      type === "personal" ? "personalInfo" : "addressInfo"
    ].reduce(
      (acc, item) => ({
        ...acc,
        [joinWithCamelCase(item.title)]: item.value,
      }),
      {}
    );

    //Profile Picture Uploads here

    const removeFile = (index) => {
      setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const clearFiles = () => {
      setSelectedFiles([]);
    };

    const submitHandler = async () => {
      setUploading(true);
      setSelectedFiles((prevFiles) => [...prevFiles, ...fileArray]);

      try {
        const data = new FormData();
        data.append("file", image);

        const uploadResponse = await axios.post("/api/upload", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        setImageUrl(uploadResponse.data.url);
        dispatch(
          updateProfile({
            profileImage: uploadResponse.data.url,
            userId: user._id,
            type,
          })
        );
        // const productData = { ...formData, image: imageUrl };

        // setImage(null);
      } catch (error) {
        toast.error(
          "Image upload failed: " + error.response?.data?.details ||
            error.message
        );
      } finally {
        setUploading(false);
        closeModal();
      }
    };

    type == "overview" && submitHandler();

    type !== "overview" &&
      dispatch(updateProfile({ ...updatedProfile, userId: user._id, type }))
        .unwrap()
        .then(() => {
          closeModal();
        })
        .catch((err) => {
          console.error("Failed to update profile", err);
        });
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
    closeModal();
    router.push("/pages/signin");
  };

  useEffect(() => {
    if (user) {
      setCloudProfileDetails({
        personalInfo: [
          { title: "First Name", value: user.firstName || "" },
          { title: "Last Name", value: user.lastName || "" },
          { title: "Email", value: user.email || "" },
          { title: "Bio", value: user.bio || "" },
          { title: "Phone Number", value: user.phoneNumber || "" },
        ],
        addressInfo: [
          { title: "Lodge", value: user.lodge || "" },
          { title: "Campus", value: user.campus || "" },
          { title: "City", value: user.city || "" },
          { title: "State", value: user.state || "" },
          { title: "Country", value: user.country || "" },
        ],
      });
    }

    // console.log(user);
  }, []);

  const modalContent = {
    overview: (
      <form
        onSubmit={handleUpdateProfile}
        className="overview flex flex-col relative gap-[2rem]"
      >
        <div className="image relative flex self-center">
          <Image
            src={imageUrl || user.profileImage || defaultProfile}
            alt="profile image"
            height="416"
            width="277"
            className="xl:w-[416px] w-[261px] h-[174px] xl:h-[277px] rounded-[10px] object-cover self-center cursor-pointer"
          />
          <div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="overlay absolute bg-black bg-opacity-50 xl:w-[416px] w-[241px] h-[174px] xl:h-[277px] rounded-[10px] self-center flex justify-center items-center"
          >
            <input
              type="file"
              id="image"
              className="hidden"
              onChange={(e) => handleFileUpload(e.target.files)}
              accept="image/png"
            />
            <label
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              htmlFor="image"
              className="p-[10px] border-white text-white rounded-[10px] cursor-pointer border-[1px]"
            >
              Choose image from gallery
            </label>
          </div>
        </div>
        <div className="buttons flex gap-[14px] items-center self-end">
          <button
            onClick={closeModal}
            type="button"
            className="delete p-[10px] text-[#6A5F11] bg-[#F9F3E5] border-[1px] w-[70px] border-[#6A5F11] rounded-[10px]"
          >
            Delete
          </button>
          <button
            type="submit"
            className="delete p-[10px] flex  justify-center bg-[#6A5F11] text-[#fff] w-[70px] rounded-[10px]"
          >
            {loading || uploading ? (
              <FallingLines
                color="#fff"
                width="33"
                visible={true}
                className="hidden"
              />
            ) : (
              "Done"
            )}
          </button>
        </div>
      </form>
    ),
    personal: (
      <form onSubmit={handleUpdateProfile} className="flex flex-col gap-[14px]">
        <div className="grid xl:grid-cols-2 grid-cols-1 self-center xl:gap-[30px] gap-[20px] w-full">
          {cloudProfileDetails.personalInfo.map((item, index) => (
            <div key={index} className="formItems flex flex-col gap-[8px]">
              <label className="font-bold">{splitAtCapital(item.title)}:</label>
              <input
                onChange={(e) => handleInputChange("personalInfo", index, e)}
                className="bg-[#F9F3E5] px-[10px] py-[15px] border-[1px] border-[#6A5F11] rounded-[10px]"
                type="text"
                value={item.value}
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="delete p-[10px] flex  justify-center bg-[#6A5F11] text-[#fff] w-[70px] rounded-[10px] self-end"
        >
          {loading ? (
            <FallingLines
              color="#fff"
              width="33"
              visible={true}
              className="hidden"
            />
          ) : (
            "Done"
          )}
        </button>
      </form>
    ),
    address: (
      <form onSubmit={handleUpdateProfile} className="flex flex-col gap-[14px]">
        <div className="grid xl:grid-cols-2 grid-cols-1 self-center gap-[30px] w-full">
          {cloudProfileDetails.addressInfo.map((item, index) => (
            <div key={index} className="formItems flex flex-col gap-[8px]">
              <label className="font-bold">{splitAtCapital(item.title)}:</label>
              <input
                onChange={(e) => handleInputChange("addressInfo", index, e)}
                className="bg-[#F9F3E5] px-[10px] py-[15px] border-[1px] border-[#6A5F11] rounded-[10px]"
                type="text"
                value={item.value}
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="delete p-[10px] flex  justify-center bg-[#6A5F11] text-[#fff] w-[70px] rounded-[10px] self-end"
        >
          {loading ? (
            <FallingLines
              color="#fff"
              width="33"
              visible={true}
              className="hidden"
            />
          ) : (
            "Done"
          )}
        </button>
      </form>
    ),
    delete: (
      <div className="logout flex flex-col items-center xl:gap-[90px] gap-[19px] self-center">
        <div className="texts flex flex-col items-center xl:gap-[40px] w-[405px] text-center">
          <p className="font-bold text-[#6A5F11] xl:text-[48px] text-[32px] xl:w-[405px] w-[202px] ">
            We will miss you! 🥰
          </p>
          <p className="text-[#7B7768] xl:text-[24px] text-[16px] xl:w-[405px] w-[202px]">
            You are about to logout. Are you sure this is what you want ?
          </p>
        </div>
        <div className="buttons flex justify-between xl:w-[405px] w-[202px]">
          <m.button
            onClick={closeModal}
            className="text-[#6A5F11] xl:text-[24px] hover:underline p-[10px]"
          >
            Cancel
          </m.button>
          <m.button
            whileHover={{
              backgroundColor: "#FFF9EB",
              color: "#6A5F11",
              border: "1px solid #6A5F11",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            onClick={logoutHandler}
            className="bg-[#6A5F11] text-white xl:text-[24px] p-[10px] rounded-[10px]"
          >
            Confirm logout
          </m.button>
        </div>
      </div>
    ),
  };

  return (
    <m.div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {type !== "loading" ? (
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="bg-[#F9F3E5] shadow-lg p-6 xl:w-[887px] w-[300px] max-w-full relative p-[30px] py-[40px] xl:p-[45px] rounded-[10px]"
        >
          <IoMdClose
            className="absolute xl:top-[20px] top-[5px] xl:right-[20px] right-[10px] size-[30px] text-gray-500 hover:text-gray-800 cursor-pointer"
            onClick={closeModal}
          />
          <div>{modalContent[type]}</div>
        </m.div>
      ) : (
        <FallingLines
          color="#fff"
          width="33"
          visible={true}
          className="hidden"
        />
      )}
    </m.div>
  );
});

const Page = React.memo(function Page() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user?.user || {});
  // console.log(user);

  const { loading, error, role, userId } = useSelector((state) => state.auth);
  const router = useRouter();

  const [clicked, setClicked] = useState({
    overview: false,
    personal: false,
    address: false,
    delete: false,
  });
  const profileDetails = {
    personalInfo: [
      { title: "First Name", value: user.firstName || "" },
      { title: "Last Name", value: user.lastName || "" },
      { title: "Email", value: user.email || "" },
      { title: "Bio", value: user.bio || "" },
      { title: "Phone Number", value: user.phoneNumber || "" },
    ],
    addressInfo: [
      { title: "Lodge", value: user.lodge || "" },
      { title: "Campus", value: user.campus || "" },
      { title: "City", value: user.city || "" },
      { title: "State", value: user.state || "" },
      { title: "Country", value: user.country || "" },
    ],
  };

  const [cloudProfileDetails, setCloudProfileDetails] = useState({
    personalInfo: [
      { title: "First Name", value: user.firstName || "" },
      { title: "Last Name", value: user.lastName || "" },
      { title: "Email", value: user.email || "" },
      { title: "Bio", value: user.bio || "" },
      { title: "Phone Number", value: user.phoneNumber || "" },
    ],
    addressInfo: [
      { title: "Lodge", value: user.lodge || "" },
      { title: "Campus", value: user.campus || "" },
      { title: "City", value: user.city || "" },
      { title: "State", value: user.state || "" },
      { title: "Country", value: user.country || "" },
    ],
  });

  useEffect(() => {
    if (user) {
      setCloudProfileDetails({
        personalInfo: [
          { title: "First Name", value: user.firstName || "" },
          { title: "Last Name", value: user.lastName || "" },
          { title: "Email", value: user.email || "" },
          { title: "Bio", value: user.bio || "" },
          { title: "Phone Number", value: user.phoneNumber || "" },
        ],
        addressInfo: [
          { title: "Lodge", value: user.lodge || "" },
          { title: "Campus", value: user.campus || "" },
          { title: "City", value: user.city || "" },
          { title: "State", value: user.state || "" },
          { title: "Country", value: user.country || "" },
        ],
      });
    }

    if (!loading && !userId) {
      router.push("/pages/signin");
    }
  }, []);

  const handleInputChange = (type, index, e) => {
    setCloudProfileDetails((prev) => ({
      ...prev,
      [type]: prev[type].map((item, i) =>
        i === index ? { ...item, value: e.target.value } : item
      ),
    }));
  };

  const closeModal = () =>
    setClicked({
      ...clicked,
      overview: false,
      personal: false,
      address: false,
      delete: false,
    });

  return (
    <div className="xl:px-[123px] px-[13px] py-[32px] xl:py-[64px] flex flex-col gap-[35px]">
      <p className="title text-[36px] font-bold">My Profile</p>
      <div className="preview flex items-start w-full justify-between p-[10px] xl:p-[40px] border-[1px] border-[#7B7768] rounded-[10px]">
        <div className="image&text flex gap-[28px] items-center">
          <Image
            src={user.profileImage || defaultProfile}
            alt="profile image"
            height="88"
            width="88"
            className=" size-[88px] rounded-full object-cover"
          />
          <div className="texts">
            <p className="name font-bold">{` ${
              user.firstName !== undefined ? user.firstName : "New"
            } ${user.lastName !== undefined ? user.lastName : "Customer"}`}</p>
            <p className="address text-[#7B7768]">{`${
              user.lodge !== undefined ? user.lodge : "Lodge"
            }, ${user?.campus !== undefined ? user?.campus : "Campus"}`}</p>
          </div>
        </div>
        <m.button
          whileHover={{ backgroundColor: "#6A5F11", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onClick={() => setClicked({ ...clicked, overview: true })}
          className="edit flex gap-[10px] items-center w-[80px] p-[10px] border-[1px] border-[#7B7768] rounded-[10px]"
        >
          <RiEditLine />
          <p>Edit</p>
        </m.button>
      </div>

      {/* Personal Information Section */}
      <div className="personal flex items-start w-full justify-between p-[10px] xl:p-[40px] border-[1px] border-[#7B7768] rounded-[10px]">
        <div className="left flex flex-col gap-[32px]">
          <p className="title text-[24px] font-bold">Personal Information</p>
          <div className="details grid grid-cols-2 xl:gap-[32px] gap-[16px] gap-x-[20px] xl:gap-x-[128px]">
            {profileDetails.personalInfo.map((info, index) => (
              <div key={index} className="detail">
                <p className="title text-[#7B7768]">{info.title}</p>
                <p className="value font-bold">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
        <m.button
          whileHover={{ backgroundColor: "#6A5F11", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onClick={() => setClicked({ ...clicked, personal: true })}
          className="edit flex gap-[10px] items-center w-[80px] p-[10px] border-[1px] border-[#7B7768] rounded-[10px]"
        >
          <RiEditLine />
          <p>Edit</p>
        </m.button>
      </div>

      {/* Address Section */}
      <div className="address flex items-start w-full justify-between p-[10px] xl:p-[40px] border-[1px] border-[#7B7768] rounded-[10px]">
        <div className="left flex flex-col gap-[32px]">
          <p className="title text-[24px] font-bold">Address</p>
          <div className="details grid grid-cols-2 gap-[32px] gap-x-[128px]">
            {profileDetails.addressInfo.map((info, index) => (
              <div key={index} className="detail">
                <p className="title text-[#7B7768]">{info.title}</p>
                <p className="value  font-bold">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
        <m.button
          whileHover={{ backgroundColor: "#6A5F11", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onClick={() => setClicked({ ...clicked, address: true })}
          className="edit flex gap-[10px] items-center w-[80px] p-[10px] border-[1px] border-[#7B7768] rounded-[10px]"
        >
          <RiEditLine />
          <p>Edit</p>
        </m.button>
      </div>

      {/* Logout Button */}
      <m.button
        whileHover={{
          backgroundColor: "#FFF9EB",
          color: "#BA1A1A",
          border: "1px solid #BA1A1A",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="self-end bg-[#BA1A1A] text-[#fff] p-[10px] rounded-[10px] text-[24px]"
        onClick={() => setClicked({ ...clicked, delete: true })}
      >
        Logout
      </m.button>
      <AnimatePresence mode="wait">
        {clicked.overview && (
          <Modal
            type="overview"
            closeModal={closeModal}
            cloudProfileDetails={cloudProfileDetails}
            setCloudProfileDetails={setCloudProfileDetails}
            handleInputChange={handleInputChange}
          />
        )}
        {clicked.personal && (
          <Modal
            type="personal"
            closeModal={closeModal}
            cloudProfileDetails={cloudProfileDetails}
            setCloudProfileDetails={setCloudProfileDetails}
            handleInputChange={handleInputChange}
          />
        )}
        {clicked.address && (
          <Modal
            type="address"
            closeModal={closeModal}
            cloudProfileDetails={cloudProfileDetails}
            setCloudProfileDetails={setCloudProfileDetails}
            handleInputChange={handleInputChange}
          />
        )}
        {clicked.delete && (
          <Modal
            type="delete"
            closeModal={closeModal}
            cloudProfileDetails={cloudProfileDetails}
            setCloudProfileDetails={setCloudProfileDetails}
            handleInputChange={handleInputChange}
          />
        )}
        {loading && (
          <Modal
            type="loading"
            closeModal={closeModal}
            cloudProfileDetails={cloudProfileDetails}
            setCloudProfileDetails={setCloudProfileDetails}
            handleInputChange={handleInputChange}
          />
        )}
      </AnimatePresence>
    </div>
  );
});

export default Page;
