import {Component} from "react";
// import { useRef } from 'react';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package
gsap.registerPlugin(useGSAP);

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: 'Title'
        };
    }

    render() {
        // const {content} = this.props;
        return (
            <div className="container">
                <h1>{this.state.content}</h1>
            </div>
        )
    }
}

export default Container