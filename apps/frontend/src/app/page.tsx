import React from "react";
import CategoryList from "../components/elements/category/list";
import Heading from "../components/elements/heading";
import { CustomerHeader } from "../components/layouts/header/CustomerHeader";

export default function Home() {
    return (
        <>
            <CustomerHeader />
            <Heading>どんなソロ活をやってみたい？👀</Heading>
            <CategoryList />
        </>
    );
}
