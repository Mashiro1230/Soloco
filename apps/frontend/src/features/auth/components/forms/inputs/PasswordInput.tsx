import { useFormContext } from "react-hook-form";
import { AuthSchema } from "@/types/types";

export function PasswordInput() {
    const {
        register,
        formState: { errors },
    } = useFormContext<AuthSchema>();

    return (
        <div>
            <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                パスワード（8文字以上）
                <span className="text-sm font-medium text-red-600 ml-2">
                    必須
                </span>
            </label>
            <input
                {...register("password")}
                id="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                placeholder="●●●●●●●●"
            />
            {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                </p>
            )}
        </div>
    );
}
