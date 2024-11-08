"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, signInSchema } from "@/features/auth/schemas/auth.schema";
import { PinkButton } from "@/components/elements/button/PinkButton";
import { WhiteButton } from "@/components/elements/button/WhiteButton";

export default function LogIn() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInSchema>({
        mode: "onBlur",
        resolver: zodResolver(signInSchema),
    });

    const onSubmit = async (data: SignInSchema) => {
        const { email, password } = data;
        const result = await signIn(email, password);
        if (result === "error") {
            toast.error("メールアドレスまたはパスワードが間違っています。");
        } else {
            setToken(result);
            toast.success("ログイン成功！");
            router.push("/");
        }
    };

    return (

    );
}
