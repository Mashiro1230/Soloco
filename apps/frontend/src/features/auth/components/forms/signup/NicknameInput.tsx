import { useFormContext } from "react-hook-form";
import { AuthSchema } from "@/types/types";
import { Label } from "../../common/Label";
import { Input } from "../../common/Input";

export function NicknameInput() {
    const {
        register,
        formState: { errors },
    } = useFormContext<AuthSchema>();

    return (
        <div>
            <Label htmlFor="nickname" label="ニックネーム" required />
            <Input
                id="nickname"
                type="text"
                placeholder="サオトメ メグミ"
                registration={register("nickname")}
                errorMessage={errors.nickname?.message}
            />
        </div>
    );
}
