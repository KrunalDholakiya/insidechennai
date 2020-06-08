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

export default class Economy extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Economy | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar hpActiveBar animated fadeIn"></div>

                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="normal-web-container spaceRemover">
                        <div className="limiter">
                            <div className="hero-card-container">
                                <div className="explore_image_long about_chennai_details_economy" />
                            </div>
                            <div className="hero-card-container">
                                <div className="discover-text-content">
                                    <p className="descLong">
                                        Chennai is ranked 4th in hosting the maximum number of Fortune 500 companies of India, next only to Mumbai, Delhi and Kolkata. Also is home to 24 Indian companies having a net worth of more than US$1 billion. Recent estimates of the economy of the entire Chennai Metropolitan Area, range from $58.6 to $66 billion (PPP GDP), ranking it from fourth- to sixth-most productive metro area of India.<br /><br />
                                        Chennai has a broad industrial base in the automobile, computer, technology, hardware manufacturing and healthcare sectors. As of 2012, the city is India's second largest exporter of information technology (IT) and business process outsourcing (BPO) services. The city also serves as the location of the Madras Stock Exchange, India's fourth stock exchange, India's third-largest by trading volume, ranked behind the Bombay Stock Exchange and the National Stock Exchange of India. A large number of automotive companies like  Royal Enfield, Hyundai, Renault, Robert Bosch, Nissan Motors, Ashok Leyland, Yamaha Motor,  Ford, BMW and Mitsubishi have manufacturing plants in Chennai. The Heavy Vehicles Factory at Avadi produces military vehicles, including India's main battle tank: Arjun MBT.<br /><br />
                                        The Integral Coach Factory, manufactures railway coaches and other rolling stock for Indian Railways. Prominent financial institutions, including the World Bank, Standard Chartered Bank,  Bank of America, The Royal Bank of Scotland, Goldman Sachs, Barclays, HSBC, ING Group, Allianz, and Citibank have back office and development centre operations in the city.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

            </div>
        )
    }
}
