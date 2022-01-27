import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import './LangSelector.css';

const LangSelector = () => {
    const {i18n} = useTranslation();

    const [lang, setLang] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : 'ru');

    useEffect(() => {
        i18n.changeLanguage(lang);

    }, [lang])
    
    return(
        <div className="language">
        <div className='lang-selector'>
            <button onClick={() => setLang('en')} className='lang-selector-btn'>ENG</button>
            <button onClick={() => setLang('ru')} className='lang-selector-btn'>РУС</button>
        </div>
        </div>
    )
}

export default LangSelector;