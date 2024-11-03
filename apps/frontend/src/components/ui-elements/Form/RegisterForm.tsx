import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, authSchema } from "@/types/types";
import { useAuth } from "@/hooks/firebase/firebase";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { EmailInput } from "./inputs/EmailInput";
import { PasswordInput } from "./inputs/PasswordInput";
import { NicknameInput } from "./inputs/NicknameInput";
import { AgeSelect } from "./inputs/AgeSelect";
import { PinkButton } from "@/stories/PinkButton";

export function RegisterForm() {
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
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
    );
}
