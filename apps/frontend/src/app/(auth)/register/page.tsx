"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { supabase } from "@/utils/supabase";
import { SignUpForm } from "@/app/components/ui-elements/Form/SignUpForm";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = async () => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_USERS_URL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            const userId = await response.json();
            console.log(userId);
            localStorage.setItem("userId", userId.id);
            router.push(`/solo-type/test?userId=${userId.id}`);
        } catch (error) {
            console.error("エラー:", error);
        }
    };

    return (
        <SignUpForm
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit(onSubmit)}
        />
    );
}
