import React from 'react';
import styled from 'styled-components';

const RecommendProducts = styled.section`
        min-width:100%;
        background-color:#ffffff;
        z-index:1;
`
const Container = styled.div`
        max-width:1540px;
        margin:auto;
`

const ProductsBlock = styled.div`
        padding: 4rem 0 4rem;
`

const Header = styled.header`
        margin-bottom:2rem;
        width:100%;
`

const CategoryFilter = (props) => {

    return (
        <RecommendProducts>
            <Container>
                <ProductsBlock>
                    <Header>
                        <h2>Recommend</h2>
                    </Header>
                </ProductsBlock>
            </Container>
        </RecommendProducts>
    );
}

export default CategoryFilter;