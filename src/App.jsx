// import {useState} from 'react'
// import './App.css'
// import './scss/main.scss';
import {Component} from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Container from "./components/Container.jsx";

class App extends Component {
    render() {
        return (
            <div className="wrapper" id="App">
                <Header />
                <Container content="Content" />
                <Footer />
            </div>
        )
    }
}

export default App
