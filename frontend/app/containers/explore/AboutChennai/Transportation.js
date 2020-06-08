import React from 'react'
import '../../../assets/styles/page.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class Transportation extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Transportation | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar mActiveBar animated fadeIn"></div>
                <p className="textCenter textpadding">
                    There are <b>5</b> main transportation means in Chennai, them being <b>Air</b>, <b>Rail</b>, <b>Sea</b>, <b>Metro Rail</b> and <b>Road</b>.
                </p>
                <div className="normal-web-container spaceRemover">

                    <div className="limiter">
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Air</h3>
                                <div className="explore_image about_chennai_details_air" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Air</h3>
                                    <p className="desc">
                                        Chennai serves as a major gateway to southern India. The Chennai International Airport, comprising the Anna international terminal and the Kamaraj domestic terminal with a total passenger movement of 12.9 million and aircraft movements of 120,127 in 2011-2012, is the third busiest airport and the second busiest cargo terminus in India. Chennai handles 316 flights a day, again making the third spot among Indian Airports. The city is connected to major hubs across Asia, Europe, and North America through more than 30 national and international carriers.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Rail</h3>
                                <div className="explore_image about_chennai_details_rail" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Rail</h3>
                                    <p className="desc">
                                        The city has four main railway terminals. Chennai Central, Chennai Egmore, Chennai Beach and Tambaram. Chennai Central station connects the city to other major cities, as well as many other smaller towns across India. Chennai Egmore allows passengers to travel to destinations primarily within Tamil Nadu; however, it also handles a few inter–state trains. The Chennai suburban railway network, facilitates transportation within the city.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Metro Rail</h3>
                                <div className="explore_image about_chennai_details_metro" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Metro Rail</h3>
                                    <p className="desc">
                                        To improve the city's public transportation system, the Chennai Metro was planned and approved by the state cabinet. The Phase I of the Chennai Metro network consists of 2 lines -Blue Line and Green Line covering a length of 45.1 kilometres (28.0 mi). It consists of 40 stations, with Alandur and Chennai Central serving as interchanges.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Sea</h3>
                                <div className="explore_image about_chennai_details_sea" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Sea</h3>
                                    <p className="desc">
                                        The city is served by two major ports, the Chennai Port and the Ennore Port. The Chennai port is the largest in Bay of Bengal, with an annual cargo tonnage of 6.146 crore (2010–2011), and second largest containerise hub in India. The Chennai port handles transportation of automobiles, motorcycles and general industrial cargo. The Ennore Port with an annual cargo tonnage of 1.101 crore (2010–2011), handles cargo such as coal, ore and other bulk and rock mineral products.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <h3>Road</h3>
                            <div className="hero-card-container">
                                <div className="explore_image_long about_chennai_details_road" />
                            </div>
                            <div className="hero-card-container">
                                <div className="discover-text-content">
                                    <p className="descLong">
                                        Chennai is one of the cities in India that is connected by the Golden Quadrilateral system of National Highways and is connected to other Indian cities by four major highways.<br /><br />
                                        They are NH 4 to Mumbai (via Bangalore, Pune), NH 5 to Kolkata (linked via NH 6) (via Visakhapatnam, Bhubaneswar), NH 45 to Theni (via Villupuram, Tiruchirapalli, Dindigul) and NH 205 to Madanapalle (via Tirupati). Chennai is connected to other parts of the state and the Union Territory of Puducherry by state highways. Chennai Mofussil Bus Terminus (CMBT), is the main intercity bus station of Chennai. The MTC provides an exclusive intracity bus service, consisting of 3,421 buses on 724 routes, which provides transportation to 55.2 lakh passengers daily. The Tamil Nadu State Transport Corporation operates Volvoair-conditioned services from Chennai to nearby cities like Pondicherry, Vellore, Hosur and Trichy. The other means of road transport in the city include vans, regionally known as Maxi Cabs, auto rickshaws, on-call metered taxis and tourist taxis.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                </div>
            </div>
        )
    }
}
