import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Portfolio.css';

const styles = {
  sectionStyles: {
    fontFamily: 'Georgia, Times New Roman, Times, serif',
  },
};

export default function Project(props) {
  const { title, imageSrc, linkPath, altImage } = props;

  return (
    <Button
      variant="link"
      active
      href={linkPath}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.sectionStyles}
    >
      <h4>{title}</h4>
      <Card style={{ width: '100%', height: '100%', zIndex: '-1'}}>
        <Card.Img src={imageSrc} alt={altImage} fluid />
      </Card>
    </Button>
  );

}