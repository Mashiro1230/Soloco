import React from "react";
import Link from "next/link";
import CategoryCard from "./card";
import { categoryData } from "./data";

const CategoryList: React.FC = () => {
    return (
        <div className="container m-8 mx-auto px-2 sm:px-3">
            <ul className="flex flex-wrap justify-center gap-4 rounded-2">
                {categoryData.map(({ id, href, ...cardProps }) => (
                    <li
                        key={id}
                        className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]"
                    >
                        <Link
                            href={href}
                            className="block w-full h-full bg-white rounded-2xl overflow-hidden"
                        >
                            <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
                                <CategoryCard {...cardProps} />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;