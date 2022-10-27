import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style/header.css"

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                <Link to='/'>e-commerce</Link>
            </h1>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink className="header__link" to='/login'>
                            <i className="bi bi-person-fill"></i>
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to='/purchases'>
                            <i className="bi bi-bag-fill"></i>
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to='/cart'>
                            <i className="bi bi-cart-fill"></i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
