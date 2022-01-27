import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import {isMobileOnly} from 'react-device-detect';
import './style.css';

import EternityApp from './EternityApp';

if (isMobileOnly) {
    document.getElementById('root').classList.add('mobile')
}

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <EternityApp />
    </I18nextProvider>
    , document.getElementById('root')
);