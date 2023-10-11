import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerWrapper">
                <div className="headerLogo">LOGO</div>
                <div className="headerLink">
                    <Link to="/upcoming">개봉예정</Link>
                </div>
                <div className="headerLink">
                    <Link to="/voteAverage">평점순</Link>
                </div>
                <div className="headerLink">
                    <Link to="/pickup">찜 리스트</Link>
                </div>
            </div>
        </div>
    )
};