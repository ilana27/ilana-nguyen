import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import tedTalk from "../assets/img/tedxpic.svg";
import React, { useState } from 'react';

export const Media = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      const LinkWithHoverColor = ({ url, text, hoverColor }) => {
        const [isHovered, setIsHovered] = useState(false);
      
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
      
        const linkStyle = {
          color: isHovered ? hoverColor : 'white',
          textDecoration: 'underline',
          transition: 'color 0.3s ease',
        };
      
        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {text}
          </a>
        );
      };
      

    return (
        <section className="media" id="media">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Media 
                            </h2>
                            <img src={tedTalk} alt="TEDx Talk" />
                            <p>Hover over this <LinkWithHoverColor url="https://example.com" text="link" hoverColor="pink" /> for color change.</p>
                            {/* <p>I talk about my research, equitable STEMxHumanities education, social tech, and youth wellbeing:</p> */}
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div>
                                Building Diversity and IoT Expertise into Next-Gen Tech Leaders
                                </div>
                                {/* <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Data Science</h5>
                                </div> */}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}