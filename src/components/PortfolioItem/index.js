import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const PortfolioItem = (props) => {
    return (
        <Row className='rounded-lg mx-2 my-2 py-2 bg-secondary'>
            <Col md='3'>
                <img className='img-fluid img-thumbnail text-center' src={`${process.env.PUBLIC_URL}/assets/images/${props.item.image.src}`}
                    alt={props.item.name} />
            </Col>
            <Col md='6'>
                <h1 heading>{props.item.name}</h1>
                {props.item.description}
            </Col>
        </Row>
    )
}

export default PortfolioItem;