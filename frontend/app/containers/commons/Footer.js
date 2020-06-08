import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/footer.scss'

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                document.getElementById("TopBtn").style.display = "block";
            } else {
                document.getElementById("TopBtn").style.display = "none";
            }
        }
    }

    aboutChennai() {
        var aboutChennai = document.getElementById("aboutChennai");
        var aboutChennaiPlusIcon = document.getElementById("aboutPlusIcon");
        var aboutChennaiMinusIcon = document.getElementById("aboutMinusIcon");

        aboutChennai.style.display = aboutChennai.style.display == 'block' ? 'none' : 'block';
        aboutChennaiPlusIcon.style.display = aboutChennaiPlusIcon.style.display == 'none' ? 'block' : 'none';
        aboutChennaiMinusIcon.style.display = aboutChennaiMinusIcon.style.display == 'block' ? 'none' : 'block';

    }

    discoverChennai() {
        var discoverChennai = document.getElementById("discoverChennai");
        var discoverChennaiPlusIcon = document.getElementById("discoverPlusIcon");
        var discoverChennaiMinusIcon = document.getElementById("discoverMinusIcon");

        discoverChennai.style.display = discoverChennai.style.display == 'block' ? 'none' : 'block';
        discoverChennaiPlusIcon.style.display = discoverChennaiPlusIcon.style.display == 'none' ? 'block' : 'none';
        discoverChennaiMinusIcon.style.display = discoverChennaiMinusIcon.style.display == 'block' ? 'none' : 'block';

    }

    traditionCulture() {
        var traditionCulture = document.getElementById("traditionCulture");
        var tcPlusIcon = document.getElementById("tcPlusIcon");
        var tcMinusIcon = document.getElementById("tcMinusIcon");

        traditionCulture.style.display = traditionCulture.style.display == 'block' ? 'none' : 'block';
        tcPlusIcon.style.display = tcPlusIcon.style.display == 'none' ? 'block' : 'none';
        tcMinusIcon.style.display = tcMinusIcon.style.display == 'block' ? 'none' : 'block';

    }

    otherLinks() {
        var otherLinks = document.getElementById("otherLinks");
        var olPlusIcon = document.getElementById("olPlusIcon");
        var olMinusIcon = document.getElementById("olMinusIcon");

        otherLinks.style.display = otherLinks.style.display == 'block' ? 'none' : 'block';
        olPlusIcon.style.display = olPlusIcon.style.display == 'none' ? 'block' : 'none';
        olMinusIcon.style.display = olMinusIcon.style.display == 'block' ? 'none' : 'block';

    }

    stayConnected() {
        var stayConnected = document.getElementById("stayConnected");
        var stayPlusIcon = document.getElementById("stayPlusIcon");
        var stayMinusIcon = document.getElementById("stayMinusIcon");

        stayConnected.style.display = stayConnected.style.display == 'block' ? 'none' : 'block';
        stayPlusIcon.style.display = stayPlusIcon.style.display == 'none' ? 'block' : 'none';
        stayMinusIcon.style.display = stayMinusIcon.style.display == 'block' ? 'none' : 'block';

    }

    topFunction() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div>

                <div id="TopBtn" className="animated bounceInUp slower" title="Go to top" onClick={this.topFunction.bind(this)}></div>

                <div className="end-container">
                    <div className="end" />
                </div>

                <div className="detailed-container">
                    <div className="footer-row">
                        <div className="title">
                            <div className="paragraph">about chennai</div>
                            <div className="drop" />
                        </div>
                        <div className="list">
                            <Link className="data" to="/about-chennai/history">
                                <div className="paragraph">history</div>
                            </Link>
                            <Link className="data" to="/about-chennai/geography">
                                <div className="paragraph">geography</div>
                            </Link>
                            <Link className="data" to="/about-chennai/economy">
                                <div className="paragraph">economy</div>
                            </Link>
                            <Link className="data" to="/about-chennai/education">
                                <div className="paragraph">education</div>
                            </Link>
                            <Link className="data" to="/about-chennai/transportation">
                                <div className="paragraph">transportation</div>
                            </Link>
                            <Link className="data" to="/about-chennai/administration">
                                <div className="paragraph">administration</div>
                            </Link>
                            <Link className="data" to="/about-chennai/health-care">
                                <div className="paragraph">health care</div>
                            </Link>
                            <Link className="data" to="/about-chennai/media">
                                <div className="paragraph">media</div>
                            </Link>
                        </div>
                    </div>

                    <div className="footer-row">
                        <div className="title">
                            <div className="paragraph">discover chennai</div>
                            <div className="drop" />
                        </div>
                        <div className="list">
                            <Link className="data" to="/discover-chennai/attractions">
                                <div className="paragraph">attractions</div>
                            </Link>
                            <Link className="data" to="/discover-chennai/film-and-theatre">
                                <div className="paragraph">film & theater</div>
                            </Link>
                            <Link className="data" to="/discover-chennai/historical-places">
                                <div className="paragraph">historical places</div>
                            </Link>
                            <Link className="data" to="/discover-chennai/library-and-parks">
                                <div className="paragraph">library & books</div>
                            </Link>
                            <Link className="data" to="/discover-chennai/market">
                                <div className="paragraph">market</div>
                            </Link>
                            <Link className="data" to="/discover-chennai/museums-and-exhibitions">
                                <div className="paragraph">museums & exibitions</div>
                            </Link>
                            <Link className="data" to="/discover-chennai/outdoor-and-recreation">
                                <div className="paragraph">outdoor & recreations</div>
                            </Link>
                            <Link className="data" to="/discover-chennai/religious">
                                <div className="paragraph">religious</div>
                            </Link>
                        </div>
                    </div>

                    <div className="footer-row">
                        <div className="title">
                            <div className="paragraph">tradition & culture</div>
                            <div className="drop" />
                        </div>
                        <div className="list">
                            <Link className="data" to="/tradition-and-culture/people-of-chennai">
                                <div className="paragraph">people of chennai</div>
                            </Link>
                            <Link className="data" to="/tradition-and-culture/chennai-cuisine">
                                <div className="paragraph">chennai cuisine</div>
                            </Link>
                            <Link className="data" to="/tradition-and-culture/festivals-of-chennai">
                                <div className="paragraph">festivals of chennai</div>
                            </Link>
                            <Link className="data" to="/tradition-and-culture/tamil">
                                <div className="paragraph">tamil</div>
                            </Link>
                            <Link className="data" to="/tradition-and-culture/art-form-of-chennai">
                                <div className="paragraph">art form of chennai</div>
                            </Link>
                            <Link className="data" to="/tradition-and-culture/cycle-of-life">
                                <div className="paragraph">cycle of life</div>
                            </Link>
                        </div>
                    </div>

                    <div className="footer-row">
                        <div className="title">
                            <div className="paragraph">other links</div>
                            <div className="drop" />
                        </div>
                        <div className="list">
                            <Link className="data" to="/about-us">
                                <div className="paragraph">about us</div>
                            </Link>
                            <Link className="data" to="/contact-us">
                                <div className="paragraph">contact us</div>
                            </Link>
                            <Link className="data" to="/terms-conditions">
                                <div className="paragraph">terms & conditions</div>
                            </Link>
                            <Link className="data" to="/site-map">
                                <div className="paragraph">site map</div>
                            </Link>
                        </div>
                    </div>

                    <div className="footer-row">
                        <div className="title">
                            <div className="paragraph">stay connected</div>
                            <div className="drop" />
                        </div>
                        <div className="list">
                            <a target="_blank" href="https://www.facebook.com/InsideChennai1/" >
                                <div className="data">
                                    <div className="img fb" />
                                    <div className="paragraph">facebook</div>
                                </div>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/insidechennai/" >
                                <div className="data">
                                    <div className="img insta" />
                                    <div className="paragraph">instagram</div>
                                </div>
                            </a>
                            <a target="_blank" href="https://twitter.com/InsideChennai_" >
                                <div className="data">
                                    <div className="img twitter" />
                                    <div className="paragraph">twitter</div>
                                </div>
                            </a>
                            <a target="_blank" href="https://www.youtube.com/channel/UCrUsv3sU88LKkEns1IfMYHQ?app=desktop" >
                                <div className="data">
                                    <div className="img youtube" />
                                    <div className="paragraph">youtube</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mobile_footer">
                    <div className="mobile_footer_row">
                        <div className="titlePanel">
                            <div className="titleRow" onClick={this.aboutChennai.bind(this)}>
                                <div className="title">about chennai</div>
                                <div id="aboutPlusIcon">+</div>
                                <div id="aboutMinusIcon">-</div>
                            </div>
                            <div id="aboutChennai">
                                <div className="titleData">
                                    <Link to="/about-chennai/history">
                                        <div className="titleList">history</div>
                                    </Link>
                                    <Link to="/about-chennai/geography">
                                        <div className="titleList">geography</div>
                                    </Link>
                                    <Link to="/about-chennai/economy">
                                        <div className="titleList">economy</div>
                                    </Link>
                                    <Link to="/about-chennai/education">
                                        <div className="titleList">education</div>
                                    </Link>
                                    <Link to="/about-chennai/transportation">
                                        <div className="titleList">transportation</div>
                                    </Link>
                                    <Link to="/about-chennai/administration">
                                        <div className="titleList">administration</div>
                                    </Link>
                                    <Link to="/about-chennai/health-care">
                                        <div className="titleList">health care</div>
                                    </Link>
                                    <Link to="/about-chennai/media">
                                        <div className="titleList">media</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="titlePanel">
                            <div className="titleRow" onClick={this.discoverChennai.bind(this)}>
                                <div className="title">discover chennai</div>
                                <div id="discoverPlusIcon">+</div>
                                <div id="discoverMinusIcon">-</div>
                            </div>
                            <div id="discoverChennai">
                                <div className="titleData">
                                    <Link to="/discover-chennai/attractions">
                                        <div className="titleList">attractions</div>
                                    </Link>
                                    <Link to="/discover-chennai/film-and-theatre">
                                        <div className="titleList">film & theater</div>
                                    </Link>
                                    <Link to="/discover-chennai/historical-places">
                                        <div className="titleList">historical places</div>
                                    </Link>
                                    <Link to="/discover-chennai/library-and-parks">
                                        <div className="titleList">library & books</div>
                                    </Link>
                                    <Link to="/discover-chennai/market">
                                        <div className="titleList">market</div></Link>
                                    <Link to="/discover-chennai/museums-and-exhibitions">
                                        <div className="titleList">museums & exibitions</div>
                                    </Link>
                                    <Link to="/discover-chennai/outdoor-and-recreation">
                                        <div className="titleList">outdoor & recreations</div>
                                    </Link>
                                    <Link to="/discover-chennai/religious">
                                        <div className="titleList">religious</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="titlePanel">
                            <div className="titleRow" onClick={this.traditionCulture.bind(this)}>
                                <div className="title">tradition & culture</div>
                                <div id="tcPlusIcon">+</div>
                                <div id="tcMinusIcon">-</div>
                            </div>
                            <div id="traditionCulture">
                                <div className="titleData">
                                    <Link to="/tradition-and-culture/people-of-chennai">
                                        <div className="titleList">people of chennai</div>
                                    </Link>
                                    <Link to="/tradition-and-culture/chennai-cuisine">
                                        <div className="titleList">chennai cuisine</div>
                                    </Link>
                                    <Link to="/tradition-and-culture/festivals-of-chennai">
                                        <div className="titleList">festivals of chennai</div>
                                    </Link>
                                    <Link to="/tradition-and-culture/tamil">
                                        <div className="titleList">tamil</div>
                                    </Link>
                                    <Link to="/tradition-and-culture/art-form-of-chennai">
                                        <div className="titleList">art form of chennai</div>
                                    </Link>
                                    <Link to="/tradition-and-culture/cycle-of-life">
                                        <div className="titleList">cycle of life</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="titlePanel">
                            <div className="titleRow" onClick={this.otherLinks.bind(this)}>
                                <div className="title">other links</div>
                                <div id="olPlusIcon">+</div>
                                <div id="olMinusIcon">-</div>
                            </div>
                            <div id="otherLinks">
                                <div className="titleData">
                                    <Link to="/about-us">
                                        <div className="titleList">about us</div>
                                    </Link>
                                    <Link to="/contact-us">
                                        <div className="titleList">contact us</div>
                                    </Link>
                                    <Link to="/terms-conditions">
                                        <div className="titleList">terms & conditions</div>
                                    </Link>
                                    <Link to="/site-map">
                                        <div className="titleList">site map</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="titlePanel">
                            <div className="titleRow" onClick={this.stayConnected.bind(this)}>
                                <div className="title">stay connected</div>
                                <div id="stayPlusIcon">+</div>
                                <div id="stayMinusIcon">-</div>
                            </div>
                            <div id="stayConnected">
                                <div className="titleData">
                                    <a target="_blank" href="https://www.facebook.com/InsideChennai1/" >
                                        <div className="titleList">facebook</div>
                                    </a>
                                    <a target="_blank" href="https://www.instagram.com/insidechennai/" >
                                        <div className="titleList">instagram</div>
                                    </a>
                                    <a target="_blank" href="https://twitter.com/InsideChennai_" >
                                        <div className="titleList">twitter</div>
                                    </a>
                                    <a target="_blank" href="https://www.youtube.com/channel/UCrUsv3sU88LKkEns1IfMYHQ?app=desktop" >
                                        <div className="titleList">youtube</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="sub-footer-container">
                    <div className="paragraph">www.insidechennai.com</div>
                    <div className="paragraph">©2018 All Rights Reserved</div>
                </div>
            </div>

        )
    }

}

