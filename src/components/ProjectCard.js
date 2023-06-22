import { Col,Row} from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl, projectGitHub }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="sample"/>
        <div className="proj-txtx">
          <h5>{title}</h5>
          <span>{description}</span>
          <div className="proj-btn">
            <Row>
            {
              projectUrl!=="#"?(
                <>
                <a href={projectUrl} target="_blank" className="btn btn-secondary btn-lg active" role="button">Demo</a>
                </>):
                <></>}
            {
              projectGitHub!=="#"?(
                <>
                <a href={projectGitHub} target="_blank" className="btn btn-secondary btn-lg active" role="button">GitHub</a>
                </>
              ):
              <></>
            }
          </Row>
          </div>
        </div>
      </div>
    </Col>
  )
}
