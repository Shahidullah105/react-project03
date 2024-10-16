import React, { Component, Fragment } from 'react'
import { Container, Row, Col  } from 'react-bootstrap'

export default class Pagetitle extends Component {
  render() {
    return (
      <Fragment>
         <Container fluid className='topheader p-0'>
         <div className='TopOverlay'>

            <Container> 
                <Row> 
                    <Col className='text-center'> 
                     <div className="TopContainer"> 
                        <h2 className='TopTitle'> {this.props.Pagetitle}</h2>
                     </div>
                 </Col>
                </Row>
            </Container>
         </div>
         </Container>

      </Fragment>
    )
  }
}
