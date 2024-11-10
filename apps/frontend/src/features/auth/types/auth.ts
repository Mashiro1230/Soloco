import { UseFormRegisterReturn } from "react-hook-form";

export type Auth = {
    signUp: (email: string, password: string) => Promise<string>;
    signIn: (email: string, password: string) => Promise<string>;
    signOut: () => Promise<string>;
};

export type InputProps = {
    id: string;
    type: string;
    placeholder: string;
    registration: UseFormRegisterReturn;
    errorMessage?: string;
};

export type LabelProps = {
    htmlFor: string;
    label: string;
    required?: boolean;
};
