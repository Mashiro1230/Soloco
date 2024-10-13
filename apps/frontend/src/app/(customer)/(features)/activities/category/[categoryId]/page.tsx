"use client";

import React from "react";
import useSWR from "swr";
import ActivityList from "./activityList";
import { ActivitiesProps } from "@/app/commons/types/types";
import Heading from "@/app/components/ui-elements/heading";
import BallPulseSyncLoading from "@/app/components/ui-elements/loading/loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ActivityPage: React.FC = () => {
    const categoryId = 2;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_ACTIVITIES_URL}/${categoryId}`;
    const {
        data: activities,
        error,
        isLoading,
    } = useSWR<ActivitiesProps[]>(apiUrl, fetcher);

    if (isLoading) return <BallPulseSyncLoading />;
    if (error) return <div>エラーが発生しました</div>;
    if (!activities) return <div>アクティビティが見つかりません</div>;

    return (
        <div>
            <Heading>スペシャル体験ソロ活✨</Heading>
            <ActivityList activities={activities} />
        </div>
    );
};

export default ActivityPage;
