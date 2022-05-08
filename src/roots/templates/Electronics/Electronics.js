import React  from 'react';
import { CategoryHeader,CategoryFilter,CategoryProducts } from "../../components";

const Electronics = (props) => {

    return (
        <>
            <CategoryHeader />
            <CategoryFilter />
            <CategoryProducts />
        </>
    );
}

export default Electronics;