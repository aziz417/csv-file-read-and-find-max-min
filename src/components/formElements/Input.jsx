import { useAllInfo } from "../../context/AllInformation";

const Input = ({ name, label, type, required }) => {
    const { formData, setFormData } = useAllInfo();
    return <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
            {label}{required && <span className="text-red-500"> *</span>}:
        </label>
        <input
            id={name}
            name={name}
            type={type}
            required={required}
            className="w-full border rounded py-2 px-3"
            value={formData[name]}
            onChange={(e) => setFormData({
                ...formData,
                [name]: e.target.value,
            })}
        />
    </div>
}

export default Input;