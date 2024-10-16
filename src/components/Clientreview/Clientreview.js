 import React, { Component, Fragment } from 'react'
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-bootstrap';
import icon1 from '../../asset/images/icon1.jpeg';
import Slider from 'react-slick';
import { TbUserEdit } from 'react-icons/tb';
 
 export default class Clientreview extends Component {
   render() {
         
    var settings = {
        autoplayspeed:3000,
        autoplay:true,
        vertical:true,
        verticalswiping:true,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 4,
        initialSlide: 0,
        slidesToScroll:1,

        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };








     return (
       <Fragment>
            <Container> 
                <h1 className='text-center p-4'> Client Says</h1> 
                <Slider {...settings}>
                <Row className='text-center'>
                    <Col>
                    <img className='imagecss' src={icon1} alt=''/>
                    <h1> web developer</h1>
                    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                </Row>


                <Row className='text-center'>
                    <Col>
                    <img className='imagecss' src={icon1} alt=''/>
                    <h1> web developer</h1>
                    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                </Row>
                </Slider>
            </Container>

       </Fragment>
     )
   }
 }
 
