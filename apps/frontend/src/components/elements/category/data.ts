import ActiveCategoryImage from "../../../../public/top/active.jpg"
import SpecialCategoryImage from "../../../../public/top/special.jpg"
import RelaxCategoryImage from "../../../../public/top/relax.jpg"
import GourmetCategoryImage from "../../../../public/top/gourmet.jpg"

export const categoryData = [
    {
        id: 1,
        href: "/activities/category/1",
        imageSrc: ActiveCategoryImage,
        title: "アクティブ系ソロ活",
        description: "冒険の主人公はYOU！",
        tags: [
            { id: 1, name: "ボウリング🎳" },
            { id: 2, name: "サバゲー💪" },
            { id: 3, name: "ナイトプール👙" },
            { id: 4, name: "遊園地🎡" },
        ],
    },
    {
        id: 2,
        href: "/activities/category/2",
        imageSrc: SpecialCategoryImage,
        title: "スペシャル体験ソロ活",
        description: "あなたのためだけのスペシャル♡",
        tags: [
            { id: 1, name: "シティホテル🏨" },
            { id: 2, name: "気球🌌" },
            { id: 3, name: "リムジン🚖" },
            { id: 4, name: "ヘリクルーズ🚢" },
        ],
    },
    {
        id: 3,
        href: "/activities/category/3",
        imageSrc: RelaxCategoryImage,
        title: "リラックス系ソロ活",
        description: "心がほぐれる〜",
        tags: [
            { id: 1, name: "プラネタリウム⭐️" },
            { id: 2, name: "美術館＆博物館🖼️" },
            { id: 3, name: "銭湯♨️" },
            { id: 4, name: "夜景🌉" },
        ],
    },
    {
        id: 4,
        href: "/activities/category/4",
        imageSrc: GourmetCategoryImage,
        title: "グルメ堪能ソロ活",
        description: "己の五感と向き合う...",
        tags: [
            { id: 1, name: "焼肉🍖" },
            { id: 2, name: "寿司🍣" },
            { id: 3, name: "中華料理🥟" },
            { id: 4, name: "フランス料理🇫🇷" },
        ],
    },
];
