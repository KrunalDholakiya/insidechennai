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

export default class ArtFormOfChennai extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Art Form Of Chennai | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar afocActiveBar animated fadeIn"></div>
                <div className="normal-web-container spaceRemover">

                    <div className="limiter">
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Carnatic Music</h3>
                                <div className="explore_image tradition_culture_details_carnatic_music" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Carnatic Music</h3>
                                    <p className="desc">
                                        The Carnatic music, that is the classical music of Chennai includes some very melodious and high-pitched long vocals, instruments like the veena, sitar, the flute and the tabla which makes the entire experience absolutely blissful.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Bharatnatyam</h3>
                                <div className="explore_image tradition_culture_details_bharatnatyam" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Bharatnatyam</h3>
                                    <p className="desc">
                                        Another one of its pride is the classical dance form Bharatanatyam. Bharatanatyam style is noted for its fixed upper torso, legs bent or knees flexed out combined with spectacular footwork, a sophisticated vocabulary of sign language based on gestures of hands, eyes and face muscles. It is a very difficult dance form to master and usually takes years of training.
                                    </p>
                                </div>
                            </div></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Chennai Sangamam</h3>
                                <div className="explore_image tradition_culture_details_chennai_sangamam" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Chennai Sangamam</h3>
                                    <p className="desc">
                                        An arts festival called the Chennai Sangamam which showcases not only various parts of Tamil Nadu but also from the neighbouring states, like kalari (from Kerala), which is a major attraction, is held in January every year. The Speciality of Chennai Sangamam is that the various programmes are held near or at the various famous landmarks in the city so that everyone in the city has access to the programmes and there is no fee charged for entry for any of the programmes.
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
