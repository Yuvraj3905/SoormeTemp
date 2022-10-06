// importing necessary components
import React from 'react'
import './MyNavbar.css'
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

export const MyNavbar = (props) => {
    return (
        <div>
            <div className="container">
                <div className="myLogo" id="myLogo">
                    M&N Fashion
                <p className="description">Shop Online</p>
                </div>
                <div className="navbar">

                    <div className="icon-bar" onClick={props.Show}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>

                    <ul id="nav-lists">
                        <li className="close"><span onClick={props.Hide}>×</span></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">
                                Cart
                            <StyledBadge badgeContent={props.totalCount} color="secondary">
                                <ShoppingCartIcon
                                    style={{ color: '#f2f4fb' }}
                                />
                            </StyledBadge>
                        </Link></li>

                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/qna">FaQs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
