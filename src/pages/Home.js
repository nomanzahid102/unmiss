import React, {Fragment} from "react";
import logo from '../assets/svg/logo.svg';
import Header from "../components/Header/Header";
import KeywordDensity from "../components/Tools/KeywordDensity/KeywordDensity";

function Home() {
    return (
        <Fragment>
            <Header src={logo} alt={'logo-image'}/>
            <KeywordDensity/>
        </Fragment>
    )
}

export default Home;