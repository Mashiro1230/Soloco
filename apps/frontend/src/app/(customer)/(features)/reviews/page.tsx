"use client";

import React, { useState, useEffect } from "react";
import useSWR, { mutate } from "swr";
import { ReviewProps, ReviewItem } from "@/app/commons/types/types";
import { uploadFile } from "../../../commons/images/s3/imageActions";
import LikeButton from "@/app/components/ui-elements/button/like/like";
import FavoriteButton from "@/app/components/ui-elements/button/favorite/favorite";
import { PinkButton } from "@/app/components/ui-elements/button/button";
import BallPulseSyncLoading from "@/app/components/ui-elements/loading/loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_API_REVIEWS_URL}`;

export default function Reviews() {
    const {
        data: reviews,
        error,
        isLoading,
    } = useSWR<ReviewProps[]>(apiUrl, fetcher);
    const [userId, setUserId] = useState<number | null>(null);
    const [reviewText, setReviewText] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [postError, setPostError] = useState<string | null>(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            setUserId(parseInt(storedUserId, 10));
        }
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleAddReview = async (e: React.FormEvent) => {
        e.preventDefault();
        setPostError(null);
        if (!reviewText.trim()) {
            setPostError("テキストを入力してください。");
            return;
        }
        let imageUrl = "";
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);
                const result = await uploadFile(formData);
                imageUrl = result.url!;
            } catch (error) {
                console.error("画像アップロードエラー:", error);
                setPostError("画像のアップロードに失敗しました。");
                return;
            }
        }

        const newReview: ReviewItem = {
            // user_id: userId ?? 318,
            text: reviewText,
            image: imageUrl || "",
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(newReview),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message ||
                        `レビューの投稿に失敗しました: ${response.status} ${response.statusText}`
                );
            }
            const data = await response.json();
            mutate(apiUrl);
            setReviewText("");
            setFile(null);
            setPreviewUrl(null);
        } catch (error) {
            console.error("レビュー投稿エラー:", error);
        }
    };

    if (isLoading) return <BallPulseSyncLoading />;
    if (error) return <div>エラーが発生しました: {error.message}</div>;
    if (!reviews) return <div>レビューが見つかりません</div>;

    const sortedReviews = [...reviews].sort(
        (a, b) =>
            new Date(b.update_date).getTime() -
            new Date(a.update_date).getTime()
    );

    return (
        <div className="container mx-auto p-5">
            <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                <form onSubmit={handleAddReview} className="mb-8">
                    <textarea
                        className="w-full p-4 border rounded-lg mb-4 h-32"
                        placeholder="新しいソロ活体験を書く..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    />
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="mb-4"
                    />
                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="mb-4 max-w-full h-auto"
                        />
                    )}
                    <PinkButton type="submit">投稿する</PinkButton>
                </form>

                {postError && (
                    <div className="text-red-500 mb-4">{postError}</div>
                )}

                <div className="space-y-4">
                    {sortedReviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white border border-gray-200 rounded-lg p-5"
                        >
                            <p className="font-bold">{review.nickname}</p>
                            <p className="text-gray-700 mt-2">{review.text}</p>
                            {review.image && (
                                <img
                                    src={review.image}
                                    alt="image"
                                    className="mt-4 max-w-full h-auto rounded-xl"
                                />
                            )}
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-[16px] text-gray-400">
                                    投稿日：{" "}
                                    {new Date(
                                        review.update_date
                                    ).toLocaleDateString()}
                                </p>
                                <div className="flex space-x-5">
                                    <span className="flex items-center">
                                        <LikeButton
                                            initialLikes={review.likes_count}
                                        />
                                    </span>
                                    <span className="flex items-center">
                                        <FavoriteButton
                                            initialFavorites={
                                                review.favorites_count
                                            }
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
