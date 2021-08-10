import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../Project';
import '../../styles/Portfolio.css';
import kidsCornerImage from '../../assets/KidsCornerProject.png';

export default function Portfolio() {
  return (
    <Fragment>
      <Container>
        <h1>Portfolio</h1>
        <Row xs={1} med={2} lg={3}>
          <Col>
            <Project
              title="Kids Corner"
              imageSrc={kidsCornerImage}
              altImage="Kids Corner"
              linkPath="https://github.com/Donnastjames/Project-1"
            />
          </Col>
          <Col>
            <Project
              title="Kids Corner"
              imageSrc={kidsCornerImage}
              altImage="Kids Corner"
              linkPath="https://github.com/Donnastjames/Project-1"
            />
          </Col>
          <Col>
            <Project
              title="Kids Corner"
              imageSrc={kidsCornerImage}
              altImage="Kids Corner"
              linkPath="https://github.com/Donnastjames/Project-1"
            />
          </Col>
        </Row>

        <Row xs={1} med={2} lg={3}>
          <Col>
            <Project title="Kids Corner" imagePath="" altImage= "" linkPath="https://github.com/Donnastjames/Project-1" />
          </Col>
          <Col>
            <Project title="Kids Corner" imagePath="" altImage= "" linkPath="https://github.com/Donnastjames/Project-1" />
          </Col>
          <Col>
            <Project title="Kids Corner" imagePath="" altImage= "" linkPath="https://github.com/Donnastjames/Project-1" />
          </Col>
        </Row>

        
      </Container>
    </Fragment>

  );
}
