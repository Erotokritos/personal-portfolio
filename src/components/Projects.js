import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import letitrainimg from "../assets/img/letitrainimg.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const websites = [
    {
      title: "User Profile Management Systems",
      description: "Design & Development for Master Thesis",
      imgUrl: projImg1,
      projectUrl: "https://play.unity.com/mg/other/let-it-rain"
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg2,
      projectUrl: "https://play.unity.com/mg/other/let-it-rain"
    },
    {
      title: "MyGameList",
      description: "Design & Development with ReactJS",
      imgUrl: projImg3,
      projectUrl: "https://play.unity.com/mg/other/let-it-rain"
    },
  ];
  const games = [
    {
      title: "Let it Rain",
      description: "Design & Development with Unity",
      imgUrl: letitrainimg,
      projectUrl: "https://play.unity.com/mg/other/let-it-rain"
    },
    {
      title: "RPG",
      description: "Design & Development with C++ and SDL2",
      imgUrl: projImg2,
      projectUrl: "https://play.unity.com/mg/other/let-it-rain"
    },
    {
      title: "ZombsNation",
      description: "Design & Development with Unreal Engine",
      imgUrl: projImg3,
      projectUrl: "https://play.unity.com/mg/other/let-it-rain"
    },
  ];
  const apps = [
    {
      title: "Hospital Management",
      description: "Design & Development with Unity",
      imgUrl: projImg1,
      projectUrl: "https://play.unity.com/mg/other/let-it-rain"
    },
    {
      title: "User Profile Management",
      description: "Design & Development",
      imgUrl: projImg2,
      projectUrl: "https://play.unity.com/mg/other/let-it-rain"
    },
    {
      title: "1App",
      description: "Design & Development with C++",
      imgUrl: projImg3,
      projectUrl: "https://play.unity.com/mg/other/let-it-rain"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="websites">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="websites">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="games">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="apps">Apps</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <p>This sections is currently under construction</p>
                  <p>Sample images and projects are shown</p>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="websites">
                      <Row>
                        {
                          websites.map((website, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...website}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="games">
                      <Row>
                        {
                          games.map((game, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...game}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="apps">
                      <Row>
                        {
                          apps.map((app, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...app}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
     
    </section>
  )
}
