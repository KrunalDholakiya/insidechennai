import React from 'react'
import '../../../assets/styles/page.scss'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class Religious extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Religious | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar rActiveBar animated fadeIn"></div>
                <div className="spaceContainer"></div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row baps_swaminarayan_mandir" to="/discover-chennai/religious/baps_swaminarayan_mandir">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">BAPS Swaminarayan Mandir</p>
                                    <p className="desc textCenter">Aravamuthu Garden Street</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row aanjaneya_temple" to="/discover-chennai/religious/aanjaneya_temple">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Aanjaneya Temple</p>
                                    <p className="desc textCenter">Nanganallur</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row annai_velankani_church" to="/discover-chennai/religious/annai_velankani_church">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Annai Velankani Church</p>
                                    <p className="desc textCenter">Besant Nagar</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row ashtalakshmi_temple" to="/discover-chennai/religious/ashtalakshmi_temple">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Ashtalakshmi Temple</p>
                                    <p className="desc textCenter">Besant Nagar</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row iskon_temple" to="/discover-chennai/religious/iskon_temple">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Iskon Temple</p>
                                    <p className="desc textCenter">East Coast Road</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row kalikambal_temple" to="/discover-chennai/religious/kalikambal_temple">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Kalikambal Temple</p>
                                    <p className="desc textCenter">Parry'S Corner</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row kapaleeshwar_temple" to="/discover-chennai/religious/kapaleeshwar_temple">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Kapaleeshwar Temple</p>
                                    <p className="desc textCenter">Mylapore</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row little_mount" to="/discover-chennai/religious/little_mount">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Little Mount</p>
                                    <p className="desc textCenter">Saidapet</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row luz_church" to="/discover-chennai/religious/luz_church">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Luz Church</p>
                                    <p className="desc textCenter">Mylapore</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row marundeeshwar_temple" to="/discover-chennai/religious/marundeeshwar_temple">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Marundeeshwar Temple</p>
                                    <p className="desc textCenter">Thiruvanmiyur</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row parthasarathy_temple" to="/discover-chennai/religious/parthasarathy_temple">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Parthasarathy Temple</p>
                                    <p className="desc textCenter">Triplicane</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row santhome_cathedral_basilica" to="/discover-chennai/religious/santhome_cathedral_basilica">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Santhome Cathedral Basilica</p>
                                    <p className="desc textCenter">Santhome</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row shirdi_saibaba_temple" to="/discover-chennai/religious/shirdi_saibaba_temple">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Shirdi Saibaba Temple</p>
                                    <p className="desc textCenter">East Coast Road</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row thousad_lights_mosque" to="/discover-chennai/religious/thousad_lights_mosque">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Thousad Lights Mosque</p>
                                    <p className="desc textCenter">Anna Salai Road</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row vadapalani_murugan_temple" to="/discover-chennai/religious/vadapalani_murugan_temple">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Vadapalani Murugan Temple</p>
                                    <p className="desc textCenter">Vadapallini</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row vellankani_shrine" to="/discover-chennai/religious/vellankani_shrine">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Vellankani Shrine</p>
                                    <p className="desc textCenter">Velankanni</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="last_child_container">
                        <Link className="list_item_row wallajah_mosque" to="/discover-chennai/religious/wallajah_mosque">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Wallajah Mosque</p>
                                    <p className="desc textCenter">Triplicane</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <div className="spaceContainer"></div>
            </div>
        )
    }
}
