import { Col } from"react-bootstrap";

export const ProjectDescription = ({ title, description }) => {

    const descList = description.split('. ');
  
    return (
      <Col sm={8} md={6}>
        <div>
          <h4>{title}</h4>
          <ul>
            {descList.map(item => (
              <li>{item}</li>  
            ))}
          </ul>
        </div>
      </Col>
    )
  
  }