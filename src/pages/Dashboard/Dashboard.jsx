import React from 'react'
import {Container,Row,Col,Button} from'react-bootstrap'
import TicketTable from '../../components/TicketTable/TicketTable'
import ticket from '../../assets/data/dummy-ticket.json'
import BreadcrumpPage from '../../components/breadcrump/BreadcrumpPage'

function Dashboard() {
  return (
   <Container>
    <Row>
        <Col>
        <BreadcrumpPage Currentpage="Dashboard"/>
        </Col>
    </Row>

    <Row>
        <Col className='text-center mt-5 mb-2'>
        <Button variant="dark" style={{'fontSize':'2rem',paddding:'10px 30px'}}>
            Add new ticket</Button>
        </Col>
    </Row>
    <Row>
        <Col className='text-center mb-2'>
        <div>Total ticket:50</div>
        <div>Pending ticket:5</div>
        </Col>
    </Row>
    <Row>
        <Col className='mt-2'>
       Recentaly added ticket
        </Col>
    </Row>
    <Row>
        <Col className='recentTicket'>
       <TicketTable ticket={ticket}/>
        </Col>
    </Row>
   </Container>
  )
}

export default Dashboard