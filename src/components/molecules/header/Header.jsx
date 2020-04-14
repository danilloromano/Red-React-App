import React, { Component } from 'react';
import './Header.scss';
import { IoIosMenu } from "react-icons/io";

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="header__container">
                    <div className="header__icon"><IoIosMenu/></div>
                    <div className="header__image"></div>
                    <div className="header__search"></div>
                    <div className="header__login"></div>
                </div>
            </div>
        )
    }
}


export default Header;