import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import TextIcon from "../../../../assets/icons/TextIcon";

export default function SearchBase() {
    return (
        <div className="url_tab">
            <Form>
                <div className="section-heading">
                    <h3>Enter keyword</h3>
                    <InputGroup className="mb-3" size="lg">
                        <InputGroup.Text id="basic-addon1"><TextIcon/></InputGroup.Text>
                        <Form.Control
                            type='text'
                            placeholder="Enter your URL like https://example.com..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div className="btn-wrapper text-center my-3">
                        <Button size="lg" className="submit-btn m-3 border-0">Check Keyword Density</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}