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

export default class Market extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Market | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar mActiveBar animated fadeIn"></div>
                <div className="spaceContainer"></div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row burma_bazaar" to="/discover-chennai/market/burma_bazaar">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Burma Bazaar</p>
                                    <p className="desc textCenter">Parrys Corner</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row george_town_market_bazaar" to="/discover-chennai/market/george_town_market_bazaar">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">George Town Market And Bazaar</p>
                                    <p className="desc textCenter">George Town</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row koyembedu" to="/discover-chennai/market/koyembedu">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Koyembedu</p>
                                    <p className="desc textCenter">Koyembedu</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row pudupet_market" to="/discover-chennai/market/pudupet_market">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Pudupet Market</p>
                                    <p className="desc textCenter">Egmore</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row ranganathan_street" to="/discover-chennai/market/ranganathan_street">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Ranganathan Street</p>
                                    <p className="desc textCenter">T Nagar</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row zam_bazzar" to="/discover-chennai/market/zam_bazzar">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Zam Bazzar</p>
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
