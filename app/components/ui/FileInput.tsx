import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FaFilePdf, FaTrash } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";

interface FileInputProps {
  label: string;
  required?: boolean;
  error?: string;
  acceptedFileTypes?: string[];
  maxSize?: number; // in MB
  register: UseFormRegisterReturn;
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  required = false,
  error,
  acceptedFileTypes = [],
  maxSize = 3,
  register,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { ref, onChange: hookFormOnChange, ...rest } = register;


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    const input = document.getElementById(register.name) as HTMLInputElement;
    if (input) input.value = "";
  };

  return (
    <div className="w-full">
      <label
        htmlFor={register.name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>

      <label
        htmlFor={register.name}
        className="mt-1 flex justify-center px-6 pt-10 pb-10 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-indigo-500 transition"
      >
        <div className="space-y-1 text-center">
          {selectedFile ? (
            <div className="flex flex-col items-center">
              <FaFilePdf className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">{selectedFile.name}</p>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="mt-2 text-sm text-red-600 hover:text-red-800 flex items-center"
              >
                <FaTrash className="mr-1" /> Remove
              </button>
            </div>
          ) : (
            <>
              <div className="mx-auto h-12 w-12 text-gray-400 border rounded-full p-2 flex items-center justify-center border-gray-400">
                <LuUpload className="h-6 w-6" />
              </div>
              <p className="text-sm text-black font-bold">Click to upload</p>
              <p className="text-xs text-gray-500">
                PDF must be under {maxSize}MB
              </p>
            </>
          )}
        </div>
      </label>

      <input
  id={register.name}
  type="file"
  className="sr-only"
  accept={acceptedFileTypes.join(",")}
  ref={ref}
  onChange={(e) => {
    handleFileChange(e); 
    register.onChange(e); 
  }}
  {...rest}
/>


      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FileInput;
