import React from "react";
import {Link} from "react-router-dom";
import "../css/index.css";

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerWrapper">
                <div className="headerLogo">
                    <Link className="headerLink" to="/">FindMovie</Link>
                </div>
                <div className="headerLinkWrapper">
                    <Link className="headerLink" to="/voteAverage">평점순</Link>
                </div>
                <div className="headerLinkWrapper">
                    <Link className="headerLink" to="/upcoming">개봉예정</Link>
                </div>
                <div className="headerLinkWrapper">
                    <Link className="headerLink" to="/pickup">나중에 볼 영화</Link>
                </div>
                <div className="headerLinkWrapper">
                    <Link className="headerLink" to="/location">내 주변 영화관 위치</Link>
                </div>
            </div>
        </div>
    )
};