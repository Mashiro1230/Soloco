"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, authSchema } from "@/types/types";
import { useAuth } from "@/features/auth/hooks/useLogin";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { EmailInput } from "@/features/auth/components/forms/inputs/EmailInput";
import { PasswordInput } from "@/features/auth/components/forms/inputs/PasswordInput";
import { NicknameInput } from "@/features/auth/components/forms/inputs/NicknameInput";
import { AgeSelect } from "@/features/auth/components/forms/inputs/AgeSelect";
import { PinkButton } from "@/stories/PinkButton";

export default function SignUpForm() {
    const { signUp } = useAuth();
    const router = useRouter();

    const methods = useForm<AuthSchema>({
        mode: "onBlur",
        resolver: zodResolver(authSchema),
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data: AuthSchema) => {
        const { email, password } = data;
        const result = await signUp(email, password);
        if (result === "error") {
            toast.error("Error: 登録できません");
        } else {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_USERS_URL}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    }
                );
                const userId = await response.json();
                toast.success("ユーザー登録完了！");
                router.push(`/solo-type/test?userId=${userId.id}`);
            } catch (error) {
                console.error("エラー:", error);
                toast.error("ユーザー登録に失敗しました");
            }
        }
    };

    return (
        <div className="container mx-auto max-w-md px-4 py-32">
            <div className="bg-white p-10 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    ユーザ登録
                </h2>
                <FormProvider {...methods}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <EmailInput />
                        <PasswordInput />
                        <NicknameInput />
                        <AgeSelect />
                        <div>
                            <PinkButton type="submit" disabled={isSubmitting}>
                                登録する
                            </PinkButton>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}
