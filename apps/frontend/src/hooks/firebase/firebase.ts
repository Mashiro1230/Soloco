import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

type Auth = {
    signUp: (email: string, password: string) => Promise<string>;
    signIn: (email: string, password: string) => Promise<string>;
    signOut: () => Promise<string>;
};

export const useAuth = (): Auth => {
    // ユーザー登録
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

    // ダミーの signIn
    const signIn = async (email: string, password: string): Promise<string> => {
        // サインインの実装（ここではダミーの返り値）
        return "Sign in not implemented";
    };

    // ダミーの signOut
    const signOut = async (): Promise<string> => {
        return "Sign out not implemented";
    };

    return { signUp, signIn, signOut };
};
