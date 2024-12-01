import { useFormContext } from "react-hook-form";
import { AuthSchema } from "@/types/types";
import { Label } from "../../common/Label";
import { Input } from "../../common/Input";

export function PasswordInput() {
    const {
        register,
        formState: { errors },
    } = useFormContext<AuthSchema>();

    return (
        <div>
            <Label
                htmlFor="password"
                label="パスワード（8文字以上）"
                required
            />
            <Input
                id="password"
                type="password"
                placeholder="●●●●●●●●"
                registration={register("password")}
                errorMessage={errors.password?.message}
            />
        </div>
    );
}
