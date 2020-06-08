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

export default class ChennaiCuisine extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Chennai Cuisine | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar ccActiveBar animated fadeIn"></div>
                <div className="normal-web-container spaceRemover">

                    <div className="limiter">
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Filter Coffee</h3>
                                <div className="explore_image tradition_culture_details_filter_coffee" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Filter Coffee</h3>
                                    <p className="desc">
                                        Most people living in Chennai start their day with a hot cup of filter coffee which ensure a very energetic day and gives the boost that one would need in the morning. Filter coffee is made by adding hot frothy milk to the decoction of coffe that is made by brewing finely ground coffee powder with a filter. In Chennai, the slang term for filter coffee is filter "kaapi". Usually the best filter coffees are available in South Indian diners and restaurants and small road side shops.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Idali, Dosa & Vada</h3>
                                <div className="explore_image tradition_culture_details_idali_dosa_vada" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Idali, Dosa & Vada</h3>
                                    <p className="desc">
                                        All these three items are made from rice flour and can be eaten at any time of the day. It is quite filling and has nutritious values as well. Idlis are white round soft fluffs that are made by steaming the idli batter.<br /><br />
                                        Dosas are like crepes of Chennai. They are crispy and are made from fermented batter. There are a variety of dosas that are available in Chennai like plain dosa, masala dosa and podi dosa.<br /><br />
                                        Vada is a category of savoury fried snacks from south India. Different types of vadas can be described variously as fritters, cutlets, doughnuts, or dumplings. Sambhar vada is one of the most preferred ways of eating vada.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Full Meals</h3>
                                <div className="explore_image tradition_culture_details_full_meals" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Full Meals</h3>
                                    <p className="desc">
                                        The making of full South Indian meals is complete with 14 dishes. Semiya Payasam, Mango Pachadi, Ridge Gourd/Pirkangai Thuvaiyal, Cabbage Poriyal, Vendaikkai / Bindi Fry, Mor-Kuzhambu / ButterMilk Kuzhambu, Rasam, Kaara Kuzhambu, Murungakkai / Drumstick Sambar, Paruppu, Medu Vadai, Appalam and Rice. It is a very heavy meal. This whole meal is layed out on a banana leaf that acts as a plate.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Chaat</h3>
                                <div className="explore_image tradition_culture_details_chaat" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Chaat</h3>
                                    <p className="desc">
                                        To get the best Chaat in Chennai, one has to visit Sowcarpet. Dominated by marwaris, this area has some of the tastiest chaat available in the city. Ranging from spicy Pani puris to hot and tangy pav bhajis, the best of everything is available here at every nook and corner of the street, that too at basic prices. The sandwiches of sowcarpet are also very famous and some shops which have been functioning since 20 years still do good business because of their food. Although surprisingly, the speciality of Chennai is the Muruku Sandwich, which is as the name suggests all the fillings of a sandwich fitted inside a muruku, and it sure is a must try!
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
