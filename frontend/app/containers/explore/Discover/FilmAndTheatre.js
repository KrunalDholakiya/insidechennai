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

export default class FilmTheatre extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Film & Theater | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar ftActiveBar animated fadeIn"></div>
                <div className="spaceContainer"></div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row avm_studio" to="/discover-chennai/film-and-theatre/avm_studio">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">AVM Studios</p>
                                    <p className="desc textCenter">Vadapalani</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row ega_theatre" to="/discover-chennai/film-and-theatre/ega_theatre">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">EGA Theatre</p>
                                    <p className="desc textCenter">Kilpauk</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row escape" to="/discover-chennai/film-and-theatre/escape">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Escape</p>
                                    <p className="desc textCenter">Royapettah</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row inox_theatre" to="/discover-chennai/film-and-theatre/inox_theatre">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Inox Theatre</p>
                                    <p className="desc textCenter">Mylapore</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row kalakshetra_art_academy" to="/discover-chennai/film-and-theatre/kalakshetra_art_academy">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Kalakshetra Arts Academy</p>
                                    <p className="desc textCenter">Thiruvanmiyur</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row mgr_film_city" to="/discover-chennai/film-and-theatre/mgr_film_city">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">MGR Flim City</p>
                                    <p className="desc textCenter">Taramani</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row palazzo" to="/discover-chennai/film-and-theatre/palazzo">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Palazzo</p>
                                    <p className="desc textCenter">Vadapalani</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row prarthana_drive_in" to="/discover-chennai/film-and-theatre/prarthana_drive_in">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Prarthana Drive IN</p>
                                    <p className="desc textCenter">East Coast Road</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="last_child_container">
                        <Link className="list_item_row satyam" to="/discover-chennai/film-and-theatre/satyam">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Satyam</p>
                                    <p className="desc textCenter">Royapettah</p>
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
