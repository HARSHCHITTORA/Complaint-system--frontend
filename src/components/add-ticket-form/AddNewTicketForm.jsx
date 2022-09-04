import React from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
import PropTypes from 'prop-types'
import "./add-ticket-form.css"


function AddNewTicketForm({handleOnchange,handleonSubmit,frmError,frmData})
 {
  return (
    <>
    <div className="jumbotron mt-3 add-new-ticket">
        <h1 className='text-dark text-center' >Add New Ticket</h1>
        <br/>
    <Form onSubmit={handleonSubmit}>
                <Form.Group  as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                    <Form.Control 
                    type="text"
                    name="subject"
                    // minLength="3" 
                    maxLength="20"
                    onChange={handleOnchange}
                    placeholder='Enter subject'
                    value={frmData.subject}
                    required
                    />
                    <Form.Text className="text-danger">
                        {frmError.subject && "subject is required"}
                    </Form.Text>
                    </Col>
                </Form.Group>
                <br/>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found Date</Form.Label>
                    <Col sm={9}>
                    <Form.Control 
                    type="date"
                    name="issuedate"
                    onChange={handleOnchange}
                    // placeholder='password'
                    // value={password}
                    value={frmData.issuedate}
                    required
                    />
                    </Col>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Write your issue</Form.Label>
                    <Form.Control
                    as="textarea"
                    name="issue"
                    onChange={handleOnchange}
                    // placeholder='password'
                    // value={password}
                    value={frmData.issue}
                    required
                    />
                </Form.Group><br/>
                <Button type="submit" variant="dark" block>Add ticket</Button>
            </Form>

    </div>
    </>
  )
}

export default AddNewTicketForm

AddNewTicketForm.propTypes={
    handleOnchange:PropTypes.func.isRequired,
    handleonSubmit:PropTypes.func.isRequired,
    frmData:PropTypes.object.isRequired, 

}