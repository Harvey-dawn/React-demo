import React, {Component} from "react";
import Head from "./component/head/Head.js";
import Banner from "./component/banner/Banner";
import  Top from "./component/top/Top";
import Round from "./component/round/Round";
import Video from "./component/video/Video";
import Footer from "./component/footer/Footer"
import { setInterval } from "timers";

class App extends Component {





    componentDidMount(){
        var num = 1;
		setInterval(function(){
            console.log(num++);

        },1000)
	}



    render() {
        return (
            <div >

                <Head></Head>
                <Banner src="images/zjoinbanner.png"></Banner>
                <Top></Top>
                <div id="rounds">
                    <ul>
                        <li><Round bgc="white"></Round></li>
                        <li><Round bgc="#99B7F3"></Round></li>
                        <li><Round bgc="#99B7F3"></Round></li>
                        <li><Round bgc="#99B7F3"></Round></li>
                        <li><Round bgc="#99B7F3"></Round></li>
                    </ul>
                </div>
                <div id="videos">
                    <ul className="inner-c clearfix">
                        <li>
                            <Video h5="博雅互动宣传视频" src="images/video.jpg"></Video>
                        </li>
                        <li>
                            <Video h5="BTP宣传片" src="images/BBT2017a331x195.jpg"></Video>
                        </li>
                        <li>
                            <Video h5="麻将全集" src="images/byamaj.jpg"></Video>
                        </li>
                        <li>
                            <Video h5="中国全集" src="images/gamepic10.jpg"></Video>
                        </li>
                    </ul>
                    <ul className="v-rounds">
                        <li><Round bgc="#38B774"></Round></li>
                        <li><Round bgc="#B0BCC8"></Round></li>
                    </ul>
                </div>
                <div id="notify" className="inner-c clearfix">
                    <div className="news">
                        <div className="ntitle">
                            <img src="images/new_bg2.png" alt="" className="new-bg"/>
                            <img src="images/news.png" alt=""/>
                            <h2>博雅新闻</h2>
                            <p>BOYAA NEWS</p>
                            <a href="#" className="N-more">
                                MORE
                                <span>+</span>
                            </a>
                        </div>
                        <div className="newsList">
                            <ul>
                                <li>
                                    <a href="#">2017博雅互动云南高校象棋争霸赛即将开赛</a>
                                    <span>11/16</span>
                                </li>
                                <li>
                                    <a href="#">2017博雅互动云南高校象棋争霸赛即将开赛</a>
                                    <span>11/16</span>
                                </li>
                                <li>
                                    <a href="#">2017博雅互动云南高校象棋争霸赛即将开赛</a>
                                    <span>11/16</span>
                                </li>
                                <li>
                                    <a href="#">2017博雅互动云南高校象棋争霸赛即将开赛</a>
                                    <span>11/16</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="jobs">
                        <div className="ntitle">

                            <img src="images/person2.png" alt=""/>
                            <h2>专场招聘</h2>
                            <p>BOYAA NEWS</p>
                            <a href="#" className="N-more">
                                MORE
                                <span>+</span>
                            </a>
                        </div>
                        <img className="person" src="images/person.png" alt=""/>
                        <div className="jobList">
                            <h4>专场找聘:</h4>
                            <ul>
                                <li><a href="#">PHP开发工程师</a></li>
                                <li><a href="#">WEB开发工程师</a></li>
                                <li><a href="#">JAVA开发工程师</a></li>
                                <li><a href="#">C++开发工程师</a></li>
                            </ul>
                        </div>
                    </div>


                </div>
                <Footer></Footer>
            </div>

        )
    }
}


export default  App;


