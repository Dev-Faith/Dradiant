"use client";
import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { FallingLines } from "react-loader-spinner";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const UploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImage, setpreviewImage] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    amount: "",
    category: "",
    desc: "",
    image: "",
    quantity: 1,
  });
  const [image, setImage] = useState(null);
  const [fileArray, setFileArray] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [filea, setFiles] = useState(null);

  const handleFileUpload = (files) => {
    setImage(files[0]);
    setFiles(files);
    setFileArray(
      Array.from(files).map((file) => {
        return { ...file, displayName: formData.name || file.name };
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

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const clearFiles = () => {
    setSelectedFiles([]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setUploading(true);
    setSelectedFiles((prevFiles) => [...prevFiles, ...fileArray]);

    try {
      const data = new FormData();
      data.append("file", image);

      const uploadResponse = await axios.post("/api/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imageUrl = uploadResponse.data.url;
      const productData = { ...formData, image: imageUrl };

      await axios.post("/api/bags/add", productData);

      toast.success("Bag added successfully");
      setFormData({
        name: "",
        price: "",
        amount: "",
        category: "",
        desc: "",
        image: "",
        quantity: 1,
      });
      setImage(null);
    } catch (error) {
      toast.error(
        "Image upload failed: " + error.response?.data?.details || error.message
      );
    } finally {
      setUploading(false);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full px-[28px] pt-[64px] h-auto pb-[200px] flex flex-grow items-start justify-between overflow-y-auto">
      <div className="uploadProducts flex flex-col gap-[32px]">
        <p className="text-[32px] font-bold">
          Upload more products to the Store
        </p>
        <form onSubmit={submitHandler} className="flex flex-col gap-[27px]">
          <div className="name flex flex-col gap-[16px]">
            <label htmlFor="name">Name:</label>
            <input
              value={formData.name}
              onChange={onChangeHandler}
              id="name"
              name="name"
              type="text"
              placeholder="AEFR4463KD"
              className="w-[379px] h-[62px] border-black border-[1px] px-[16px] py-[8px] outline-none bg-[#FFF9EB] rounded-[16px]"
            />
          </div>
          <div className="name flex flex-col gap-[16px]">
            <label htmlFor="price">Price:</label>
            <input
              onChange={onChangeHandler}
              value={formData.price}
              id="price"
              name="price"
              type="text"
              placeholder="Enter price"
              className="w-[379px] h-[62px] border-black border-[1px] px-[16px] py-[8px] outline-none bg-[#FFF9EB] rounded-[16px]"
            />
          </div>
          <div className="name flex flex-col gap-[16px]">
            <label htmlFor="Amount">Amount Available:</label>
            <input
              onChange={onChangeHandler}
              value={formData.amount}
              id="Amount"
              name="amount"
              type="text"
              placeholder="Enter amount"
              className="w-[379px] h-[62px] border-black border-[1px] px-[16px] py-[8px] outline-none bg-[#FFF9EB] rounded-[16px]"
            />
          </div>
          <div className="name flex flex-col gap-[16px]">
            <label htmlFor="category">Category:</label>
            <input
              onChange={onChangeHandler}
              value={formData.category}
              id="category"
              name="category"
              type="text"
              placeholder="Enter category"
              className="w-[379px] h-[62px] border-black border-[1px] px-[16px] py-[8px] outline-none bg-[#FFF9EB] rounded-[16px]"
            />
          </div>
          <div className="name flex flex-col gap-[16px]">
            <label htmlFor="description">Description:</label>
            <textarea
              onChange={onChangeHandler}
              value={formData.desc}
              id="description"
              name="desc"
              placeholder="Enter description"
              rows="5"
              className="w-[379px] h-[auto] border-black border-[1px] px-[16px] py-[8px] outline-none bg-[#FFF9EB] rounded-[16px]"
            />
          </div>

          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={(e) => handleFileUpload(e.target.files)}
            accept="image/png"
          />

          <label
            htmlFor="file-upload"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-[379px] h-[121px] border-[1px] rounded-[16px] flex flex-col gap-[10px] items-center justify-center border-dashed border-black cursor-pointer"
          >
            <AiOutlineFileAdd className="size-[32px] cursor-pointer" />
            <p className="text-[16px]">
              Drag and drop or click to upload image
            </p>
          </label>

          <div className="btn-con w-[379px] h-[56px] flex justify-end">
            <button
              type="submit"
              className="w-[112px] h-[56px] bg-[#6A5F11] rounded-[16px] p-[16px] text-white text-[16px] flex items-center justify-center"
            >
              {uploading ? (
                <FallingLines color="#fff" width="33" visible={true} />
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default UploadPage;
