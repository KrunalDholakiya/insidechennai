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

export default class Administaration extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Administration | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar meActiveBar animated fadeIn"></div>

                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="normal-web-container spaceRemover">
                        <div className="limiter">
                            <div className="hero-card-container">
                                <div className="explore_image_long about_chennai_details_administration" />
                            </div>
                            <div className="hero-card-container">
                                <div className="discover-text-content">
                                    <p className="descLong">
                                        Chennai city is governed by the Greater Chennai Corporation, which was established in 1688. In 2011,the city was divided into three regions—North, South and Central, which covers 200 wards.  The Chennai Metropolitan Development Authority (CMDA) is the nodal agency responsible for planning and development of Chennai Metropolitan Area.  Under the gamut of the CMDA are 5 parliamentary and 28 assembly constituencies.  The Madras High Court, is the highest judicial authority in the state, whose jurisdiction extends across Tamil Nadu and Puducherry. Chennai has three parliamentary constituencies—Chennai North, Chennai Central and Chennai South—and elects 24 Members of the Legislative Assembly (MLAs) to the state legislature.<br /><br />
                                        <b>Law & Order</b><br />
                                        The Greater Chennai Police is the main law enforcement agency in the city, with a jurisdiction of over 745 km2 catering to over 85 lakh people. It consists of 121 police stations and is headed by a Commissioner of Police. Chennai City Traffic Police (CCTP), is responsible for the traffic management in the city. The metropolitan suburbs are policed by the Chennai Metropolitan Police, and the outer district areas of the CMDA are policed by the Kanchipuram and Thiruvallur police departments.
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
