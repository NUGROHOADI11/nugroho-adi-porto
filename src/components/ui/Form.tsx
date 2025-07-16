"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  country: string;
  phoneNumber: string;
  message: string;
}

type FormFieldProps = {
  id: string;
  label: string;
  className?: string;
} & (
  | ({ as?: "input" } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({ as: "textarea" } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
);

const FormField: React.FC<FormFieldProps> = (props) => {
  if (props.as === "textarea") {
    const { id, label, className, ...rest } = props;
    return (
      <div className={className}>
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          {label}
        </label>
        <textarea
          id={id}
          {...rest}
          className="w-full rounded-sm  text-white border border-gray-700 px-4 py-2 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
        />
      </div>
    );
  }

  const { id, label, className, ...rest } = props;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className="w-full rounded-sm  text-white border border-gray-700 px-4 py-2 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
      />
    </div>
  );
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "ID",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-xl text-gray-300">
        Please feel free to reach out to me via the form below. <br /> I look
        forward to hearing from you!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="firstName"
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormField
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <FormField
        id="company"
        name="company"
        label="Company"
        value={formData.company}
        onChange={handleChange}
      />

      <FormField
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Phone Number
        </label>
        <div className="flex">
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className=" bg-neutral-900 text-white border border-gray-700 px-2 py-2 rounded-l-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
          >
            <option value="ID">ID</option>
            <option value="US">US</option>
            <option value="SG">SG</option>
            
          </select>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full rounded-r-sm  text-white border border-l-0 border-gray-700 px-4 py-2 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
      </div>

      <FormField
        id="message"
        name="message"
        label="Message"
        as="textarea"
        rows={8}
        value={formData.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-white hover:bg-gray-400 text-black font-bold py-3 px-4 rounded-sm transition-colors duration-300"
      >
        Send Now
      </button>
    </form>
  );
}
