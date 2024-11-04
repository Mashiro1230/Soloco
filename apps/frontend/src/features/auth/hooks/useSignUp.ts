import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, authSchema } from "../schemas/auth.schema";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signUpUser } from "../api/signup";

export const useSignUp = () => {
    const { signUp } = useAuth();
    const router = useRouter();

    const methods = useForm<AuthSchema>({
        mode: "onBlur",
        resolver: zodResolver(authSchema),
    });

    const onSubmit = async (data: AuthSchema) => {
        const { email, password } = data;
        const result = await signUp(email, password);

        if (result === "error") {
            toast.error("Error: 登録できません");
            return;
        }
        const userResult = await signUpUser(data);
        if (userResult.success) {
            toast.success("ユーザー登録完了！");
            router.push(`/solo-type/test?userId=${userResult.userId}`);
        } else {
            toast.error(userResult.error);
        }
    };

    return {
        methods,
        handleSubmit: methods.handleSubmit,
        isSubmitting: methods.formState.isSubmitting,
        onSubmit,
    };
};
