import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Figure, FigureCaption } from 'react-bootstrap';
import { Card, CardBody, CardTitle, CardText } from 'react-bootstrap';
import icon3 from '../../asset/images/web.jpg';



export default class Ourcourse extends Component {
  render() {
    return (
      <Fragment>

        <Container className='ourcourse'> 
            
            <Row> 
              <h1 className='text-center'> Our Courses</h1> 
              <Col> 
              <Figure>
      <Figure.Image
        width={200}
        height={400}
        alt="171x180"
        src=""
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  

              
              
              </Col>

            </Row>
            <Row> 
              <Col> 
              <div  className='servicecard text-center'>
                            <img src={icon3} alt="150px"  /> 
                                <Card.Body>
                                    <Card.Title>Graphic Design</Card.Title>
                                    <Card.Text  className='oness'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    
                                </Card.Body>
                            </div>
              
              
               </Col>
            </Row>

        </Container>
      </Fragment>
    )
  }
}
