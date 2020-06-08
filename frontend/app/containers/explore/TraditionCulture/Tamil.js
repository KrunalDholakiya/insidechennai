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

export default class Tamil extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Tamil | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar tActiveBar animated fadeIn"></div>

                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="normal-web-container spaceRemover">
                        <div className="limiter">
                            <div className="hero-card-container">
                                <div className="explore_image_long tradition_culture_details_tamil" />
                            </div>
                            <div className="hero-card-container">
                                <div className="discover-text-content">
                                    <p className="descLong">
                                        Tamil language, member of the Dravidian language spoken in Chennai. It is the official language of Tamil Nadu. In 2004 Tamil was declared a classical language of India, which meant that it met three criteria: its origins are ancient; it has an independent tradition; and it possesses a considerable body of ancient literature. In the early 21st century more than 66 million people were Tamil speakers.<br /><br />
                                        The Tamil language has very different pronunciation from the Hindi language. There is a huge gap between the written (standard) Tamil and the spoken language Like the other Dravidian languages, Tamil is characterized by a series of retroflex consonants (/ḍ/, /ṇ/, and /ṭ/) made by curling the tip of the tongue back to the roof of the mouth.<br /><br />
                                        Structurally, Tamil is a verb-final language that allows flexibility regarding the order of the subject and the object in a sentence. Adjectives and relative, adverbial, and infinitive clauses normally precede the term they modify, while inflections such as those for tense, number, person, and case are indicated with suffixes. In South India, there are four languages that are prevalent, they are Tamil, Telugu, Kannada and Malayalam.
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
