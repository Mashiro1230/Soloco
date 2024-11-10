import { useFormContext } from "react-hook-form";
import { AuthSchema } from "@/types/types";
import { Label } from "../../common/Label";
import { Input } from "../../common/Input";

export function EmailInput() {
    const {
        register,
        formState: { errors },
    } = useFormContext<AuthSchema>();

    return (
        <div>
            <Label htmlFor="email" label="メールアドレス" required />
            <Input
                id="email"
                type="email"
                placeholder="abc@test.com"
                registration={register("email")}
                errorMessage={errors.email?.message}
            />
        </div>
    );
}
