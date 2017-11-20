import React, {Component} from "react";

class Head extends Component {


    render() {
        return (
            <div id="head">
                <div className="inner-c">
                    <a href="index.html" className="alogo">
                        <img src="images/brand.png" alt=""/>
                    </a>
                    <ul>
                        <li><a href="#">首页</a></li>
                        <li><a href="#">博雅游戏</a></li>
                        <li><a href="#">博雅新闻</a></li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">客服中心</a></li>
                        <li><a href="#">投资者关系</a></li>
                    </ul>
                    <a href="#" className="jrwm">加入我们</a>
                    <div className="language">
                        <p>中文</p>
                        <span><a href="#">EN</a></span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Head;