import React, {useContext} from "react";
import {isMobileOnly} from "react-device-detect";
import './Footer.css';

import LangSelector from "../components/LangSelector";
import Carousel from "./Carousel";
import {EternityContext} from "../context/EternityAppContext";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {sponsorData} = useContext(EternityContext);
    const {t} = useTranslation();

    return (
        <footer className={`page-footer`}>
            {
                !isMobileOnly && sponsorData && sponsorData.length > 0 &&
                    <div className="sponsored">
                        <h3 className='h3'>{t("Sponsored by")}</h3>
                        <Carousel sponsors={sponsorData}/>
                    </div>
                    
            }
            <div className='page-footer-copyright'>
                Copyright {new Date().getFullYear()}. Destiny league dota 2. all rights reserved
            </div>
            <div class="footer-actions">
            <ul className="social">
                <li className="li-style">
                    <a href ="https://vk.com/destinyleague_d2" target="_blank" className='social-link social-link--vk'>
                        <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739V5.949c0-.656-.187-.949-.74-.949H9.161c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001H.9c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553C6.318 17.343 9.374 19 12.154 19c1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667C19.114 18.217 19.407 19 20.405 19h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"/></svg>
                    </a>
                </li>
                <li className="li-style">
                    <a href="https://www.facebook.com/DestinyLeagued2" target="_blank" className='social-link social-link--fb'>
                        <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0 8.064 0 9.95 7.85 9.674 9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877c.188-2.824-.761-5.016 2.051-5.016z"/></svg>
                    </a>
                </li>
                <li className="li-style">
                    <a href="https://www.twitch.tv/destinyleague_d2" target="_blank" className='social-link social-link--twitch'>
                        <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="M.975 4.175v16.694h5.749V24h3.139l3.134-3.132h4.705l6.274-6.258V0H2.542zm3.658-2.09h17.252v11.479l-3.66 3.652h-5.751L9.34 20.343v-3.127H4.633z"/><path d="M10.385 6.262h2.09v6.26h-2.09zM16.133 6.262h2.091v6.26h-2.091z"/></g></svg>
                    </a>
                </li>
            </ul>
            
           
            <LangSelector/>
            </div>
        </footer>
    )
}

export default Footer;