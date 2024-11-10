import { LabelProps } from "@/features/auth/types/auth";

export function Label({ htmlFor, label, required }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            {label}
            {required && (
                <span className="text-sm font-medium text-red-500 ml-3">
                    必須
                </span>
            )}
        </label>
    );
}
