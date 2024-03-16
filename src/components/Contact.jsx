import { useState } from "react";
import FormInput from "./FormInput";
const Contact = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    adress: "",
  });

  const inputProperties = [
    {
      id: "input_fullname",
      type: "text",
      name: "fullname",
      placeholder: "Enter your full name",
      required: true,
      label: "Full name",
    },
    {
      id: "input_email",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      required: true,
      label: "Email",
    },
    {
      id: "input_phone",
      type: "tel",
      name: "phone",
      placeholder: "Enter your phone number",
      required: true,
      label: "Phone",
    },
    {
      id: "input_address",
      type: "text",
      name: "address",
      placeholder: "Enter your address",
      label: "Address",
    },
    {
      id: "input_password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      required: true,
      label: "Password",
    },
  ];

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <form className="flex flex-col border border-slate-200 rounded-md w-10/12 max-w-[500px] py-6 px-6 gap-4">
      {inputProperties.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={handleOnChange}
        />
      ))}
      <button
        className="mt-4 rounded-md p-8 py-2 bg-teal-500 focus:bg-teal-600 text-white font-medium"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
