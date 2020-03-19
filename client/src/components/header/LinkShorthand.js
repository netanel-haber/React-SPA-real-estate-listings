import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LinkShortHand({ to, content, exact = false, className = "" }) {
    return (
        <NavLink
            exact={exact}
            to={to}
            className={"Header__link pure-menu-link " + className}
            activeClassName="active">{content}
        </NavLink>
    )
}