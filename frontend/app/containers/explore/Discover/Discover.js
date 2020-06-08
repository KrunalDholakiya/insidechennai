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

export default class Discover extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location_path: [
                'home', 'discover chennai'
            ],
            key: "value"
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Discover Chennai";
    }

    render() {
        return (
            <div>

                <SlimHeader />

                <div className="normal-web-container">
                    <div className="chennaiTitleBar animated bounceInLeft slow">
                        <Link className="titleRow" to="/discover-chennai/attractions">
                            <div className="subtitleLogo attractions" />
                            <div className="Subtitle">Attractions</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/film-and-theatre">
                            <div className="subtitleLogo film_theater" />
                            <div className="Subtitle">Film & Theater</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/historical-places">
                            <div className="subtitleLogo historical_place" />
                            <div className="Subtitle">Historical Places</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/library-and-parks">
                            <div className="subtitleLogo library_park" />
                            <div className="Subtitle">Library & Parks</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/market">
                            <div className="subtitleLogo market" />
                            <div className="Subtitle">Market</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/museums-and-exhibitions">
                            <div className="subtitleLogo museum_exhibitions" />
                            <div className="Subtitle">Museums & Exhibitions</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/outdoor-and-recreation">
                            <div className="subtitleLogo outdoor_recreation" />
                            <div className="Subtitle">Outdoor & Recreation</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/religious">
                            <div className="subtitleLogo religious" />
                            <div className="Subtitle">Religious</div>
                        </Link>
                    </div>

                    {/* <Breadcrumbs path={this.state.location_path} /> */}
                    <h2 className="textCenter animated fadeIn">Discover Chennai</h2>
                    <div className="drop orangePage" /><br />
                    <p className="textCenter textpadding">
                        With its historic landmarks and buildings, long sandy beaches, cultural art centers and parks, Chennai offers many potentially interesting locations to visitors.The heart of Chennai still remains in the multitude of old temples and churches dotting various parts of the city. Chennai is a city that has a plethora of dimensions that one can explore.
                    </p>
                    <div className="spaceContainer"></div>
                    <div className="limiter">
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Attractions</h3>
                                <div className="explore_image discover_chennai_attraction" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Attractions</h3>
                                    <div className="desc">
                                        Chennai is a beautiful city that has many attraction points that are a must to see if you are visiting a Chennai. One of the biggest attractions of Chennai is the long stretch of the Marina beach. Read on to find a list of other interesting places of Chennai.
                                        <Link to="/discover-chennai/attractions">
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
                                <h3 className="discover-chennai-title mobile_title">Film & Theater</h3>
                                <div className="explore_image discover_chennai_film_theater" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Film & Theater</h3>
                                    <div className="desc">
                                        No city is truly complete without giving its people an opportunity to experience the liveliness of movies and plays. Chennai harbours many screens to display movies, ranging from the age-old Prarthana drive in theatre (one of its kind in Chennai) to posh cinema complexes that have multiple screens. Art takes place in many forms like plays, musicals shows, dances etc.in Chennai.  Here is a list of places that you need to head to if you want to catch the action live.
                                        <Link to="/discover-chennai/film-and-theatre">
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
                                <h3 className="discover-chennai-title mobile_title">Historical Places</h3>
                                <div className="explore_image discover_chennai_historical_place" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Historical Places</h3>
                                    <div className="desc">
                                        Historical places are a very integral part of any city. Temples, mosques, churches, memorials and monuments- Chennai is laced with historical places that will give you an insight into how the events of the past unfolded and the events that took place that led Chennai to be what it is today. Read this list to find out more about these places!
                                        <Link to="/discover-chennai/historical-places">
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
                                <h3 className="discover-chennai-title mobile_title">Library & Parks</h3>
                                <div className="explore_image discover_chennai_library_parks" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Library & Parks</h3>
                                    <div className="desc">
                                        Chennai is equipped with numerous libraries, as literature is something that the people of Chennai hold close to their hearts. There are various libraries like Anna Library that is fully furnished with a wide range of books and even cubicles to sit and read and then there are small libraries that are solely meant for lending. Read ahead to see where you can find the book of your pick!
                                        <Link to="/discover-chennai/library-and-parks">
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
                                <h3 className="discover-chennai-title mobile_title">Market</h3>
                                <div className="explore_image discover_chennai_market" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Market</h3>
                                    <div className="desc">
                                        The markets of Chennai are convenient and very cost friendly. Chennai is most famous for its vivid and elegant silk saris and a very distinct collection of gold jewellery. There are numerous markets in Chennai apart from the branded showrooms and malls where you can purchase clothes, accessories, bags, footwear and other things.
                                        <Link to="/discover-chennai/market">
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
                                <h3 className="discover-chennai-title mobile_title">Museums & Exhibitions</h3>
                                <div className="explore_image discover_chennai_museums_exhibitions" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Museums & Exhibitions</h3>
                                    <div className="desc">
                                        Chennai plays host to many different kinds of museums like the Chennai rail museum, The Government Museum and The Click Art Museum. The appealing factor of these museums is that not only are they informative but are also amusing at the same time. Exhibitions are a huge part of Chennai. You will find very innovative and different exhibitions of diverse products like plants, jewellery, paintings, handicrafts from various parts of the country and many more. Know where to be a part of it by reading further!
                                        <Link to="/discover-chennai/museums-and-exhibitions">
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
                                <h3 className="discover-chennai-title mobile_title">Outdoor & Recreation</h3>
                                <div className="explore_image discover_chennai_outdoor_recreation" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Outdoor & Recreation</h3>
                                    <div className="desc">
                                        Paint ball, Go karting, Surfing or Firing, name it and you have it! Chennai has multiple exciting outdoor activities to offer that are sure to turn your day into a thrilled one. If you want a break from watching movies and or doing typical activities, check these places out to raise your adrenalin levels!
                                        <Link to="/discover-chennai/outdoor-and-recreation">
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
                                <h3 className="discover-chennai-title mobile_title">Religious</h3>
                                <div className="explore_image discover_chennai_religious" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Religious</h3>
                                    <div className="desc">
                                        Chennai reeks of religiousness. The people of Chennai are extremely religious because of which there are many religious sites in Chennai. The temples of Chennai have a rich history and intricate details in its architecture which makes it very stunning to look at. All religions are widely accepted in Chennai; you will find just as many mosques and churches as temples. Read further to discover places that might help you feel zen.
                                        <Link to="/discover-chennai/religious">
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
