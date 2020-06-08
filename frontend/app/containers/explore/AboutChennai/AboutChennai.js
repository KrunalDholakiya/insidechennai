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

export default class AboutChennai extends React.Component {

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
        document.title = "About Chennai";
    }

    render() {
        return (
            <div>

                <SlimHeader />

                <div className="normal-web-container">
                    <div className="chennaiTitleBar animated bounceInLeft slow">
                        <Link className="titleRow" to="/about-chennai/history">
                            <div className="subtitleLogo history" />
                            <div className="Subtitle">History</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/geography">
                            <div className="subtitleLogo geography" />
                            <div className="Subtitle">Geography</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/economy">
                            <div className="subtitleLogo economy" />
                            <div className="Subtitle">Economy</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/education">
                            <div className="subtitleLogo education" />
                            <div className="Subtitle">Education</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/transportation">
                            <div className="subtitleLogo transportation" />
                            <div className="Subtitle">Transportation</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/administration">
                            <div className="subtitleLogo administration" />
                            <div className="Subtitle">Administration</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/health-care">
                            <div className="subtitleLogo health_care" />
                            <div className="Subtitle">Health Care</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/media">
                            <div className="subtitleLogo media" />
                            <div className="Subtitle">Media</div>
                        </Link>
                    </div>

                    {/* <Breadcrumbs path={this.state.location_path} /> */}
                    <h2 className="textCenter animated fadeIn">About Chennai</h2>
                    <div className="drop orangePage" /><br />
                    <p className="textCenter textpadding">
                        Chennai is one of the leading cities of India. It has a rich history and a fast-paced developing economy. Its beaches, people, food, safety, infrastructure and the education system among several other factors easily makes it one of the best cities.
                    </p>
                    <div className="spaceContainer"></div>
                    <div className="limiter">
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">History</h3>
                                <div className="explore_image about_chennai_history" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">History</h3>
                                    <div className="desc">
                                        Chennai has a fascinating history. The region around Chennai has served as an important administrative, military, and economic centre for many centuries. It used to be the centre of conflict for the supremacy of the British and the French.  In the 17th and the 18th century, Chennai was still developing as many localities were being annexed to the city only then. 19th century brought prosperity to Chennai as it started growing rapidly. Many museums and educational institutions among other things emerged in the city. Chennai came to be known as the “Detroit of India” because of its multiple industries and ports.
                                        <Link to="/about-chennai/history">
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
                                <h3 className="discover-chennai-title mobile_title">Geography</h3>
                                <div className="explore_image about_chennai_geography" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Geography</h3>
                                    <div className="desc">
                                        Chennai which is situated near the 13th north parallel and 80 degree longitude stretches its 19 km length along the Coromandel Coast. 172 sq. km. is covered by its irregular shape. Its highest point is only 60 m above sea level. Moreover, it is a low-lying strip of land. It has a humid climate through most of the year and it's monsoons take place from November to February.
                                        <Link to="/about-chennai/geography">
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
                                <h3 className="discover-chennai-title mobile_title">Economy</h3>
                                <div className="explore_image about_chennai_economy" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Economy</h3>
                                    <div className="desc">
                                        Industrialization in the city dates back to the 16th century, when textile mills manufactured goods which were exported to Britain during its war with France. In the late 18th century, it became the only city in Asia to manufacture car engines and ancillary parts for ships and battle tanks. According to Forbes magazine, Chennai is one of the fastest growing cities in the world and the only Indian city to be rated in the “Forbes-Top 10 Fastest Growing Cities in the World.
                                        <Link to="/about-chennai/economy">
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
                                <h3 className="discover-chennai-title mobile_title">Education</h3>
                                <div className="explore_image about_chennai_education" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Education</h3>
                                    <div className="desc">
                                        Chennai is in the second place for literacy among the metropolitan city centres in India. Chennai has a mix of public and private schools.Tamil and English are the primary media of instruction, though several schools also use Telugu or Urdu.
                                        <Link to="/about-chennai/education">
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
                                <h3 className="discover-chennai-title mobile_title">Transportation</h3>
                                <div className="explore_image about_chennai_transportation" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Transportation</h3>
                                    <div className="desc">
                                        Chennai serves as a major gateway to southern India. The Chennai International Airport, comprising the Anna international terminal and the Kamaraj domestic terminal, is the third busiest airport and the second busiest cargo terminus in India. Chennai also holds the headquarters of the southern railways and is one of the cities that is connected by the Golden Quadrilateral System of National Highways.
                                        <Link to="/about-chennai/transportation">
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
                                <h3 className="discover-chennai-title mobile_title">Administration</h3>
                                <div className="explore_image about_chennai_administration" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Administration</h3>
                                    <div className="desc">
                                        Chennai, governed by the Chennai Corporation (formerly Corporation of Madras), which was established in 1688. It is the oldest municipal corporation in India and the second oldest corporation in the world.Chennai, as the capital of the state of Tamil Nadu, houses the State Executive and Legislative Headquarters, primarily in the Secretariat Buildings in the Fort St. George campus.
                                        <Link to="/about-chennai/administration">
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
                                <h3 className="discover-chennai-title mobile_title">Health Care</h3>
                                <div className="explore_image about_chennai_health_care" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Health Care</h3>
                                    <div className="desc">
                                        Health care in Chennai is provided by both government-run and private hospitals. Chennai attracts about 45 percent of health tourists from abroad arriving in the country and 30 to 40 percent of domestic health tourists. The city has been termed India's health capital. Multi- and super-specialty hospitals across the city bring in an estimated 150 international patients every day.Factors behind the tourists' inflow in the city include low costs, little to no waiting period,and facilities offered at the speciality hospitals in the city.
                                        <Link to="/about-chennai/health-care">
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
                                <h3 className="discover-chennai-title mobile_title">Media</h3>
                                <div className="explore_image about_chennai_media" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Media</h3>
                                    <div className="desc">
                                        Newspaper publishing started in Chennai with the launch of a weekly, The Madras Courier in 1785. It was followed by the weeklies The Madras Gazette and The Government Gazette in 1795. The Spectator, founded in 1836, was the first English newspaper in Chennai to be owned by an Indian and became the city’s first daily newspaper in 1853. The first Tamil newspaper Swadesamitran was launched in 1899.
                                        <Link to="/about-chennai/media">
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
