import React from 'react';
import {Container,Row,Col,Form, Button} from 'react-bootstrap';
import PropTypes from "prop-types";

 function ResetPasswordForm ({handleonChange,handleonResetSubmit,formSwitcher,email})  {
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset Password </h1>
                    <hr/>
                    <Form onSubmit={handleonResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleonChange}
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>
                        
                        <Button type="submit">Reset Password</Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={()=>{formSwitcher('login')}}>Login Now</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPasswordForm.propTypes = {
    handleonChange:PropTypes.func.isRequired,
    handleonResetSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired
}

export default ResetPasswordForm;