import {Component} from "react";
import Nav from "./Nav.jsx";

class Footer extends Component {
    render() {
        return(
            <footer className="footer" id="footer">
                <Nav />
                <div className="author">Redvus</div>
            </footer>
        )
    }
}

export default Footer