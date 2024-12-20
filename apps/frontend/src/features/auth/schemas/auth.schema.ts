import { z } from "zod";

// sign up
export const authSchema = z.object({
  email: z.string().email({ message: "メールアドレスの形式で入力してください" }),
  password: z.string().min(8, { message: "8文字以上で入力してください" }),
  nickname: z.string().min(1, { message: "ニックネームを入力してください" }),
  age: z.string(),
});

export type AuthSchema = z.infer<typeof authSchema>;

// login
export const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式で入力してください" }),
  password: z.string().min(8, { message: "8文字以上で入力してください" }),
});

export type SignInSchema = z.infer<typeof signInSchema>;