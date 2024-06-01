import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import LinkIcon from "../../../../assets/icons/LinkIcon";
import DownIcon from "../../../../assets/icons/DownIcon";
import WordIcon from "../../../../assets/icons/WordIcon";
import RefreshIconImage from "../../../../assets/images/refresh-icon.png";

export default function Url() {
    return (
        <div className="url_tab">
            <Form>
                <div className="section-heading">
                    <h3>Enter URL</h3>
                    <InputGroup className="mb-3" size="lg">
                        <InputGroup.Text id="basic-addon1"><LinkIcon/></InputGroup.Text>
                        <Form.Control
                            type='text'
                            placeholder="Enter your URL like https://example.com..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3 justify-content-around align-items-center checkbox-row" size="lg">
                        <p className="m-0 input_title">INCLUDE</p>
                        <Form.Check // prettier-ignore
                            type='checkbox'
                            id='includeMeta'
                            label='Incude Meta Tags'
                        />
                        <Form.Check // prettier-ignore
                            type='checkbox'
                            id='inlcudeTitles'
                            label='Incude Titles'
                        />
                        <Form.Check // prettier-ignore
                            type='checkbox'
                            id='inlcudeAltTitles'
                            label='Incude ALT Titles'
                        />
                    </InputGroup>

                    <h3>Exclude Keywords (Optional)</h3>
                    <div className="text-area-section">
                        <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={12}/>
                        </Form.Group>
                    </div>
                    <div className="additional_action d-flex justify-content-around align-items-center">
                        <div className="icons d-flex justify-content-center">
                            <div className="ad_btn clear">
                                <span><img src={RefreshIconImage} alt=""/> </span> Clear
                            </div>
                            <div className="ad_btn upload">
                                <span><DownIcon/></span> Upload
                            </div>
                        </div>
                        <div className="total_word">
                            <p className="mb-0">
                                <span className="me-2"><WordIcon/></span>Number of words 0/2000
                            </p>
                        </div>
                    </div>
                    <div className="btn-wrapper text-center my-3">
                        <Button size="lg" className="submit-btn m-3 border-0">Check Keyword Density</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}