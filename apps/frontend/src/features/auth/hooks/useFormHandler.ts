import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, authSchema } from "../schemas/auth.schema";

export const useFormHandler = () => {
    const methods = useForm<AuthSchema>({
        mode: "onBlur",
        resolver: zodResolver(authSchema),
    });

    return {
        methods,
        handleSubmit: methods.handleSubmit,
        isSubmitting: methods.formState.isSubmitting,
    };
};
