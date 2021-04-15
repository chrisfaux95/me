import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import './style.css'


const About = (props) => {
    return (
        <Container className='mx-auto my-5 rounded'>
            <Row>
                <h1>About Me:</h1>
            </Row>
            <Row>
                <Col md='3'>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/self.jpg`} alt="Chris Faux" className="img-thumbnail"
                        id="selfimg"
                        />
                </Col>
                <Col md='8'>
                    <p>
                        Chris Faux: A 25 year old programmer living in the Baltimore area. Knowledgable in HTML, CSS,
                        Javascript, Java, and Python.  Has experience with both MYSQL and MongoDB.
                        </p>
                    <p>
                        Email: <a href="mailto:chrisfaux95@gmail.com">chrisfaux95@gmail.com</a>
                    </p>
                    <div id='socials'>
                        <Button
                            color='primary'
                            href="https://github.com/chrisfaux95">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/icons/github.png`}
                                alt="GitHub"
                            />
                        </Button>
                        <Button color="primary"
                            href="https://www.linkedin.com/in/christopher-faux/">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/icons/linkedin.png`} alt="LinkedIn" />
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About