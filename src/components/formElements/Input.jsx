import { useAllInfo } from "../../context/AllInformation";

const Input = ({ name, label, type, disabled }) => {
  const { formData, setFormData } = useAllInfo();

  return <div className="relative mb-6">
    <input
      autoComplete="off"
      id={name}
      name={name}
      type={type}
      value={formData[name]}
      onChange={(e) => setFormData({
        ...formData,
        [name]: e.target.value,
      })}
      disabled={disabled}
      className="peer placeholder-transparent 
      text-sm
        h-10 w-full border-b-2 border-gray-300
       text-gray-900 focus:outline-none
       focus:borer-rose-600"
      placeholder={name.replace("_", " ")}
    />
    <label
      htmlFor={name}
      className={`
      ${formData[name] ? 'font-bold' : ''}
      absolute left-0 -top-3.5
       text-gray-600 text-sm
       peer-placeholder-shown:text-base
       peer-placeholder-shown:text-gray-440
       peer-placeholder-shown:top-2
       transition-all peer-focus:-top-3.5
        peer-focus:text-gray-600
        peer-focus:font-bold
        peer-focus:text-sm`}>

      {label}
    </label>
  </div>
}

export default Input;