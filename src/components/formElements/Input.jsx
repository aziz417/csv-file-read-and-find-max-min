import { useAllInfo } from "../../context/AllInformation";

const Input = ({ name, label, type, disabled }) => {
    const { formData, setFormData } = useAllInfo();
    // return <div className="mb-4">
    //     <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
    //         {label}:
    //     </label>
    //     <input
    //         id={name}
    //         name={name}
    //         type={type}
    //         className="w-full border rounded py-2 px-3"
    //         value={formData[name]}
    //         onChange={(e) => setFormData({
    //             ...formData,
    //             [name]: e.target.value,
    //         })}
    //         disabled={disabled}
    //     />
    // </div>

    return <label className="block">
        <span className="
            after:content-['*']
            after:ml-0.5
            after:text-red-500
            block text-sm font-medium
            text-slate-700
        ">
            Email
        </span>
        <input
            type="email"
            name="email"
            className="
               mt-1 px-3 py-2
             bg-white border
               shadow-sm
             border-slate-300
             placeholder-slate-400
               focus:outline-none
             focus:border-sky-500
             focus:ring-sky-500
               block w-full rounded-md
               sm:text-sm focus:ring-1
            "
            placeholder="you@example.com" />
    </label>

}

export default Input;