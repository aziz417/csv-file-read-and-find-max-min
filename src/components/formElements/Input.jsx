import { useAllInfo } from "../../context/AllInformation";

const Input = ({ name, label, type, disabled }) => {
    const { formData, setFormData } = useAllInfo();
    return <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
            {label}:
        </label>
        <input
            id={name}
            name={name}
            type={type}
            className="w-full border rounded py-2 px-3"
            value={formData[name]}
            onChange={(e) => setFormData({
                ...formData,
                [name]: e.target.value,
            })}
            disabled={disabled}
        />
    </div>
}

export default Input;