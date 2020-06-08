import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../commons/Footer'
import '../../../assets/styles/page.scss'
import SlimHeader from '../../commons/slimHeader'
import ScrollAnimation from 'react-animate-on-scroll'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class TraditionCulture extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location_path: [
                'home', 'explore chennai', 'tradition & culture'
            ],
            key: "value"
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Tradition & Culture";
    }

    render() {
        return (
            <div>

                <SlimHeader />

                <div className="normal-web-container">
                    <div className="chennaiTitleBar animated bounceInLeft slow">
                        <Link className="titleRow" to="/tradition-and-culture/people-of-chennai">
                            <div className="subtitleLogo people_of_chennai" />
                            <div className="Subtitle">People Of Chennai</div>
                        </Link>
                        <Link className="titleRow" to="/tradition-and-culture/chennai-cuisine">
                            <div className="subtitleLogo chennai_cuisine" />
                            <div className="Subtitle">Chennai Cuisine</div>
                        </Link>
                        <Link className="titleRow" to="/tradition-and-culture/festivals-of-chennai">
                            <div className="subtitleLogo festivals_of_chennai" />
                            <div className="Subtitle">Festivals Of Chennai</div>
                        </Link>
                        <Link className="titleRow" to="/tradition-and-culture/tamil">
                            <div className="subtitleLogo tamil" />
                            <div className="Subtitle">Tamil</div>
                        </Link>
                        <Link className="titleRow" to="/tradition-and-culture/art-form-of-chennai">
                            <div className="subtitleLogo art_of_chennai" />
                            <div className="Subtitle">Art Form Of Chennai</div>
                        </Link>
                        <Link className="titleRow" to="/tradition-and-culture/cycle-of-life">
                            <div className="subtitleLogo cycle_of_life" />
                            <div className="Subtitle">Cycle Of Life</div>
                        </Link>
                    </div>

                    {/* <Breadcrumbs path={this.state.location_path} /> */}
                    <h2 className="textCenter animated fadeIn">Tradition & Culture</h2>
                    <div className="drop orangePage" /><br />
                    <p className="textCenter textpadding">
                        The people of Chennai are known as “Chennaiites”. Although the mentality is quite orthodox and the people take their traditions very seriously, there exists mutual respect, companionship and kindness is widely believed in and the capital is a perfect blend of traditional beliefs and modernity merging in harmony.
                    </p>
                    <div className="spaceContainer"></div>
                    <div className="limiter">
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">People Of Chennai</h3>
                                <div className="explore_image tradition_culture_people_of_chennai" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">People Of Chennai</h3>
                                    <div className="desc">
                                        The main quality that exists in the people of Chennai is kindness and consideration. People in Chennai believe in being down to earth and prefer leading a simple life irrespective of their status or position in the society. They maintain a slow-paced life, relishing things to their fullest.
                                        <Link to="/tradition-and-culture/people-of-chennai">
                                            <div className="more">
                                                View more
                                                <div className="more-arrow" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Chennai Cuisine</h3>
                                <div className="explore_image tradition_culture_chennai_cuisine" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Chennai Cuisine</h3>
                                    <div className="desc">
                                        The staple food of Chennai is rice- which is why most dishes in Chennai are made up of rice, be it for breakfast lunch or dinner. Here are a few of the dishes that Chennai is famous for.
                                        <Link to="/tradition-and-culture/chennai-cuisine">
                                            <div className="more">
                                                View more
                                                <div className="more-arrow" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Festivals Of Chennai</h3>
                                <div className="explore_image tradition_culture_festivals_of_chennai" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Festivals Of Chennai</h3>
                                    <div className="desc">
                                        Tamil Nadu is known for its magnificent festivals, outlined with rangolis, bright silks, flowers, temples celebrations and of course lots of festival food. All over the state, festivals like Pongal and Karthigai Deepam are celebrated with so much cheer, joy and frolic. The people of Chennai take immense pleasure in honoring their traditions and values.
                                        <Link to="/tradition-and-culture/festivals-of-chennai">
                                            <div className="more">
                                                View more
                                                <div className="more-arrow" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Tamil</h3>
                                <div className="explore_image tradition_culture_tamil" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Tamil</h3>
                                    <div className="desc">
                                        The primary language spoken in Chennai is Tamil. It is the official language of Tamil Nadu. The Tamil dialect is known as ‘MADRAS BASHAI’ which means ‘Language of Madras’. The Tamil language has very different pronunciation from the Hindi language. There is a huge gap between the written (standard) Tamil and the spoken language. In South India, there are four languages that are prevalent, they are Tamil, Telugu, Kannada and Malayalam.
                                        <Link to="/tradition-and-culture/tamil">
                                            <div className="more">
                                                View more
                                                <div className="more-arrow" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Art Form Of Chennai</h3>
                                <div className="explore_image tradition_culture_art_of_chennai" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Art Form Of Chennai</h3>
                                    <div className="desc">
                                        The main pride of Chennai is its classical music and its classical dance. Every December, Chennai plays host to a five-week long music festival. The people of Chennai posses massive talent when it comes classical and music and to witness these performances is absolute bliss.
                                        <Link to="/tradition-and-culture/art-form-of-chennai">
                                            <div className="more">
                                                View more
                                                <div className="more-arrow" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Cycle Of Life</h3>
                                <div className="explore_image tradition_culture_cycle_of_life" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Cycle Of Life</h3>
                                    <div className="desc">
                                        Every person comes across various stages in life. In Tamil Nadu, each of these stages except death are celebrated with grandeur and people seize the moment by celebrating various check points in life like the naming ceremony of a baby or a wedding. Although, Chennai does have a very different style of celebrating these life events. Read on to find out!
                                        <Link to="/tradition-and-culture/cycle-of-life">
                                            <div className="more">
                                                View more
                                                <div className="more-arrow" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                </div>

                <Footer />

            </div>
        )
    }

}
