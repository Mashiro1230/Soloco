import { AuthSchema } from "../schemas/auth.schema";

interface SignUpResponse {
    success: boolean;
    userId?: string;
    error?: string;
}

export const signUpUser = async (data: AuthSchema): Promise<SignUpResponse> => {
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
        const result = await response.json();
        return { success: true, userId: result.id };
    } catch (error) {
        console.error("エラー:", error);
        return {
            success: false,
            error: "ユーザー登録に失敗しました",
        };
    }
};
