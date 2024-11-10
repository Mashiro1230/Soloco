import { useFormContext } from "react-hook-form";
import { AuthSchema } from "@/types/types";
import { Label } from "../../common/Label";

export function AgeSelect() {
    const { register } = useFormContext<AuthSchema>();

    return (
        <div>
            <Label htmlFor="age" label="年齢" />
            <select
                {...register("age")}
                id="age"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            >
                <option value="unknown">選択してください</option>
                <option value="18-20">18〜20歳</option>
                <option value="21-25">21〜25歳</option>
                <option value="26-30">26〜30歳</option>
                <option value="31-35">31〜35歳</option>
                <option value="36-40">36〜40歳</option>
                <option value="41-45">41〜45歳</option>
                <option value="46-50">46〜50歳</option>
                <option value="51-55">51〜55歳</option>
                <option value="56-60">56〜60歳</option>
                <option value="61-65">61〜65歳</option>
                <option value="66+">66歳以上</option>
            </select>
        </div>
    );
}
