import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectDescription } from "./ProjectDescription";
import colorSharp2 from "../assets/img/color-sharp2.png";
import wicsImg1 from "../assets/img/wics1.png";
import wicsImg2 from "../assets/img/wics2.png";
import innovergeImg1 from "../assets/img/innoverge1.png";
import innovergeImg2 from "../assets/img/innoverge2.png";
import innoverge from "../assets/img/innoverge.jpeg";
import dlposter from "../assets/img/dlposter.png";
import vitposter from "../assets/img/vitposter.png";
import uci from "../assets/img/uci.jpeg";
import journal from "../assets/img/journal.png";

export const Projects = () => {

    const dlprojects = [
        {
          title: "Predicting Fall Risk using Bio-Clinical BERT on Nursing Notes",
          description: "UCI REU IoT-SITY Research Project",
          imgUrl: dlposter,
        },
        {
          title: "Vision Transformer",
          description: "CSCI 1470 Deep Learning Final Project",
          imgUrl: vitposter,
        }
      ];

    const webprojects = [
        {
          title: "Women in CS Website",
          description: "Frontend Development",
          imgUrl: wicsImg1,
        },
        {
          title: "Women in CS Website",
          description: "Frontend Development",
          imgUrl: wicsImg2,
        },
        {
            title: "Innoverge Website",
            description: "Design & Development",
            imgUrl: innovergeImg1,
        },
        {
          title: "Innoverge Website",
          description: "Design & Development",
          imgUrl: innovergeImg2,
        }
      ];

    const projectDetails = [
        "Joined as a founding member of Innoverge in 2020 (Originally EduSTEM in 2018)",
        "Led our growth to an international impact of 10.2k students through 400+ workshops run across 14 countries!"
      ];
      
      const ProjectDetailsComponent = ({ details }) => (
        <ul>
          {details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      );

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p></p>
                        {/* <p>Take a look at some of my projects!</p> */}
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Coding</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">AI Research</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Community Ventures</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                        <Tab.Pane eventKey="first">
                                    <Row>
                                    <ProjectCard 
                                        title="Journal AI Buddy"
                                        description="Main page"
                                        imgUrl={journal}
                                    />
                                    <ProjectDescription
                                      title="MIND: Journal AI Buddy
                                      "
                                      description="Collaborating with a team of 3 to build custom backend and frontend for a journaling website that generates daily prompts, saves past journal entries for a user, and uses an ML vector similarity recommendation algorithm to personalize and rank mental health suggestions generated from the journal content through the OpenAI API.
                                      Conducted user research and incorporated feedback into product from 10+ potential users and therapists
                                      "
                                      /> 
                                    </Row>
                                    
                                    </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                    <Row>
                                    <ProjectCard 
                                        title="UCI REU Research"
                                        description="UCI Final Symposium"
                                        imgUrl={uci}
                                    />
                                    <ProjectDescription
                                      title="Predicting Fall Risk using Bio-Clinical BERT on Nursing Notes
                                      "
                                      description="Developed a Python pipeline for a deep learning classification model for patient fall risk assessment using a foundation large language model, Bio-Clinical BERT, on nurse’s notes. 
                                      Delivered poster presentation at IEEE MIT Undergraduate Research Technology Conference in October 2023.
                                      Worked in NSF-funded REU research program with 7% acceptance rate led by Prof Nalini Venkatasubramanian
                                      "
                                      /> 
                                    </Row>
                                    
                                    </Tab.Pane>
                        
                            <Tab.Pane eventKey="third">
                            <Row>
                                    <ProjectCard 
                                        title="YMCA STEM workshop"
                                        description="Leading a workshop in my local community"
                                        imgUrl={innoverge}
                                    />
                                    <ProjectDescription
                                      title="Innoverge International Nonprofit"
                                      description="Joined as a founding member of Innoverge in 2020 (Originally EduSTEM in 2018).
                                      Led our growth to an international impact of 10.2k students through 400+ workshops run across 14 countries!"
                                      /> 
                                    </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}