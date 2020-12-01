import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../kng logo1.png';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                
{/* https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}
                <Link to='/'>
                    <img src={logo} style={{width:"80px",height:"75px"}} alt="store" className="navbar-brand"/>
                </Link>
                <h3 className="logo-text" style={{color:"orange"}}>Kids And Gadget</h3>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            product
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i class="fa fa-cart-plus" aria-hidden="true"/>
                        </span>
                    my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize ;
}

`