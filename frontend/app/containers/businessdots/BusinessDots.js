import React from 'react'
import '../../assets/styles/businessdots.scss'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class BusinessDots extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Business Dots | Inside Chennai";

        var mybubbles = document.getElementsByClassName("business_dots_bubble");

        var bubblecolors = ["#c5a5ab", "#e3e2dd", "#87a6c0"];

        for (var i = 0; i < mybubbles.length; i++) {

            mybubbles[i].style.backgroundColor = bubblecolors[Math.floor(Math.random() * bubblecolors.length)];
            mybubbles[i].style.opacity = Math.random() * .75;

            var bubblesize = (Math.floor(Math.random() * 9) + 2) * 50;

            mybubbles[i].style.width = bubblesize + "px";
            mybubbles[i].style.height = bubblesize + "px";
            mybubbles[i].style.borderRadius = (bubblesize / 2) + "px";

            mybubbles[i].style.bottom = Math.floor(Math.random() * 100) + "%";

            mybubbles[i].style.animationDuration = Math.floor(Math.random() * 16) + 8 + "s";
            mybubbles[i].style.animationDelay = Math.floor(Math.random() * 8) + "s";

        }
    }

    render() {
        return (
            <div>

                <div className="business_dots_home_page animated fadeIn">
                    <div id="business_dots_bg">
                        <div className="business_dots_bubble"></div>
                        <div className="business_dots_bubble"></div>
                        <div className="business_dots_bubble"></div>
                        <div className="business_dots_bubble"></div>
                        <div className="business_dots_bubble"></div>
                        <div className="business_dots_bubble"></div>
                        <div className="business_dots_bubble"></div>
                        <div className="business_dots_bubble"></div>
                        <div className="business_dots_bubble"></div>
                        <div className="business_dots_bubble"></div>
                    </div>
                    <div className="business_dots_text_container">
                        <div className="business_dots_text">
                            <h1>Business <span>Dots</span></h1><hr />
                            <h5>Dot your web presence easily.</h5>
                        </div>
                        <Link className="get_start_button" to="/business-dots">
                            Coming Soon
                        </Link>
                    </div>
                </div>

                <div className="bdh_text_container">
                    <div className="bdh_big_heading">Let's Dot It</div>
                    <div className="bdh_small_text">
                        We believe anything is possible with the right webpage builder. Whether you're about to create a webpage for the first time or you're a long time pro, we've got you covered. You have two ways to start: Get a free webpage designed for you with our Artificial Design Intelligence or get total design freedom with the our Editor. You can always add advanced functionality to your webpage with our Code. It’s time to get your professional webpage.<br />
                        <Link to="/business-dots">
                            Get Started >>
                        </Link>
                    </div>
                </div>

                <div className="bdh_multipal_platform_container">
                    <div className="bdh_big_heading">We have platform<br />for everyone</div>
                    <div className="periodic-table">
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Teacher</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Entrepreneur</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Actor</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Scientist</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Dancer</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Lawyer</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Small Business</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Gym Trainer</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Accountant</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Saloon</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Hair Stylist</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Photographer</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Singer</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Architecture</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Developer</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Event</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Doctor</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Fashion Designer</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Event Organizer</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Trust</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">Socialist</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-2">
                            <div className="periodic-element-inner">
                                <div className="title">Organization</div>
                            </div>
                        </div>
                        <div className="empty-spacer-1"></div>
                        <div className="periodic-element color-1">
                            <div className="periodic-element-inner">
                                <div className="title">CV</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}