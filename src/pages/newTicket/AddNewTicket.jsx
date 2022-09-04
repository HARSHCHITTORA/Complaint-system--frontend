import React,{useState} from 'react'
import { useEffect } from 'react'
import {Container,Row,Col} from'react-bootstrap'
import AddNewTicketForm from '../../components/add-ticket-form/AddNewTicketForm'
import BreadcrumpPage from '../../components/breadcrump/BreadcrumpPage'
import { shortText } from '../../utils/validation'
const initialFrmData={
  subject:'',
  issuedate:'',
  issue:''
} 
const initialFrmError={
  subject:false,
  issuedate:false,
  issue:false
} 
function AddNewTicket() {

  const [frmData, setFrmData] = useState(initialFrmData);
  const [frmError, setFrmError] = useState(initialFrmError);
  useEffect(()=>{

  },[frmData,frmError])
  //handleOnchange
  const handleOnchange=e=>{
    const {name,value}=e.target;
    console.log(name,value);

    setFrmData({
      ...frmData,
      [name]:value, 
    })
  };

  const handleOnsubmit=async(e)=>{
    e.preventDefault()
    setFrmError(initialFrmError)
    const isvalid=await shortText(frmData.subject)

  setFrmError({
      ...initialFrmError,
      subject:!isvalid,
       
    })
    console.log("Form submit request occur",frmData)
  }

  //handleOnsubmit

  return (
    <>
    <Container>
        <Row>
            <Col>
            <BreadcrumpPage Currentpage='newticket'/>

            </Col>
        </Row>
        <Row>
            <Col>
            <AddNewTicketForm handleOnchange={handleOnchange}
            handleonSubmit={handleOnsubmit}
            frmError={frmError}
            frmData={frmData}/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default AddNewTicket 