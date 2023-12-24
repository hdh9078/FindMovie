import React from "react";
import {Link} from "react-router-dom";
import "../css/index.css";

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerWrapper">
                <div className="headerLogo">
                    <Link className="headerLink" to="/main">FindMovie</Link>
                </div>
                <div className="headerLinkWrapper">
                    <Link className="headerLink" to="/voteAverage">평점순</Link>
                </div>
                <div className="headerLinkWrapper">
                    <Link className="headerLink" to="/upcoming">개봉예정</Link>
                </div>
                <div className="headerLinkWrapper">
                    <Link className="headerLink" to="/pickup">찜 목록</Link>
                </div>
                <div className="headerLinkWrapper2">
                    <Link className="headerLink" to="/signin">로그인</Link>
                </div>
            </div>
        </div>
    )
};