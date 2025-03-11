import PropTypes from 'prop-types'
import { Component } from "react";
// import { useRef } from 'react';
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package
import gsap from 'gsap'; // <-- import GSAP
gsap.registerPlugin(useGSAP);

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: `lorem30`
        };
    }

    render() {
        const { content } = this.state;
        return (
            <div className="container">
                <h1>{content}</h1>
            </div>
        )
    }
}
Container.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Container