"use client";

import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { ActivityProps } from "@/app/commons/types/types";
import { getImageUrl } from "@/app/commons/utils/imageUtils";
import OneRideLimousineTimeline from "./timeline";
import SpeechBubble from "./speech";
import BallPulseSyncLoading from "@/app/components/ui-elements/loading/loading";

// S3から画像取得
const LimousineImage = getImageUrl("limousine.jpg");
const Dress = getImageUrl("dress.jpg");
const Tokyo_Scenery = getImageUrl("tokyo.jpg");
const StaffMegumi = getImageUrl("megumi.png");

const Limousine: React.FC = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const activityId = 1;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_ACTIVITY_URL}/${activityId}`;
    const {
        data: activity,
        error,
        isLoading,
    } = useSWR<ActivityProps>(apiUrl, fetcher);

    if (isLoading) return <BallPulseSyncLoading />;
    if (error) return <div>エラーが発生しました</div>;
    if (!activity) return <div>アクティビティが見つかりません</div>;

    return (
        <div className="min-h-screen py-6 m-3 leading-relaxed">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-96">
                    <Image
                        src={LimousineImage}
                        alt={activity.provider_name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-9">
                    <div className="pb-8 text-center">
                        <h1>{activity.provider_name}</h1>
                    </div>
                    <div className="font-semibold text-center text-pink-500 p-1">
                        <h3>{activity.title}</h3>
                    </div>
                    <p className="mt-1 text-lg">{activity.description}</p>
                    <div className="text-center p-2 mt-14">
                        <h2>✨ おすすめポイント ✨</h2>
                        <div className="flex flex-col md:flex-row w-full mt-3">
                            <div className="w-full md:w-1/2 py-6">
                                <div className="rounded-2xl overflow-hidden">
                                    <Image
                                        src={Tokyo_Scenery}
                                        alt="tokyo_scenery"
                                        layout="responsive"
                                        width={550}
                                        height={350}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-4">
                                <h3 className="font-semibold text-pink-500 mt-2 mb-4 leading-relaxed">
                                    東京の夜景とリムジンの音響に全集中
                                </h3>
                                <p className="text-lg text-left mx-2 pl-2 leading-relaxed">
                                    窓外には煌めく街並み、音響は臨場感抜群。最高級の乗り心地と包まれるような音楽とともに、普段は忙しすぎて眺める暇もない東京の夜景を一人でじっくり眺めることができます。
                                    ソロリムジンでは美しい景色と音楽に脳のメモリを使うため、記憶に残ること間違いありません！
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row w-full mt-3">
                            <div className="w-full md:w-1/2 py-6">
                                <div className="rounded-2xl overflow-hidden">
                                    <Image
                                        src={Dress}
                                        alt="dress"
                                        layout="responsive"
                                        width={550}
                                        height={350}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-4">
                                <h3 className="font-semibold text-pink-500 mt-2 mb-4 leading-relaxed">
                                    私が私のためにするドレスアップ
                                </h3>
                                <p className="text-lg text-left mx-2 pl-2 leading-relaxed">
                                    OneRideLimousineはあなたの美しい孤城。普段着ない特別なドレスや憧れのスーツなど、内装に映る自分を楽しみましょう。
                                    BGMで気分を上げて、「私が私を楽しむ」至福のひとときを。折角だから、自撮りも思いっきり楽しんで、Solocoでシェアしちゃいましょう！
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-14">
                        <h2 className="text-center">
                            🏃‍♀️ Socolo編集部がソロ活やってみました 🏃‍♀️
                        </h2>
                        <div className="mt-3 flex justify-center">
                            <div className="w-full max-w-3xl">
                                <div className="flex flex-col md:flex-row w-full items-center">
                                    <div className="w-full md:w-1/5 py-4 flex justify-center">
                                        <div className="rounded-full overflow-hidden w-40 h-40">
                                            <Image
                                                src={StaffMegumi}
                                                alt="Staff Megumi"
                                                width={150}
                                                height={150}
                                                objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-3/4 mx-4 p-3">
                                        <SpeechBubble>
                                            <h2 className="text-center font-bold text-xl mb-2">
                                                エディターMegumiの感想
                                            </h2>
                                            <p className="text-lg text-left leading-relaxed">
                                                「初めてのリムジン」で「誕生日ソロ活」という中々濃い体験をしました🥹でも一生の思い出になりました🫶
                                            </p>
                                        </SpeechBubble>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <OneRideLimousineTimeline />
                        </div>
                    </div>
                    <div className="px-4 pb-4 mt-4">
                        <div className="mt-4 space-y-2 bg-pink-50 rounded-2xl p-6">
                            <h2 className="mb-4">OneRide Limousine</h2>
                            <div className="grid grid-cols-[auto,1fr] gap-x-8 gap-y-2">
                                <strong>メール</strong>
                                <span>oneride-limousine@example.com</span>

                                <strong>電話</strong>
                                <span>312345678</span>

                                <strong>住所</strong>
                                <span>東京都江戸川区南葛西2-1-25</span>

                                <strong>ウェブサイト</strong>
                                <a
                                    href="https://star-limo.jp/"
                                    className="text-pink-500 hover:underline"
                                >
                                    https://star-limo.jp/
                                </a>

                                <strong>営業時間</strong>
                                <span>年中無休 10:00～19:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Limousine;
