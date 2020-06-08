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

export default class HealthCare extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Health Care | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar orActiveBar animated fadeIn"></div>

                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="normal-web-container spaceRemover">

                        <div className="limiter">
                            <div className="hero-card-container">
                                <div className="explore_image_long about_chennai_details_health_care" />
                            </div>
                            <div className="hero-card-container">
                                <div className="discover-text-content">
                                    <p className="descLong">
                                        Chennai attracts about 45 percent of health tourists from abroad and 30 percent to 40 percent of domestic health tourists. The city has been given the title of “India's health capital”. The city has more than 12,500 beds in its hospitals. This works to 2.1 beds per 1,000 population which is way higher than the national average of less than 1 bed per 1,000 population and almost reaches the World Health Organisation's norms of 3 beds per 1,000 persons, higher than any other city in the country. Chennai has world-class medical facilities, including both government-run and private hospitals.<br /><br />
                                        <b>Government hospitals include</b><br />
                                        Government General Hospital is a major state-owned hospital situated in Chennai, India. The hospital with 3,000 beds is funded and managed by the state government of Tamil Nadu. In the 19th century, the Madras Medical College joined it. As of 2018, the hospital receives an average of 12,000 outpatients every day.<br /><br />
                                        The Cancer Institute (WIA), is a public charitable voluntary institute dedicated to the care of cancer for for the last 60 years. The Institute is a comprehensive cancer centre comprising of a hospital of 535 beds, a research division, a college of oncological sciences and a division of preventive oncology and provides state of art treatment to one and all.It has both a National and International stature.Of the hospital beds, only 40% are paying beds and the remaining are general beds where patients are boarded and lodged free of cost. 40% of the patients are treated totally free and remaining patients pay a norminal amount. The National Institute of Siddha is one of the seven apex national-level educational institutions that promote excellence in Indian system of medicine and Ayurveda.<br /><br />
                                        <b>Major hospitals include</b><br />
                                        Apollo Hospitals, Apollo Speciality Hospital, SRM Medical College Hospital and Research Centre, Chettinad Health City, MIOT Hospitals, Sri Ramachandra Medical College and Research Institute, Fortis Malar Hospital, Lifeline Hospitals, Vasan Healthcare, Dr Mehta Hospitals, Global Hospitals & Health City, Sankara Nethralaya and Vijaya Medical & Educational Trust.
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
