"use client";

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SoloTypeFormProps } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { PinkButton } from "@/stories/PinkButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const questions = [
  {
      id: "solo_level",
      question: "ソロ活の経験は？",
      icon: "🤔",
      options: [
          { value: "初心者", label: "初心者" },
          { value: "経験者", label: "経験者" },
      ],
  },
  {
      id: "activity_preference",
      question: "インドア派？アウトドア派？",
      icon: "🏃‍♀️",
      options: [
          { value: "インドア派", label: "インドア派" },
          { value: "アウトドア派", label: "アウトドア派" },
      ],
  },
  {
      id: "time_preference",
      question: "朝型？夜型？",
      icon: "🌞",
      options: [
          { value: "朝型", label: "朝型" },
          { value: "夜型", label: "夜型" },
      ],
  },
  {
      id: "is_planned",
      question: "計画的？",
      icon: "📅",
      options: [
          { value: "true", label: "計画的である" },
          { value: "false", label: "計画的ではない" },
      ],
  },
  {
      id: "weekend_plan_preference",
      question: "週末は必ず予定を入れたい？",
      icon: "🏡",
      options: [
          { value: "true", label: "入れたい" },
          { value: "false", label: "入れたくない" },
      ],
  },
  {
      id: "after_work_preference",
      question: "仕事帰りはどうする？",
      icon: "🏢",
      options: [
          {
              value: "おいしいものを食べて帰る",
              label: "おいしいものを食べて帰る",
          },
          {
              value: "癒しとリフレッシュを求める",
              label: "癒しとリフレッシュを求める",
          },
      ],
  },
  {
      id: "comfort_adventure",
      question: "安定より刺激を求める？",
      icon: "🎢",
      options: [
          { value: "安定を求める", label: "安定を求める" },
          { value: "刺激を求める", label: "刺激を求める" },
      ],
  },
];


const SoloTypeForm: React.FC = () => {
    const router = useRouter();

    const { register, handleSubmit, setValue, watch } =
        useForm<SoloTypeFormProps>();
    const searchParams = useSearchParams();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    const watchedFields = watch();

    useEffect(() => {
        const userIdFromParams = searchParams.get("userId");
        if (userIdFromParams) {
            setUserId(userIdFromParams);
        } else {
            console.error("ユーザIDが見つかりません");
        }
    }, [searchParams]);

    const isFormComplete = questions.every(
        (question) =>
            watchedFields[question.id as keyof SoloTypeFormProps] !== undefined
    );

    const onSubmit: SubmitHandler<SoloTypeFormProps> = async (data) => {
        if (!userId) {
            console.error("ユーザIDが空です");
            return;
        }

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_USERS_TYPETEST_URL}/${userId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log("成功", result);

            const queryParams = new URLSearchParams({
                solo_type: result.solo_type,
                userId: userId,
            }).toString();

            router.push(`/solo-type/test/result?${queryParams}`);
        } catch (error) {
            console.error("エラー:", error);
            setErrorMessage(
                "診断の送信中にエラーが発生しました。もう一度お試しください。"
            );
        }
    };

    const handleOptionSelect = (
        questionId: keyof SoloTypeFormProps,
        value: string | boolean
    ) => {
        setValue(questionId, value);
        if (swiperInstance && swiperInstance.slideNext) {
            swiperInstance.slideNext();
        }
    };

    return (
        <div className="container mx-auto my-5 max-w-xl bg-white p-10 rounded-2xl">
            <h2 className="text-center mb-4 mt-2">
                あなたのソロ活タイプを診断🔍
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    className="custom-swiper"
                >
                    {questions.map((question, index) => (
                        <SwiperSlide key={question.id}>
                            <div className="mb-8">
                                <h3 className="font-semibold m-6 text-pink-500 text-center">
                                    「{question.question}」
                                </h3>
                                <div className="flex justify-center items-center mb-6">
                                    <div className="text-6xl">
                                        {question.icon}
                                    </div>
                                </div>
                                <div className="space-y-4 items-center mx-16 mt-8">
                                    {question.options.map((option) => (
                                        <button
                                            key={option.value.toString()}
                                            type="button"
                                            onClick={() =>
                                                handleOptionSelect(
                                                    question.id as keyof SoloTypeFormProps,
                                                    option.value
                                                )
                                            }
                                            className={`w-full py-3 px-4 border ${
                                                watchedFields[
                                                    question.id as keyof SoloTypeFormProps
                                                ] === option.value
                                                    ? "bg-pink-100 border-pink-500 text-pink-500"
                                                    : "border-pink-300 text-pink-500 bg-white hover:bg-pink-100"
                                            } rounded-full shadow-sm text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {index === questions.length - 1 && (
                                <div className="flex justify-center m-8">
                                    <PinkButton
                                        type="submit"
                                        disabled={!isFormComplete}
                                        className={
                                            !isFormComplete ? "opacity-50" : ""
                                        }
                                    >
                                        診断する
                                    </PinkButton>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </form>
        </div>
    );
};

export default SoloTypeForm;
