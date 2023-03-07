import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import wicsImg1 from "../assets/img/wics1.png";
import wicsImg2 from "../assets/img/wics2.png";
import innovergeImg1 from "../assets/img/innoverge1.png";
import innovergeImg2 from "../assets/img/innoverge2.png";


export const Projects = () => {

    const projects = [
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

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Take a look at some of my projects!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Web dev</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Deep learning</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Data science</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">hi1</Tab.Pane>
                            <Tab.Pane eventKey="third">hi2</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}