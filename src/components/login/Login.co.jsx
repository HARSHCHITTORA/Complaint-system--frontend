import React from 'react'
import PropTypes from'prop-types'
import {Container,Row,Col,Form, Button} from 'react-bootstrap'

function Login({handleOnchange,email,password,handleonSubmit, formSwitcher}) {
  return (
    <Container>
        <Row>
            <Col>
            <h3 className='text-info text-center'>Client Login</h3>
            
            <hr/>
            <Form onSubmit={handleonSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                    type="email"
                    name="email"
                    onChange={handleOnchange}
                    placeholder='Enter Email'
                    value={email}
                    required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passwords</Form.Label>
                    <Form.Control
                    type="password"
                    name="password"
                    onChange={handleOnchange}
                    placeholder='password'
                    value={password}
                    required
                    />
                </Form.Group><br/>
                <Button type="submit" >Login</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            
            <hr/>
            <a href="#" onClick={()=> formSwitcher('reset')}>Forgot Password ?</a>
            </Col>
        </Row>
    </Container>
  )
}




Login.propTypes={
    handleOnchange:PropTypes.func.isRequired,
    handleonSubmit:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    
    
}
export default Login
