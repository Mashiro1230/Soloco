import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import { PinkButton } from "../button/PinkButton";

type SignUpFormProps = {
    register: UseFormRegister<{
        email: string;
        password: string;
        nickname: string;
        age: string;
    }>;
    errors: FieldErrors;
    isSubmitting: boolean;
    onSubmit: (e: React.FormEvent) => void;
};

export const SignUpForm: React.FC<SignUpFormProps> = ({
    register,
    errors,
    isSubmitting,
    onSubmit,
}) => {
    return (
        <div className="container mx-auto max-w-md px-4 py-8">
            <div className="bg-white p-10 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    ユーザ登録
                </h2>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            メールアドレス
                            <span className="text-sm font-medium text-red-600 ml-2">
                                必須
                            </span>
                        </label>
                        <input
                            {...register("email")}
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                            placeholder="abc@test.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {"メールアドレスを入れてください"}
                            </p>
                        )}
                    </div>
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
                                {"パスワードを入れてください"}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="nickname"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            ニックネーム
                            <span className="text-sm font-medium text-red-600 ml-2">
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
                                {"ニックネームを入れてください"}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="age"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            年齢
                        </label>
                        <select
                            {...register("age")}
                            id="age"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="unknown">選択してください</option>
                            <option value="18-20">18〜20歳</option>
                            <option value="21-25">21〜25歳</option>
                            <option value="26-30">26〜30歳</option>
                            <option value="31-35">31〜35歳</option>
                            <option value="36-40">36〜40歳</option>
                            <option value="41-45">41〜45歳</option>
                            <option value="46-50">46〜50歳</option>
                            <option value="51-55">51〜55歳</option>
                            <option value="56-60">56〜60歳</option>
                            <option value="61-65">61〜65歳</option>
                            <option value="66+">66歳以上</option>
                        </select>
                    </div>
                    <div>
                        <PinkButton type="submit" disabled={isSubmitting}>
                            登録する
                        </PinkButton>
                    </div>
                </form>
            </div>
        </div>
    );
};
