import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper'
import 'bootstrap';
import './App.scss';

function App() {
    return (
        <Router basename='/me'>
            <Wrapper>
                <Header />
                <Switch>
                    <Route
                        exact path="/"
                        render={() => <About />}
                    />
                    <Route
                        exact path="/portfolio"
                        render={() => <Portfolio />}
                    />

                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default App;
