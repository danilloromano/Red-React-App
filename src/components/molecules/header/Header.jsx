import React, { Component } from 'react';
import './Header.scss';
import Button from '../../atoms/button/Button.js'
import { IoIosMenu } from "react-icons/io";

class Header extends Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    register() {
        console.log('registrando...');
    }

    login() {
        console.log('logando...');
    }

    render() {
        return (
            <div className="header">
                <div className="header__container">
                    <div className="header__icon"><IoIosMenu/></div>
                    <div className="header__image"></div>
                    <div className="header__search"></div>
                    <div className="header__register">
                        <Button text={'CADASTRO'} handleClick={this.register}/>
                    </div>
                    <div className="header__login">
                        <Button text={'LOGIN'} handleClick={this.login}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;