import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './style.css'

const PortfolioItem = (props) => {
    return (
        <Row className='rounded-lg mx-2 my-2 p-item'>
            <Col md='6' className='bg-dark p-1'>
                <img className='img-fluid img-thumbnail text-center' src={`${process.env.PUBLIC_URL}/assets/images/${props.item.image.src}`}
                    alt={props.item.name} />
            </Col>
            <Col md='6' className='w-100 py-1'>
                <h2 heading>{props.item.name}</h2>
                <hr />
                {props.item.description}
                <Container>
                    {/* <hr />
                    <Row>
                        <h3>Built with:</h3>

                    </Row> */}
                    <hr />
                    <Row><h3>Links:</h3></Row>
                    <Row>                   
                        {props.item.links.map((item) => <Button href={item.src}>{item.name}</Button>)}
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export default PortfolioItem;