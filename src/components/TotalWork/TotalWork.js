import React, { Component} from "react";
import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { BiAtom } from "react-icons/bi";


class TotalWork extends Component {
    render () {
        return (
             
            <Fragment> 

                <Container fluid  className='TotalWork p-0'>
                 <div className='totalworkoverlay'>
                    <Container className='text-center'>
                        <Row className="countsection">
                            <Col lg={8} md={6} sm={12}>
                            <h1 className="countnumber">
                            <CountUp start={0} end={100}>
  {({ countUpRef, start }) => (
    <div>

        <VisibilitySensor onChange={start}> 
        <span ref={countUpRef} />
      
        </VisibilitySensor>
      
    </div>
  )}
</CountUp>
                            
                            
                            </h1>
                            <h4 className="counttitle"> total projects</h4>
                            </Col>
                            <Col>
                            <h1 className="countnumber">
                            <CountUp start={0} end={100}>
  {({ countUpRef, start }) => (
    <div>

        <VisibilitySensor onChange={start}> 
        <span ref={countUpRef} />
      
        </VisibilitySensor>
      
    </div>
  )}
</CountUp>
                            
                
                            
                            
                            
                            
                            </h1>
                            <h4 className="counttitle">total client</h4>
                            </Col>

                            <Col>
                            <Row> 
                            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         <p> <BiAtom />hello</p> 
         <p> <BiAtom />hello js</p>
         <p> <BiAtom />hello react js  </p>
        </Card.Text>
        
      </Card.Body>
    </Card>
   
                            
                  </Row>
                            </Col>
                        </Row>
                    </Container>


                 </div>
                    
                </Container>
            </Fragment>
        );
    }
}
 
export default TotalWork;