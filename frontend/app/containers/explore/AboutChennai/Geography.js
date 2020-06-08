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

export default class Geography extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Geography | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar ftActiveBar animated fadeIn"></div>
                <div className="normal-web-container spaceRemover">

                    <div className="limiter">
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <div className="explore_image_long about_chennai_details_geography" />
                            </div>
                            <div className="hero-card-container">
                                <div className="discover-text-content">
                                    <div className="descLong">
                                        Chennai is located on the south–eastern coast of India, in the north–eastern part of Tamil Nadu, on a flat coastal plain known as the Eastern Coastal Plains. Two major rivers flow through Chennai, the Cooum River and Adyar River to the south. Chennai's soil is mostly clay, shale and sandstone. Clay underlies most of the city, chiefly Manali, Kolathur, Maduravoyal, K. K. Nagar, Tambaram, Mudichur, Pallavaram Semmencherry, Alapakkam, Vyasarpadi and Anna Nagar. Sandy areas are found along the river banks and coasts, and include areas such as Tiruvottiyur, George Town, Madhavaram, New Washermanpet, Chepauk, Mylapore, Porur, Adyar, Besant Nagar and Uthandi. Areas having hard rock surface include Guindy, Nanganallur, Pallikaranai, Alandur, Jaladampet, Velachery, Adambakkam and a part of Saidapet and Perungudi. The ground water table in Chennai is at 4-5m below ground in most of the areas, which was considerably improved and maintained through the mandatory rain water harvesting system.
                                        <div className="spaceContainer"></div>
                                        <h3>Environment Conservation</h3>
                                        The Department of Environment was created in 1995 as the Nodal Department for dealing with environmental management of the State. The Department of Environment (DoE) is the nodal Agency for planning, promotion,
                                        coordination and overseeing the implementation of all the aspects of environment other than those dealt
                                        with Tamil Nadu Pollution Control Board.<br /><br />
                                        <b>It has a few aims and objectives that it wants to achieve over the years</b><br />
                                        <b>1.</b> Implementation of National River Conservation Plan (NRCP) for the abatement of pollution in Cauvery, Vaigai, Tamiraparani rivers and Chennai City waterways.<br />
                                        <b>2.</b> Implementation of National Lake Conservation Plan (NLCP) for the abatement of pollution in the selected lakes.<br />
                                        <b>3.</b> To carry out various Environmental awareness programmes for school students, through National Green Corps (NGC) and Eco-Clubs.<br />
                                        <b>4.</b> To enforce the provisions of the Coastal Regulation Zone (CRZ) Notification.<br />
                                        <b>5.</b> To provide web-based environmental information through Environmental Information System (ENVIS) on State of Environment and related issues of Tamil Nadu.<br />
                                        <b>6.</b> Preparation of State of Environment (SoE) Report, SoE Atlas SoE Video and Photo Catalogue of Tamil Nadu.<br />
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <div className="climateSpace"></div>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <h3 >Climate</h3>
                            <div className="hero-card-container">
                                <div className="explore_image about_chennai_details_climate" />
                                <div className="discover-text-content">
                                    <p className="desc">
                                        Chennai has a tropical wet and dry climate. The city lies on the thermal equator and is also on the coast, because of which there is not much of a variation in the seasonal temperature. The hottest part of the year is late May to early June with maximum temperatures ranging from 35–40 °C (95–104 °F). The coolest part of the year is January, with minimum temperatures varying from 19–25 °C (66–77 °F). The average annual rainfall is about 140 cm (55 in).
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
