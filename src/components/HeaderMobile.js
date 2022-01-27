import React, {useEffect, useState} from "react";
import {isMobileOnly} from "react-device-detect";
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HeaderMobile = ({animation}) => {
    const {t} = useTranslation();
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        if (isNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isNavOpen])

    return (
        <React.Fragment>
            <header className={`page-header ${isMobileOnly ? 'mobile' : 'mobile fade'} ${isNavOpen ? 'open in' : ''} ${animation ? 'in' : ''}`}>
                <nav className='nav'>
                    <Link to={'/'} className='nav-link'>{t("Main")}</Link>
                    <NavLink to={'/teams'} className='nav-link' activeClassName="active">{t("Teams")}</NavLink>
                    <NavLink to={'/events'} className='nav-link' activeClassName="active">{t("Events")}</NavLink>
                    <NavLink to={'/statistics'} className='nav-link' activeClassName="active">{t("Statistics")}</NavLink>
                    <NavLink to={'/info'} className='nav-link' activeClassName="active">{t("Info")}</NavLink>
                </nav>
            </header>
            <div className="mobile-nav-tab">
                <button className={`hamburger hamburger--slider ${isNavOpen ? 'is-active' : ''}`}
                        type="button"
                        onClick={() => setIsNavOpen(!isNavOpen)}>
                  <span className="hamburger-box">
                    <span className="hamburger-inner"/>
                  </span>
                </button>
            </div>
        </React.Fragment>
    )
}

export default HeaderMobile