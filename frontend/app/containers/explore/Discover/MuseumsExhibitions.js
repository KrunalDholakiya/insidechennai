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

export default class MuseumsExhibitions extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Museums & Exhibitions | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar meActiveBar animated fadeIn"></div>
                <div className="spaceContainer"></div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row birla_planetarium" to="/discover-chennai/museums-and-exhibitions/birla_planetarium">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Birla Planetarium</p>
                                    <p className="desc textCenter">Kotturpuram</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row cholamandal_artist_village" to="/discover-chennai/museums-and-exhibitions/cholamandal_artist_village">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Cholamandal Artist Village</p>
                                    <p className="desc textCenter">Mahabalipuram Road</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row dakshin_chitra" to="/discover-chennai/museums-and-exhibitions/dakshin_chitra">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Dakshin Chitra</p>
                                    <p className="desc textCenter">East Coast Road</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row government_museum" to="/discover-chennai/museums-and-exhibitions/government_museum">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Government Museum</p>
                                    <p className="desc textCenter">Egmore</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row lalith_kala_academy" to="/discover-chennai/museums-and-exhibitions/lalith_kala_academy">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Lalith Kala Academy</p>
                                    <p className="desc textCenter">Greams Road</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row national_art_gallery" to="/discover-chennai/museums-and-exhibitions/national_art_gallery">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">National Art Gallery</p>
                                    <p className="desc textCenter">Egmore</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row railway_museum" to="/discover-chennai/museums-and-exhibitions/railway_museum">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Railway Museum</p>
                                    <p className="desc textCenter">Villivakam</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row vivekanand_museum" to="/discover-chennai/museums-and-exhibitions/vivekanand_museum">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Vivekananda Museum</p>
                                    <p className="desc textCenter">Kamarajar Salai</p>
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
