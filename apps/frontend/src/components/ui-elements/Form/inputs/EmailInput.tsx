import { useFormContext } from "react-hook-form";
import { AuthSchema } from "@/types/types";

export function EmailInput() {
    const { register, formState: { errors } } = useFormContext<AuthSchema>();

    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス
                <span className="text-sm font-medium text-red-600 ml-2">必須</span>
            </label>
            <input
                {...register("email")}
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                placeholder="abc@test.com"
            />
            {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
        </div>
    );
}
