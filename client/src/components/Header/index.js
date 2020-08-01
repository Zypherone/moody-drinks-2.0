import React from 'react'
import Nav from 'components/Nav'
import { Col, Jumbotron } from 'react-bootstrap'

const Header = () => {

  return (
    <>
      <Nav />
      <Jumbotron fluid>
        <Col>
          <h1 className="display-4">Google Book Search</h1>
        </Col>
      </Jumbotron>
    </>
  )
}

export default Header