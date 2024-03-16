const FormInput = (props) => {
  return (
    <div>
      <label className="block text-sm text-slate-400">{props.label}</label>
      <input
        className="w-full py-2 px-1  border focus:border-teal-500 rounded-md outline-none"
        value={props.value}
        onChange={props.onChange}
        {...props}
      />
    </div>
  );
};

export default FormInput;
