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
          textDecoration: 'none',
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
                            <p>I gave a talk at TEDxOakland on <LinkWithHoverColor url="https://www.ted.com/talks/teens_technology_and_the_antidote" text="Teens, Technology, and the Antidote" hoverColor="#AA367C" />!</p>
                            {/* <p>I talk about my research, equitable STEMxHumanities education, social tech, and youth wellbeing:</p> */}
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                <p>UC Irvine <br></br> <LinkWithHoverColor url="https://ics.uci.edu/2023/12/08/building-diversity-and-iot-expertise-into-next-gen-tech-leaders/" text="Building Diversity and IoT Expertise into Next-Gen Tech Leaders" hoverColor="#AA367C" /></p>
                                </div>
                                <div className="item">
                                <p>Forbes <br></br><LinkWithHoverColor url="https://www.forbes.com/sites/maryjuetten/2021/01/14/tackling-our-stem-education-challenge-innoverge/" text="Tackling Our STEM Education Challenge: Innoverge" hoverColor="#AA367C" /></p>
                                </div>
                                <div className="item">
                                <p>Headstream Innovation <br></br><LinkWithHoverColor url="https://open.spotify.com/episode/1HY9Z2sopEr7CivZA53Uyl" text="Navigating Your River of Wellness with Digital Technology with Ilana Nguyen" hoverColor="#AA367C" /></p>
                                </div>
                                <div className="item">
                                <p>Psychology Today <br></br><LinkWithHoverColor url="https://www.psychologytoday.com/us/blog/z-alpha/202007/3-ways-tech-can-support-teens-right-now" text="3 Ways Tech Can Support Teens Right Now" hoverColor="#AA367C" /></p>
                                </div>
                                <div className="item">
                                <p>And She Did. <br></br><LinkWithHoverColor url="https://open.spotify.com/episode/47yFmAwl6v31S0XXuBj88N?si=S2vgLjekTy-E-8m1SX22aA&dl_branch=1&nd=1" text="Ilana Nguyen Wanted to Advance STEMx Education in Underserved Communities, And She Did." hoverColor="#AA367C" /></p>
                                </div>
                                <div className="item">
                                <p>Colonize This. <br></br><LinkWithHoverColor url="https://open.spotify.com/episode/2ZB1c7AaZRAIbDqupYVPVX?si=U7xP_kZOS2qKCtLKz0VY9Q&dl_branch=1&nd=1" text="Women in STEM+ ft. Ilana Nguyen" hoverColor="#AA367C" /></p>
                                </div>
                                <div className="item">
                                <p>The Citizen <br></br><LinkWithHoverColor url="https://peraltacitizen.com/2019/11/05/talking-tech-social-issues-and-social-equity-tedx-oakland-comes-to-laney/" text="Talking Tech, Social Issues, and Social Equity: TEDx Oakland Comes to Laney" hoverColor="#AA367C" /></p>
                                </div>
                                <div className="item">
                                <p>Pixel Journal <br></br><LinkWithHoverColor url="https://www.pixeljournal.org/stories-blog/2019/11/22/inside-ilana-nguyens-tedx-talk" text="Inside Ilana Nguyen's TEDx Talk" hoverColor="#AA367C" /></p>
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