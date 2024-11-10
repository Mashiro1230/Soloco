import { InputProps } from "../../types/auth";

export function input({
    id,
    type,
    placeholder,
    registration,
    errorMessage,
}: InputProps) {
    return (
        <div>
            <input
                {...registration}
                id={id}
                type={type}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                placeholder={placeholder}
            />
            {errorMessage && (
                <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
            )}
        </div>
    );
}
