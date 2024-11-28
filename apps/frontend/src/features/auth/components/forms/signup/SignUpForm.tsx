"use client";

import { FormProvider } from "react-hook-form";
import { useFormHandler } from "@/features/auth/hooks/useFormHandler";
import { useSubmit } from "../../../hooks/useSubmit";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { NicknameInput } from "./NicknameInput";
import { AgeSelect } from "./AgeSelect";

export function RegisterForm() {
    const { methods, handleSubmit, isSubmitting } = useFormHandler();
    const { onSubmit } = useSubmit();

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
                        <button
                            type="submit"
                            className="mt-4 w-full px-4 py-2 bg-pink-500 text-white rounded-md"
                            disabled={isSubmitting}
                        >
                            登録する
                        </button>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}
