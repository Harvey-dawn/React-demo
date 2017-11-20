
import React, {Component} from "react";

class Footer extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="Footer" >
                <div className="inner-c">
                    <ul className="clearfix">
                        <li><a href="#">网站地图</a></li>
                        <li>丨</li>
                        <li><a href="#">免责申明</a></li>
                        <li>丨</li>
                        <li><a href="#">监督举报</a></li>

                    </ul>

                    <p>Copyright © 217/11/18  Harvey-dawn  个人作品展示 <a href="http://github.com/Harvey-dawn">Github地址</a></p>
                    <p>  网络文化经营许可证：粤网文[2015]1991-405号&nbsp;|&nbsp;互联网出版许可证&增值电信业务经营许可证：粤B2-3</p>
                </div>

            </div>

        )
    }
}


export default  Footer;