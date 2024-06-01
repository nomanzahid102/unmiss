import React, {Fragment} from "react";
import spanish from '../../assets/images/Spanish.png'
import Italian from '../../assets/images/Italian.png'
import Dutch from '../../assets/images/Dutch.png'
import German from '../../assets/images/German.png'
import Portuguese from '../../assets/images/Portuguese.png'

export default function KeywordLanguage() {
    const Language = [
        {
            id: 1,
            src: spanish,
            name: "Spanish",
        },
        {
            id: 1,
            src: Italian,
            name: "Italian",
        },
        {
            id: 1,
            src: Dutch,
            name: "Dutch",
        },
        {
            id: 1,
            src: German,
            name: "German",
        },
        {
            id: 1,
            src: Portuguese,
            name: "Portuguese",
        },
        {
            id: 1,
            src: spanish,
            name: "Spanish",
        },
        {
            id: 1,
            src: Italian,
            name: "Italian",
        },
        {
            id: 1,
            src: Dutch,
            name: "Dutch",
        },
        {
            id: 1,
            src: spanish,
            name: "Spanish",
        }
    ];


    return (
        <Fragment>
            <div className="keyword-language">
                <h2 className='sub-heading'>Language</h2>
                <div className="language-list">
                    <ul>
                        {Language.map((item) => (
                            <li key={item.id} className="d-flex align-items-center gap-3">
                                <img src={item.src} alt=""/>
                                <span>{item.name}</span>
                            </li>

                        ))}
                    </ul>
                </div>

            </div>
        </Fragment>
    )
}