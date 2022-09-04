import React from 'react'
import PropTypes from'prop-types'
import {Container,Row,Col,Form, Button} from 'react-bootstrap'

function PasswordReset({handleOnchange,email,handleonResetSubmit,formSwitcher}) {
  return (
    <Container>
    <Row>
        <Col>
        <h3 className='text-info text-center'>Reset Password</h3>
        
        <hr/>
        <Form onSubmit={handleonResetSubmit}>
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
            <br/>
            <Button type="submit" >Reset Password</Button>
        </Form>
        </Col>
    </Row>
    <Row>
        <Col>
        
        <hr/>
        <a href="#" onClick={()=>formSwitcher('login')}>Login now</a>
        </Col>
    </Row>
</Container>
  )
}

PasswordReset.propTypes={
    handleOnchange:PropTypes.func.isRequired,
    handleonResetSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,

    email:PropTypes.string.isRequired,
   
    
    
}
export default PasswordReset