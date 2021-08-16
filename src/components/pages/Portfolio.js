import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../Project';
import '../../styles/Portfolio.css';
import kidsCornerImage from '../../assets/KidsCornerProject.png';
import budgetTracker from '../../assets/BudgetTracker.gif';
import workoutTracker from '../../assets/fitnessTracker.gif';
import giftList from '../../assets/giftList.png';
import techBlog from '../../assets/TechBlog.gif';
import weatherDashboard from '../../assets/WeatherDashboard.gif';

const styles = {
  sectionStyles: {
    fontFamily: 'Georgia, Times New Roman, Times, serif',
  },
};

export default function Portfolio() {
  return (
    <Fragment>
      <Container>
        <h1 style={styles.sectionStyles}>Portfolio</h1>
        <Row xs={1} med={2} lg={3}>
          <Col>
            <Project
              title="Kids Corner"
              imageSrc={kidsCornerImage}
              altImage="Kids Corner"
              linkPath="https://github.com/Donnastjames/Project-1"
              githubLink="https://github.com/Donnastjames/"
            />
          </Col>
          <Col>
            <Project
              title="Gift List"
              imageSrc={giftList}
              altImage="Gift List"
              linkPath="https://github.com/Donnastjames/Project-2-Gift-List"
            />
          </Col>
          <Col>
            <Project
              title="Budget Tracker"
              imageSrc={budgetTracker}
              altImage="Budget Tracker"
              linkPath="https://github.com/Donnastjames/PWA-BudgetTracker"
            />
          </Col>
        </Row>

        <Row xs={1} med={2} lg={3}>
          <Col>
          <Project
              title="Workout Tracker"
              imageSrc={workoutTracker}
              altImage="Workout Tracker"
              linkPath="https://github.com/Donnastjames/Workout-Tracker"
            />
          </Col>
          <Col>
          <Project
              title="Tech Blog"
              imageSrc={techBlog}
              altImage="Tech Blog"
              linkPath="https://github.com/Donnastjames/Tech_Blog"
            />
          </Col>
          <Col>
          <Project
              title="Weather Dashboard"
              imageSrc={weatherDashboard}
              altImage="Weather Dashboard"
              linkPath="https://github.com/Donnastjames/Weather-Dashboard"
            />
          </Col>
        </Row>

        
      </Container>
    </Fragment>

  );
}
