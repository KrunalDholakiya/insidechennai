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

export default class HistoricalPlace extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Historical Place | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar hpActiveBar animated fadeIn"></div>
                <div className="spaceContainer"></div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row amir_mahal" to="/discover-chennai/historical-places/amir_mahal">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Amir Mahal</p>
                                    <p className="desc textCenter">Royapettah</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row fort_st_george" to="/discover-chennai/historical-places/fort_st_george">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Fort St. George</p>
                                    <p className="desc textCenter">Raja Salai Road</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row krishna_butterball" to="/discover-chennai/historical-places/krishna_butterball">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Krishna Butterball</p>
                                    <p className="desc textCenter">Mahabalipuram</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row mahabalipuram" to="/discover-chennai/historical-places/mahabalipuram">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Mahabalipuram</p>
                                    <p className="desc textCenter">Kancheepuram</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row ripon_building" to="/discover-chennai/historical-places/ripon_building">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Ripon Building</p>
                                    <p className="desc textCenter">Periyamet</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row sadras" to="/discover-chennai/historical-places/sadras">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Sadras</p>
                                    <p className="desc textCenter">Kancheepuram</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row senate_house" to="/discover-chennai/historical-places/senate_house">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Senate House</p>
                                    <p className="desc textCenter">Wallajah Road</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row war_memorial" to="/discover-chennai/historical-places/war_memorial">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">War Memorial</p>
                                    <p className="desc textCenter">Sathya Nagar</p>
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
