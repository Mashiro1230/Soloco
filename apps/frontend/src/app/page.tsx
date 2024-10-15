import React from "react";
import CategoryList from "./components/ui-elements/category/list";
import Heading from "./components/ui-elements/heading";
import { CustomerHeader } from "./components/layouts/header/header";

export default function Home() {
    return (
        <>
            <CustomerHeader />
            <Heading>どんなソロ活をやってみたい？👀</Heading>
            <CategoryList />
        </>
    );
}
