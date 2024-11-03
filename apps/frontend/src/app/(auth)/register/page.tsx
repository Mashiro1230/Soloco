"use client";

import { RegisterForm } from "@/components/ui-elements/Form/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="container mx-auto max-w-md px-4 py-32">
            <div className="bg-white p-10 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    ユーザ登録
                </h2>
                <RegisterForm />
            </div>
        </div>
    );
}
