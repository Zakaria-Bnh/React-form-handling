import { useState } from "react";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false)


  const handleblur = (e) => {
    setFocus(true)
    console.log(e.target, 'this is blured and its set to focus');
  }

  return (
    <div>
      <label className="block text-sm text-slate-400 pb-1">{props.label}</label>
      <input
        className={`w-full ${focus ? "invalid:border-red-500" : ''} py-2 px-1  border focus:border-teal-500 rounded-md outline-none`}
        value={props.value}
        onChange={props.onChange}
        onBlur={handleblur}
        {...props}
      />
    </div>
  );
};

export default FormInput;
