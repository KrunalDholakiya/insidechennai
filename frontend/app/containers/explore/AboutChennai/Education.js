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

export default class Education extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Education | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar lpActiveBar animated fadeIn"></div>

                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="normal-web-container spaceRemover">
                        <div className="limiter">
                            <div className="hero-card-container">
                                <div className="explore_image_long about_chennai_details_education" />
                            </div>
                            <div className="hero-card-container">
                                <div className="discover-text-content">
                                    <p className="descLong">
                                        Chennai ranks second among Indian metropolitan city centres with a 90.33 percent literacy rate. Chennai has a mix of public and private schools, some of which also receive financial support from the government. The public school system is managed by the Chennai Corporation with an enrolment of 142,387 students in over 330 schools and are affiliated with the Tamil Nadu State Board.<br /><br />
                                        Private schools may be affiliated with either of the Tamil Nadu Board of Secondary Education or the Central Board of Secondary Education (CBSE). Education in Chennai starts with two years of Kindergarten from age three onward and then follows the Indian 10+2+3 plan, ten years of school, two years of higher secondary education, and three years of undergraduate education.<br /><br />
                                        Colleges for science, arts and commerce degrees are typically affiliated with the University of Madras, which has six campuses in the city. The Indian Institute of Technology Madras (IIT Madras) and the College of Engineering, Guindy, Anna University are two well-known centres for engineering education in the city. The Indian Army's Officers Training Academy is also headquartered in the city.
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
