import React from 'react'
import {Table} from 'react-bootstrap'

function TicketTable({ticket}) {
  return (
    <>
    <Table  bordered hover>
        <thead>
            <tr>
                <th>S.no</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            {ticket.length ? ticket.map((row)=>
            
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject}</td>
                <td>{row.status}</td>
                <td>{row.createdAt}</td>
            </tr>
            ): <tr>
            <td>No ticket to show</td>
            
        </tr>
}
            
        </tbody>
    </Table>
    </>


  )
}

export default TicketTable