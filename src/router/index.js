
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home';
import Menu from '../components/menu';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import ContactUs from '../components/contact-us';
import About from '../components/about';

const AppRouter = () => {
    return (
        <main>
            <NavBar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/menu" component={Menu} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/about" component={About} />
            </Switch>
            <Footer />
        </main>
    )
}

export default AppRouter;