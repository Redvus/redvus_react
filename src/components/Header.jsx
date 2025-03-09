import {Component} from "react";
import Nav from "./Nav.jsx";

class Header extends Component {
    render() {
        return(
            <header className="header">
                <Nav />
            </header>
        )
    }
}

export default Header