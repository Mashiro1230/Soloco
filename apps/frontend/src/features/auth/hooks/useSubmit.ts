import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signUpUser } from "../api/signup";
import { AuthSchema } from "../schemas/auth.schema";

export const useSubmit = () => {
    const { signUp } = useAuth();
    const router = useRouter();

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

    return { onSubmit };
};
