import React from 'react'
import '../../assets/styles/businessdots.scss'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class DotType extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Select Dots | Business Dots | Inside Chennai";

        const card1 = document.querySelector('.card1');
        function clickRotate() {
            card1.classList.toggle('rotated');
        }
        card1.addEventListener('click', clickRotate);

        const card2 = document.querySelector('.card2');
        function clickRotate2() {
            card2.classList.toggle('rotated');
        }
        card2.addEventListener('click', clickRotate2);

        const card3 = document.querySelector('.card3');
        function clickRotate3() {
            card3.classList.toggle('rotated');
        }
        card3.addEventListener('click', clickRotate3);
    }


    render() {
        return (
            <div className="dot-type-body">
                <h1 className="dots_type_heading">Select Your Dots</h1>
                <div className="dots_type_card_container">
                    <div className="cards-wrapper">
                        <div className="card-container">
                            <div className="card1" id="card">
                                <div className="card-contents card-front business">
                                    <div className="card-depth">
                                        <h2>Dot<br />Your Business</h2>
                                        <hr />
                                        <p>Click for more</p>
                                        <Link className="select_dot_button" to="/business-dots">
                                            Select Dot
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-contents card-back">
                                    <div className="card-depth">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat non officiis numquam quisquam similique. Ab, possimus amet nam distinctio nisi obcaecati aut magnam officiis, temporibus quisquam enim, dolorum veritatis.</p>
                                        <Link className="select_dot_button" to="/business-dots">
                                            Select Dot
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards-wrapper">
                        <div className="card-container">
                            <div className="card2" id="card">
                                <div className="card-contents card-front event">
                                    <div className="card-depth">
                                        <h2>Dot<br />Your Event</h2>
                                        <hr />
                                        <p>Click for more</p>
                                        <Link className="select_dot_button" to="/business-dots">
                                            Select Dot
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-contents card-back">
                                    <div className="card-depth">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore aspernatur, dignissimos error eius assumenda voluptatum ex commodi dolores architecto culpa. Nulla iure nam quas quaerat tempora minima repellat nemo?</p>
                                        <Link className="select_dot_button" to="/business-dots">
                                            Select Dot
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards-wrapper">
                        <div className="card-container">
                            <div className="card3" id="card">
                                <div className="card-contents card-front personal">
                                    <div className="card-depth">
                                        <h2>Dot<br />Your Self</h2>
                                        <hr />
                                        <p>Click for more</p>
                                        <Link className="select_dot_button" to="/business-dots">
                                            Select Dot
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-contents card-back">
                                    <div className="card-depth">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum iure iusto. Nesciunt exercitationem fugiat animi! Quo molestiae praesentium asperiores sit ea aut, fuga autem. Vitae voluptatibus corporis architecto ipsa.</p>
                                        <Link className="select_dot_button" to="/business-dots">
                                            Select Dot
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}