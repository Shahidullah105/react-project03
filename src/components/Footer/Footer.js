import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>

       <Container> 

        <Row> 
            <Col> 
            <h2> ninestar</h2>
            <p>A108 Adam Street,
              New York  </p>
            <p> <strong>Phone:+8801911154482</strong></p>
            <p><strong>Email:kaisar@gmail.com</strong></p>
            </Col>
        </Row>
          
          <Row>
            <Col> 
            
        <div>  <h4> Our Services </h4>
        <ul>
            <li> Home</li>
            <li>About</li>
            <li>Contact</li>
            <li> Portfolio</li>
            <li>Service</li>
        </ul>
        
        </div> 
            
            </Col>
          </Row>

          <Row> 
            <Col> 
            <h5> Our Social Network</h5>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.  </p>
            <i> <FaFacebook /></i>
            <i> <FaInstagram /></i>
            <i> <FaTwitter /></i>
            <i> <FaLinkedin /></i>
            <i> <FaSkype /></i>

            </Col>

          </Row>
          <div>
            <p> @CopyWrite by ninestars, All Rights Reserved </p>
            <p> Designed by bootstrap</p>
          </div>

       </Container>
      </Fragment>
    )
  }
}
