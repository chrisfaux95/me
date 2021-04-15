import React from 'react';
import PortfolioItem from '../../components/PortfolioItem';
import works from '../../util/portfolio_list.json';
import { Container } from 'reactstrap';

const Portfolio = (props) => {
    return (
        <main class='text-center'>
            <h1>My Portfolio</h1>
            <hr></hr>
            <Container>
                {works.map((item) => <PortfolioItem item={item} />)}
            </Container>
        </main>
    )
}

export default Portfolio;