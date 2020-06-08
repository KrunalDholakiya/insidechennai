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

export default class PeopleOfChennai extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "People Of Chennai | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar pocActiveBar animated fadeIn"></div>
                <div className="normal-web-container spaceRemover">

                    <div className="limiter">
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Lifestyle & Mentality</h3>
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Lifestyle & Mentality</h3>
                                    <p className="descLong">
                                        The residents of Chennai are very adaptive and yet set in their own ways at the same time. People in Chennai are treated with utmost respect and equality is something that everyone in Chennai roots for. The people of Chennai, make sure to stand up for each other and the community in the times of need but most of all, they believe in building harmonious relations with everyone and leave absolutely no scope for isolation.<br /><br />
                                        The crowd of Chennai, be it women or men believe in being financially independent and thus most of the crowd is working. Here, intellect is given a higher power and stand than other superficial qualities. The people of Chennai are diverse who are not afraid to try out new things but at the same time stick to their morals and values. Along with being one of the safest cities to live in, Chennai also is one of the cities with a high literacy rate of 90%. People in Chennai are also very health conscious. If taken a walk in the city in the morning, you will come across a lot of people walking, running, cycling or doing yoga.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Clothing</h3>
                                <div className="explore_image tradition_culture_details_clothing" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Clothing</h3>
                                    <p className="desc">
                                        Women in Chennai wear simple cotton saris, churidars and Pattu Pavada mainly because of two reasons. First, their cultural legacy is something that they hold close to their hearts and they are very proud of it. Which is why women till this date wear saris and churidars not only for auspicious occasions but as daily wear. Secondly, the weather of Chennai is mostly such that cotton clothes suits the best for most of the year. The men go in for Veshtis, also known as Lungis- a wrap-around of cotton cloths paired with a shirt.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <h3>Religion & Community</h3>
                            <div className="hero-card-container">
                                <div className="explore_image_long tradition_culture_details_religion_community" />
                            </div>
                            <div className="hero-card-container">
                                <div className="discover-text-content">
                                    <p className="descLong">
                                        In the matter of religion, Chennai is very diverse. It serves as a house for multiple different religions like Hinduism, Christianity, Muslims etc. Though it is primarily constituted by the Hindus, all the religions live in harmony and co-operation. There is a high level of religious tolerance amongst people and they make sure to respect the religious sentiments of everyone.<br /><br />
                                        Some other significant communities are Anglo Indian, Punjabi, Bengali, Gujarati and Marwari communities, as well as people from Bihar and Uttar Pradesh. Besides the local Tamilians, there is a sizeable migrant population from surrounding places - communities of Telugu, Malayalee and Sri Lankan Tamil abound in the city.<br /><br />
                                        Usually, the day of a Tamil household begins at the crack of dawn by performing religious rites. The doorsteps are decorated with kolam on a daily basis. Kolam are patterns made from rice power or white stone powder.<br /><br />
                                        The people of Chennai are extremely religious and mostly visit the temples on Fridays. All the festivals and ceremonies too are celebrated with grandeur. People of different cultures residing peacefully in the city with the local inhabitants are proof that they are one of the humblest and accepting crowd of people in the country.
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
