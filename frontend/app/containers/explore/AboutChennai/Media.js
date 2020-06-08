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

export default class Media extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Media | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar rActiveBar animated fadeIn"></div>

                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="normal-web-container spaceRemover">
                        <div className="limiter">
                            <div className="hero-card-container">
                                <div className="explore_image_long about_chennai_details_media" />
                            </div>
                            <div className="hero-card-container">
                                <div className="discover-text-content">
                                    <p className="descLong">
                                        <b>Newspaper</b><br />
                                        Newspaper publishing started in Chennai with the launch of a weekly, The Madras Courier, in 1785. The major English dailies published in Chennai are: The Hindu, The New Indian Express, The Decan Chronicle and The Times of India.<br />
                                        The major Business dailies published from the city are: The Economic Times, The Hindu Business Line, Business Standard, Mint and The Financial Express.<br />
                                        The major Tamil dailies include: The Dina Thanthi, Dinakaran, Dina Mani, Dina Malar, The Hindu Tamil, Tamil Murasu, Makkal Kural and Malai Malar.<br />
                                        The Malayalam dailies are: Malayala Manorama and Mathrubhumi.<br />
                                        The Telugu dailies include: Eenadu Vaartha, Andhra Jyothi and Sakshi.<br />
                                        The one and only Hindi Newspaper published from Chennai is the Rajasthan Patrika. The Local weekly Newspapers circulated to residents are T.Nagar Times, Pillar Times, Arcot Road Talk and Chrompet Times.<br /><br />
                                        <b>Television</b><br />
                                        Doordarshan runs two terrestrial television channels and two satellite television channels from its Chennai centre, which was set up in 1974. Private Tamil satellite television networks such as Sun TV, Raj TV, Zee Tamizh, Star Vijay, Jaya TV, Makkal TV, Vasanth TV, Kalaignar TV, Captain TV and PuthiyaThalaimurai TV broadcast out of Chennai. While the cable TV service is entirely controlled by the state government, direct–to–home (DTH) is available via DD Direct Plus, Dish TV, Tata Sky, Videocon DTH, Sun direct DTH, Reliance Big TV and Digital TV.<br /><br />
                                        <b>Radio</b><br />
                                        The city has 4 AM and 11 FM radio stations operated by All India Radio, Anna University and Suryan FM, Radio Mirchi, BIG FM, Hello FM, Radio City, Radio One among others.
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
