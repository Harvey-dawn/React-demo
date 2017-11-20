import React, {Component} from "react";

class Banner extends Component {

constructor (props) {
    super();

}
    render () {
        return (
            <div id="banner">
                <img src={this.props.src} alt=""/>
            </div>

        )
    }
}


export default  Banner;