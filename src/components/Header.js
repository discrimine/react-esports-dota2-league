import React, {useEffect, useState} from 'react';
import {isMobileOnly} from 'react-device-detect';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import HeaderMobile from "./HeaderMobile";
import './Header.css';
import destiny_logo from '../img/destiny_logo.png'

const Header = ({animation}) => {
    const {t} = useTranslation();

    return (
        <React.Fragment>
            {isMobileOnly ?
                <HeaderMobile/>
                :
                <section className="menu">
                    <div className='nav-link-logo'><img src={destiny_logo} /></div>
                    <div className='navigation'>
                        {!isMobileOnly &&
                            <nav className={`hero-nav`}>
                                <Link to={'/'} className='nav-link'>{t("Main")}</Link>
                                <Link to={'/events/'} className='nav-link'>{t("Events")}</Link>
                                <Link to={'/teams/'} className='nav-link'>{t("Teams")}</Link>
                                <Link to={'/statistics/'} className='nav-link'>{t("Statistics")}</Link>
                                <Link to={'/info/'} className='nav-link'>{t("Info")}</Link>
                            </nav>  
                        }

               
                    </div>
                </section>
            }
        </React.Fragment>
    )
}

export default Header;