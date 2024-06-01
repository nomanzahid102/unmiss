import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DownIcon from "../../../../assets/icons/DownIcon";
import WordIcon from "../../../../assets/icons/WordIcon";
import RefreshIconImage from "../../../../assets/images/refresh-icon.png";

export default function TextBase() {
    return (
        <div className="url_tab">
            <Form>
                <div className="section-heading">
                    <div className="text-area-section">
                        <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={12} placeholder='Put text Here'/>
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