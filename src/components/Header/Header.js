import React, {Fragment, useState} from "react";
import Container from 'react-bootstrap/Container';
import './Header.css'
import Nav from '../Nav'
import Moon from "../../assets/icons/Moon";
import Sun from "../../assets/icons/Sun";
import UserImage from "../../assets/images/Image.png"

function Header(props) {
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    };
    return (
        <Fragment>
            <header className='py-3'>
                <Container>
                    <nav className='d-flex justify-content-between align-items-center'>
                        <div className="logo">
                            <a href="/" aria-label="home">
                                <div className="logo-container">
                                    <img src={props.src} alt={props.alt}/>
                                </div>
                            </a>

                        </div>
                        <Nav/>
                        <div className="right user-box d-flex align-items-center gap-4">
                            <div className="d-flex gap-3 mode-switch">
                                <Sun/>
                                <Moon/>
                            </div>
                            <div className="user-info d-flex align-items-center d-flex gap-3">
                                <div className="user first-name">
                                    <span>Anatolii</span>
                                </div>
                                <div className="avator">
                                    <img src={UserImage} alt="User First Name"/>
                                </div>
                            </div>
                            <div className="mobile-menu">
                                <div className="hamburger" onClick={ToggleClass}>
                                    <div className={"hamburger__icon " + (isActive ? "" : "active")}>
                                        <div className="hamburger__line hamburger__line--small one"></div>
                                        <div className="hamburger__line hamburger__line--full"></div>
                                        <div className="hamburger__line hamburger__line--small two"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </nav>
                </Container>
            </header>

        </Fragment>
    );
}

export default Header;