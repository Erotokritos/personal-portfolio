import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projectUrl} target="_blank">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h5>{title}</h5>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
