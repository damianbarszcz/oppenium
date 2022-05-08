import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  min-width:100%;
  background-color:#ffffff;
  border-bottom:1px solid #17183B;
  z-index:1;
`
const Container = styled.div`
  max-width:1540px;
  margin:auto;
`
const NavBlock = styled.div`
  padding: 2rem 0 2rem;
`
const NavBrand = styled.div`
  display: inline-block;
`
const NavList = styled.ul`
  display: inline;
`
const NavListItem = styled.li`
  display: inline;
  margin-left:0.5rem;
`

const Navigation = (props) => {

    return (
        <Navbar>
            <Container>
                <NavBlock>
                    <NavBrand>Oppenium</NavBrand>

                    <NavList>
                        <NavListItem>
                            <a href="/computers">Computers</a>
                        </NavListItem>

                        <NavListItem>
                            <a href="/electronics">Electronics</a>
                        </NavListItem>

                        <NavListItem>
                            <a href="/login">Logowanie</a>
                        </NavListItem>
                    </NavList>
                </NavBlock>
            </Container>
        </Navbar>
    );
}

export default Navigation;