"use client";
import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Pages = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    amount: "",
    category: "",
    description: "",
  });
  const [fileArray, setFileArray] = useState([]);

  const handleFileUpload = (files) => {
     setFileArray(Array.from(files).map((file)=>{return { ...file, displayName: formData.name || file.name };})) // Convert FileList to array
 // Append new files to state
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files; // Use dataTransfer for drag-and-drop files
    handleFileUpload(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  const clearFiles = (index) => {
    setSelectedFiles([]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSelectedFiles((prevFiles) => [...prevFiles, ...fileArray]);
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]:value});
  }


  return (
    <div className="w-full px-[28px] pt-[64px] h-full pb-[200px] flex flex-grow items-start justify-between overflow-y-auto">
      <div className="uploadProducts flex flex-col gap-[32px]">
        <p className="text-[32px] font-bold">
          Upload more products to the Store
        </p>
        <form
          action=""
          onSubmit={submitHandler}
          className="flex flex-col gap-[27px]"
        >
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
              value={formData.description}
              id="description"
              name="description"
              placeholder="Enter description"
              rows="5"
              className="w-[379px] h-[auto] border-black border-[1px] px-[16px] py-[8px] outline-none bg-[#FFF9EB] rounded-[16px]"
            />
          </div>
          {/* Hidden file input */}
          <input
            id="file-upload"
            type="file"
            className="hidden"
            multiple
            onChange={(e) => handleFileUpload(e.target.files)}
          />
          {/* Drop zone */}
          <label
            htmlFor="file-upload"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-[379px] h-[121px] border-[1px] rounded-[16px] flex flex-col items-center justify-center border-dashed border-black cursor-pointer"
          >
            <AiOutlineFileAdd className="size-[32px] gap-[10px] cursor-pointer" />
            <p className="text-[16px]">
              Drag and drop or click to upload image
            </p>
          </label>
          {/* Submit button */}
          <div className="btn-con w-[379px] h-[56px] flex justify-end">
            <button
              type="submit"
              className="w-[112px] h-[56px] bg-[#6A5F11] rounded-[16px] p-[16px] text-white text-[16px]"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
      {/* List of uploaded files */}
      <div className="uploadList flex flex-col gap-[56px]">
        <p className="text-[32px] font-bold">List of uploaded Items</p>
        <div className="list flex flex-col gap-[28px]">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="w-[366px] h-[62px] border-[1px] border-[#81737A] rounded-[16px] flex justify-between items-center p-[16px]"
            >
              <p className="fileName">{file.displayName}</p>
              <RxCross1
                className="size-[24px] cursor-pointer"
                onClick={() => removeFile(index)}
              />
            </div>
          ))}
        </div>
        <div className="btn-con w-[379px] h-[56px] flex justify-end">
          <button
            onClick={clearFiles}
            type="submit"
            className="w-[112px] h-[56px] bg-[#6A5F11] rounded-[16px] p-[16px] text-white text-[16px]"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pages;
