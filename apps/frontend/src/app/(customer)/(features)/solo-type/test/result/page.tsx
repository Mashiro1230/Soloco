"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { PinkButton } from "@/app/components/ui-elements/button/button";
import { SoloTypeResultProp } from "@/app/commons/types/types";
import { soloTypeDataList, SoloTypeData } from "./soloTypeData";
import { getImageUrl } from "@/app/commons/utils/imageUtils";

export default function SoloTypeResult() {
    const [soloTypeResult, setSoloTypeResult] = useState<SoloTypeResultProp | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchSoloType = () => {
            try {
                const solo_type = searchParams.get("solo_type");
                const userId = searchParams.get("userId");
                if (solo_type && userId) {
                    setSoloTypeResult({ solo_type, userId });
                } else {
                    throw new Error(
                        "ソロ活タイプまたはユーザーIDが見つかりません"
                    );
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error(
                    "ソロ活タイプの取得に失敗しました。もう一度診断を行ってください。"
                );
                router.push("/solo-type/test");
            } finally {
                setIsLoading(false);
            }
        };
        fetchSoloType();
    }, [router, searchParams]);

    const handleReturnToTop = () => {
        router.push("/");
    };

    const getTypeInfo = (type: string): SoloTypeData => {
        return soloTypeDataList.find(data => data.type === type) || soloTypeDataList[0];
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!soloTypeResult) {
        return <div>ソロ活タイプが見つかりませんでした</div>;
    }

    const { type, image, description } = getTypeInfo(soloTypeResult.solo_type);
    const imageSrc = getImageUrl(image);

    return (
        <div className="container mx-auto max-w-xl p-4">
            <div className="bg-white py-10 px-18 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    あなたのソロ活タイプは
                </h2>
                <h2 className="text-center mb-6 text-pink-500 font-bold">
                    「{type}」
                </h2>
                <div className="flex justify-center mb-6">
                    <Image
                        src={imageSrc}
                        alt={type}
                        width={350}
                        height={350}
                    />
                </div>
                <div>
                    <p className="mb-10 mt-4 px-14 text-base text-center whitespace-pre-line">
                        {description}
                    </p>
                </div>
                <div className="flex justify-center px-14">
                    <PinkButton onClick={handleReturnToTop}>
                        TOPに戻る
                    </PinkButton>
                </div>
            </div>
        </div>
    );
}