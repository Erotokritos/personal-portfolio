import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ehealth from "../assets/img/ehealth.png";
import underDev from "../assets/img/underDev.jpg";
import portfolioImg from '../assets/img/portfolio.png';
import letitrainimg from "../assets/img/letitrainimg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const websites = [
    {
      title: "User Profile Management Systems",
      description: "Design & Development for Master Thesis",
      imgUrl: ehealth,
      projectUrl: "#",
      projectGitHub: "https://github.com/Erotokritos/e-health"
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: portfolioImg,
      projectUrl: "https://erotokritos.github.io/personal-portfolio/",
      projectGitHub: "https://github.com/Erotokritos/personal-portfolio"
    },
    {
      title: "MyGameList",
      description: "Under Development",
      imgUrl: underDev,
      projectUrl: "#",
      projectGitHub: "#"
    },
  ];
  const games = [
    {
      title: "Let it Rain",
      description: "Design & Development with Unity",
      imgUrl: letitrainimg,
      projectUrl: "https://play.unity.com/mg/other/let-it-rain",
      projectGitHub: "#",
    },
    {
      title: "RPG",
      description: "Under Development",
      imgUrl: underDev,
      projectUrl: "#",
      projectGitHub: "#",
    },
    {
      title: "ZombsNation",
      description: "Under Development",
      imgUrl: underDev,
      projectUrl: "#",
      projectGitHub: "#",
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
                  </Nav>
                  <p>My worth-mentioning projects</p>
                  <p>Hover on the cards and click on "Demo" or "Git" Buttons to check them out</p>
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
