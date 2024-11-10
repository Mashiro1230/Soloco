import { useFormContext } from "react-hook-form";
import { AuthSchema } from "@/types/types";

export function NicknameInput() {
    const {
        register,
        formState: { errors },
    } = useFormContext<AuthSchema>();

    return (
        <div>
            <label
                htmlFor="nickname"
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                ニックネーム
                <span className="text-sm font-medium text-red-500 ml-3">
                    必須
                </span>
            </label>
            <input
                {...register("nickname")}
                id="nickname"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                placeholder="サオトメ メグミ"
            />
            {errors.nickname && (
                <p className="text-red-500 text-xs mt-1">
                    {errors.nickname.message}
                </p>
            )}
        </div>
    );
}
