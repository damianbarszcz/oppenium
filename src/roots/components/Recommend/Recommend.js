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

const RecommendInner = styled.div`
  display:grid;
  margin-top:3.5rem;
  grid-template-columns: repeat(4,1fr);
  grid-gap:3.5rem;
`
const RecommendProduct = styled.div`
  width:100%;
  height: 444px;
  background-color:red;
`

const Recommend = (props) => {

    return (
        <RecommendProducts>
            <Container>
                <ProductsBlock>
                    <Header>
                        <h2>Recommend</h2>
                    </Header>

                    <RecommendInner>
                        <RecommendProduct/>
                        <RecommendProduct/>
                        <RecommendProduct/>
                        <RecommendProduct/>

                        <RecommendProduct/>
                        <RecommendProduct/>
                        <RecommendProduct/>
                        <RecommendProduct/>
                    </RecommendInner>
                </ProductsBlock>
            </Container>
        </RecommendProducts>
    );
}

export default Recommend;