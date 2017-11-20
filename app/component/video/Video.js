import React, {Component} from "react";

class Video extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="Video">
                <a href="#">
                    <img src={this.props.src} alt=""/>
                    <h5>{this.props.h5}</h5>
                    <p>点击播放<span></span></p>
                </a>

            </div>

        )
    }
}


export default  Video;




