import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function breadcrumpPage({Currentpage}) {
  return (
<Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{Currentpage}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default breadcrumpPage