"use client";

import { FormProvider } from "react-hook-form";
import { EmailInput } from "./inputs/EmailInput";
import { PasswordInput } from "./inputs/PasswordInput";
import { NicknameInput } from "./inputs/NicknameInput";
import { AgeSelect } from "./inputs/AgeSelect";
import { PinkButton } from "@/stories/PinkButton";
import { useSignUp } from "../../hooks/useSignUp";

export default function SignUpForm() {
    const { methods, handleSubmit, isSubmitting, onSubmit } = useSignUp();

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
                        <PinkButton type="submit" disabled={isSubmitting}>
                            登録する
                        </PinkButton>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}
