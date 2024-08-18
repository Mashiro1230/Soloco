import React from "react";
import Link from "next/link";
import ActiveCategoryCard from "../ui-elements/category/active";
import SpecialCategoryCard from "../ui-elements/category/special";
import RelaxCategoryCard from "../ui-elements/category/relax";
import GourmetCategoryCard from "../ui-elements/category/gourmet";

const categories = [
    { id: 1, href: "/activities/category/1", Component: ActiveCategoryCard },
    { id: 2, href: "/activities/category/2", Component: SpecialCategoryCard },
    { id: 3, href: "/activities/category/3", Component: RelaxCategoryCard },
    { id: 4, href: "/activities/category/4", Component: GourmetCategoryCard },
];

const CategoryList: React.FC = () => {
    return (
        <div className="container m-8 mx-auto px-2 sm:px-3">
            <ul className="flex flex-wrap justify-center gap-4 rounded-2">
                {categories.map(({ id, href, Component }) => (
                    <li
                        key={id}
                        className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]"
                    >
                        <Link
                            href={href}
                            className="block w-full h-full bg-white rounded-2xl overflow-hidden"
                        >
                            <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
                                <Component />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
