import React from 'react';

import './Eternity.css';

import {EternityProvider} from "./context/EternityAppContext";
import EternityRouter from './EternityRouter';

const EternityApp = () => {

    return (
        <EternityProvider>
            <EternityRouter/>
        </EternityProvider>
    )
}

export default EternityApp;