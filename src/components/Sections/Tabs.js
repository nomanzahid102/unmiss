import React, {useState} from "react";
import Url from "../Tools/KeywordDensity/Tabs/Url";
import SearchBase from "../Tools/KeywordDensity/Tabs/SearchBase";
import TextBase from "../Tools/KeywordDensity/Tabs/TextBase";

export default function Tabs() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";
    return (
        <div className="Tab-container">
            <ul className="d-flex justify-content-between tab-list">
                <li
                    className={`tabs ${getActiveClass(1, "active-tabs")}`}
                    onClick={() => toggleTab(1)}
                ><span>URL</span>
                </li>
                <li
                    className={`tabs ${getActiveClass(2, "active-tabs")}`}
                    onClick={() => toggleTab(2)}
                ><span>TEXT</span>
                </li>
                <li
                    className={`tabs ${getActiveClass(3, "active-tabs")}`}
                    onClick={() => toggleTab(3)}
                ><span>SEARCH BASED</span>
                </li>
            </ul>
            <div className="content-container">
                <div className={`content ${getActiveClass(1, "active-content")}`}>
                    <Url/>
                </div>
                <div className={`content ${getActiveClass(2, "active-content")}`}>
                    <TextBase/>
                </div>
                <div className={`content ${getActiveClass(3, "active-content")}`}>
                    <SearchBase/>
                </div>
            </div>
        </div>
    )
}
