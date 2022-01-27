import React, {useState, useEffect} from "react";

import Header from "../components/Header";
import Footer from "./Footer";

const PageWrapper = (props) => {
    const [animateHeader, setAnimateHeader] = useState(false);
    const [animateBody, setAnimateBody] = useState(false);
    const [animateFooter, setAnimateFooter] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimateHeader(true);
            setAnimateBody(true);
            setAnimateFooter(true);
        }, 500)
    })

    return(
        <React.Fragment>
            <Header animation={animateHeader}/>
            <main className={`inner-height page-content fade ${animateBody ? 'in' : ''}`}>
                {props.children}
            </main>
            <Footer animation={animateFooter}/>
        </React.Fragment>
    )
}

export default PageWrapper;