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

export default class FestivalsOfChennai extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Festivals Of Chennai | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar focActiveBar animated fadeIn"></div>
                <div className="normal-web-container spaceRemover">

                    <div className="limiter">
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Pongal</h3>
                                <div className="explore_image tradition_culture_details_pongal" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Pongal</h3>
                                    <p className="desc">
                                        It is the harvest festival of thanks giving to Sun, Earth and the Cow. It is celebrated in the month of January for three days. People offer sugarcane, turmeric, sheaves of paddy, newly prepared jaggery, vegetables and pulses to the Sun god, the earth and the cow. Women of the house make beautiful patterns outside the house with colourful powder and is termed and Rangoli.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Karthigai Deepam</h3>
                                <div className="explore_image tradition_culture_details_karthigai_deepam" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Karthigai Deepam</h3>
                                    <p className="desc">
                                        Karthigai deepam is the festival of lamps and is usually celebrated in the month of November. The lighted lamp is considered an auspicious symbol. It is believed to ward off evil forces and usher in prosperity and joy.<br /><br />
                                        These are the two main festivals that belong to the south and are celebrated grandly. Apart from this, festivals like Ganesh Chaturthi, Navratri and Onam are also celebrated.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Eid</h3>
                                <div className="explore_image tradition_culture_details_eid" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Eid</h3>
                                    <p className="desc">
                                        This religious Eid (Muslim religious festival) is the first and only day in the month of Shawwal during which Muslims are not permitted to fast. The holiday celebrates the conclusion of the 29 or 30 days of dawn-to-sunset fasting during the entire month of Ramadan.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Christmas</h3>
                                <div className="explore_image tradition_culture_details_christmas" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Christmas</h3>
                                    <p className="desc">
                                        Just like in the rest of the world, Christmas is celebrated in Chennai with a lot of cheer and joy. All the churches around the city are decorated and people come together in the churches to celebrate the birth of Jesus by singing carols and praying to him.
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
