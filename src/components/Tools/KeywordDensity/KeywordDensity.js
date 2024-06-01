import React, {Fragment} from "react";
import Container from 'react-bootstrap/Container';
import './KeyworkDensity.css'
import KeywordChecker from "../../Sections/KeywordChecker";
import KeywordLanguage from "../../Sections/KeyworkLanguage";

export default function KeywordDensity() {
    return (
        <Fragment>
            <div className="keyworddensity-section py-5">
                <Container className="d-flex gap-4">
                    <KeywordChecker/>
                    <KeywordLanguage/>
                </Container>
            </div>

        </Fragment>
    )
}