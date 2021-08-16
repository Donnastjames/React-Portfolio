import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  sectionStyles: {
    fontFamily: 'Georgia, Times New Roman, Times, serif',
    textDecoration: 'none',
  },
};

export default function Project(props) {
  const { title, imageSrc, linkPath, githubLink, altImage } = props;

  return (
    <Fragment>
      <Button
        variant="link"
        active
        href={linkPath}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.sectionStyles}
      >
        <h4>
          {title}&nbsp;
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            alt="github"
          >
            <FontAwesomeIcon icon={['fab', 'github']} size={'10px'}/>
          </a>
        </h4>
        <Card style={{ width: '100%', height: '100%', zIndex: '-1'}}>
          <Card.Img src={imageSrc} alt={altImage} fluid />
        </Card>
      </Button>
    </Fragment>
  );

}