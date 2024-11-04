import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../types/auth";
import { auth } from "@/config/firebase/firebaseConfig";

export const useAuth = (): Auth => {
    const signUp = async (email: string, password: string): Promise<string> => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = await userCredential.user;
            return user.uid;
        } catch (error) {
            return "ユーザー登録エラー";
        }
    };

    // ダミーのログイン
    const signIn = async (email: string, password: string): Promise<string> => {
        // サインインの実装（ここではダミーの返り値）
        return "Sign in not implemented";
    };

    // ダミーのログアウト
    const signOut = async (): Promise<string> => {
        return "Sign out not implemented";
    };

    return { signUp, signIn, signOut };
};
