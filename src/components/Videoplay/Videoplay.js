import React, { Component, Fragment } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { FaPlayCircle } from "react-icons/fa";

export default class Videoplay extends Component {
  render() {
    return (
      <Fragment>
          <Container className='text-center'>

            <Row> 
                <Col lg={12} sm={12} md={12} className='videocard'>
                  <p> How I Work</p>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nibh facilisis, gravida lacus ac, lobortis risus. Pellentesque augue orci, luctus in dolor eget, vulputate vehicula nisl. Sed eu ultrices arcu, nec auctor dolor. Integer ac eros sagittis justo feugiat iaculis eu non est. Mauris eget nisi nec turpis luctus imperdiet. Aliquam erat ante, dictum vitae ante vel, vestibulum porttitor nisi. 

                  </p>
                  <p> <FaPlayCircle className='playbutton' />
    
                  
                  </p>

                </Col>
            </Row>
          </Container>

      </Fragment>
    )
  }
}

