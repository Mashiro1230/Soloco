"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/utils/image";
import { LandingPageHeader } from "../components/layouts/Header/LandingPageHeader";
import { Footer } from "@/app/components/layouts/footer";

// S3から画像取得
const FVImage = getImageUrl("firstView.png");
const FVImageSp = getImageUrl("firstView_sp.png");
const FeatureOne = getImageUrl("feature01.jpg");
const FeatureTwo = getImageUrl("feature02.jpg");
const Logo = getImageUrl("soloco_logo.png");

export default function LandingPage() {
    return (
        <div>
            <LandingPageHeader />
            <div className="min-h-screen flex flex-col items-center justify-center text-center lg:text-left relative">
                {/* メインコンテンツ */}
                <div className="relative flex flex-col-reverse lg:flex-row items-center lg:items-start overflow-hidden mb-6">
                    <div className="lg:w-2/5 sm:w-full z-10 flex flex-col items-center lg:items-start md:pl-16 lg:pl-18">
                        <div className="max-w-3xl text-center lg:text-left mt-16 lg:mt-48">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-7">
                                <span className="text-[40px] sm:text-[44px] lg:text-[54px] text-pink-500 bg-white px-3 py-1 sm:px-5 sm:py-2">
                                    ひとりで挑戦できる
                                </span>
                            </h1>
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-14">
                                <span className="text-[36px] sm:text-[40px] lg:text-[50px] bg-white px-3 py-2 sm:px-5 sm:py-2">
                                    ことは、もっとある
                                </span>
                            </h1>
                            <div className="mt-8 flex flex-col items-center">
                                <span className="text-lg sm:text-xl font-medium mb-3">
                                    ＼ 無料でユーザ登録 ／
                                </span>
                                <Link href="/register">
                                    <button className="text-lg sm:text-xl font-medium px-8 sm:px-12 py-4 sm:py-6 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:from-orange-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                        <span className="text-xl sm:text-2xl">
                                            Solocoを使ってみる
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* PCでは元の画像配置 */}
                    <div className="lg:w-3/5 sm:w-full flex justify-center pr-0 lg:pr-14 mb-8 lg:mb-0 hidden lg:flex">
                        <Image
                            src={FVImage}
                            alt="firstView"
                            className="object-contain"
                            priority
                            quality={100}
                            width={850}
                            height={650}
                        />
                    </div>
                </div>

                {/* レスポンシブでボタンの下に表示する画像 */}
                <div className="w-full lg:hidden mt-6">
                    <Image
                        src={FVImageSp}
                        alt="firstView mobile"
                        className="object-cover w-full h-auto"
                        priority
                        quality={100}
                        width={700}
                        height={550}
                    />
                </div>

                <div className="py-16 px-5">
                    <div className="container mx-auto max-w-6xl rounded-lg overflow-hidden">
                        <div className="bg-white rounded-2xl p-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">
                                Solocoって何？
                            </h2>
                            <div className="mb-16">
                                <div className="flex flex-wrap items-center">
                                    <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                                        <Image
                                            src={Logo}
                                            alt="Soloco Image"
                                            width={420}
                                            height={220}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 md:pl-6">
                                        <p className="text-2xl mb-8 font-bold text-pink-500">
                                            「ソロ活」を楽しむ女性が新しい一歩を踏み出すのをお手伝いするアプリです。
                                        </p>
                                        <p className="text-lg">
                                            想像もしなかった驚きのソロ活との出会いや、仲間たちとのワクワクする体験のシェアを通じて、あなたの人生をもっとカラフルに、もっとドラマチックに彩りましょう✨さあ、あなただけの特別な物語の始まりです🛫
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-18">
                                <h2 className="text-3xl font-bold mt-4 mb-12 text-center text-gray-800">
                                    Solocoの特徴
                                </h2>
                                <div className="bg-pink-50 rounded-2xl overflow-hidden mb-12">
                                    <div className="flex flex-wrap items-stretch">
                                        <div className="w-full md:w-1/2 order-1">
                                            <Image
                                                src={FeatureOne}
                                                alt="Soloco Features"
                                                width={500}
                                                height={300}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-12 order-1 md:order-2 flex flex-col justify-center">
                                            <p className="font-bold text-pink-400 text-lg mb-3">
                                                特徴①
                                            </p>
                                            <h3 className="text-pink-500 font-bold text-2xl md:text-2xl mb-6">
                                                様々なソロ活を提案してくれる！
                                            </h3>
                                            <p className="text-gray-700 text-lg md:text-lg leading-relaxed">
                                                ソロ活といえば「映画」「ショッピング」「旅行」「カラオケ」...。
                                                そんなイメージがありませんか？実はシチュエーションに応じた様々なソロ活があるんです！
                                                Solocoはあなたが想像してもみなかった新しいソロ活を提案します🙌
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-pink-50 rounded-2xl overflow-hidden">
                                    <div className="flex flex-wrap items-stretch">
                                        <div className="w-full md:w-1/2 order-1 md:order-1 md:order-2">
                                            <Image
                                                src={FeatureTwo}
                                                alt="Share your solo activities"
                                                width={500}
                                                height={300}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-12 order-1 md:order-1 flex flex-col justify-center">
                                            <p className="font-bold text-pink-400 text-lg mb-3">
                                                特徴②
                                            </p>
                                            <h3 className="text-pink-500 font-bold text-2xl md:text-2xl mb-6">
                                                体験したソロ活をシェアできる！
                                            </h3>
                                            <p className="text-gray-700 text-lg md:text-lg leading-relaxed">
                                                「新しいソロ活を体験したけど、その感動をどこでシェアいいかわからない...」。
                                                そんな経験はありませんか？Solocoなら大丈夫！シェアできる内容はソロ活だけ。周りのことを気にする必要はありません😊
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
