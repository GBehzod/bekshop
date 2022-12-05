import React, {useState} from 'react'
import {Button, Col, Form, Row} from 'react-bootstrap'
import {useLocation, useNavigate} from "react-router-dom";

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate()
    const location = useLocation()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        } else {
            navigate(location.pathname)
        }
    }
    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Col>
                    <Form.Control
                        type='text'
                        name='q'
                        placeholder="Search..."
                        onChange={(e) => setKeyword(e.target.value)}
                    ></Form.Control>
                </Col>
                <Col xs="auto">
                    <Button
                        type='submit'
                        variant='outline-success'
                        className='p-2'
                    >
                        Go
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox
