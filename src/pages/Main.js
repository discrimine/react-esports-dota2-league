import React, {useEffect, useState} from 'react';
import {isMobileOnly} from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import Footer from "../components/Footer";
import Header from "../components/Header";
import './Main.css';

const Main = () => {
    const {t} = useTranslation();

    return (
        
        <React.Fragment>
            <Header/>
            <main className='hero inner-height'>
                <section className={`hero-content`}>
                    {isMobileOnly &&
                        <div className='nav-link-logo mobile'>
                            <img src="../img/destiny-logo.png" />
                        </div>
                    }
                    <div className="content-nav">
                        <div className="image-content"> <div className="information-content">
                            <p>Esports tournament</p>
                            <h1>Destiny League Dota 2</h1>
                        </div></div>
                       
                    </div>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default Main;



