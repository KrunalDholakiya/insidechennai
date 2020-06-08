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

export default class LibraryPark extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Library & Park | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar lpActiveBar animated fadeIn"></div>
                <div className="spaceContainer"></div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row anna_nagar_tower_park" to="/discover-chennai/library-and-parks/anna_nagar_tower_park">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Anna Nagar Tower Park</p>
                                    <p className="desc textCenter">Anna Nagar</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row arignar_anna_zoological_park" to="/discover-chennai/library-and-parks/arignar_anna_zoological_park">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Arignar Anna Zoological Park</p>
                                    <p className="desc textCenter">Kanchipuram District</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row anna_centenary_library" to="/discover-chennai/library-and-parks/anna_centenary_library">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Anna Centenary Library</p>
                                    <p className="desc textCenter">Kotturpuram</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row conemera_public_library" to="/discover-chennai/library-and-parks/conemera_public_library">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Conemera Public Library</p>
                                    <p className="desc textCenter">Egmore</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row guindy_national_park" to="/discover-chennai/library-and-parks/guindy_national_park">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Guindy National Park</p>
                                    <p className="desc textCenter">Guindy</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row panagal_park" to="/discover-chennai/library-and-parks/panagal_park">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Panagal Park</p>
                                    <p className="desc textCenter">T Nagar</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row senmozhi_poonga" to="/discover-chennai/library-and-parks/senmozhi_poonga">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Senmozhi Poonga</p>
                                    <p className="desc textCenter">Cathedral Road</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row theosophical_society_india" to="/discover-chennai/library-and-parks/theosophical_society_india">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Theosophical Society Of India</p>
                                    <p className="desc textCenter">Adyar</p>
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
