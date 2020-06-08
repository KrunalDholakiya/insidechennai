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

export default class CycleOfLife extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Cycle Of Life | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar colActiveBar animated fadeIn"></div>
                <div className="normal-web-container spaceRemover">

                    <div className="limiter">
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">The Naming Ceremony</h3>
                                <div className="explore_image tradition_culture_details_naming_ceremony" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">The Naming Ceremony</h3>
                                    <p className="desc">
                                        Eleven days after the birth of the new born, the baby is given its name in the naming ceremony. This is a very joyful occasion shared by all the members of the family and their relatives and friends. The baby is dressed in new clothes and small dots of kohl on the baby’s feet, palm, forehead and eyes as it is believed that the kohl will protect the baby from evil eye. The name of the baby is then whispered in its ear by all the family members, and the baby is showered with tokens of love. The ceremony is then followed by a meal that is hosted by the parents of the baby.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Manjal Neerattu Vizha</h3>
                                <div className="explore_image tradition_culture_details_manjal_neerattu_vizha" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Manjal Neerattu Vizha</h3>
                                    <p className="desc">
                                        In the Tamil culture, the first menstrual cycle of a girl is celebrated with great pomp and grandeur. As weird as it may sound, it is a ritual that is prevalent from decades and is still continued. Tamilians consider this a celebration of a girl entering her womanhood and all the responsibilities that come with it. In the olden times when matrimony ads weren’t available, this was the technique that people used to publicise to suitable grooms about their daughter who had reached the maturity age and would soon reach the ae of marriage. It is an elaborate function where all relatives and family members are invited. Everyone present there is dressed on the grandest of the outfits with heavy jewellery.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container">
                                <h3 className="discover-chennai-title mobile_title">Weddings</h3>
                                <div className="explore_image tradition_culture_details_weddings" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Weddings</h3>
                                    <p className="desc">
                                        Be it any religion or community, weddings are a very important part of it. In Chennai, the Tamilian weddings, also referred to as “Kalyanam".  These weddings usually take place in temples. They have their own set of rituals to follow. One such interesting ritual is Kashi Yatra – The groom’s family arrives at the wedding venue and the groom grabs and umbrella, walking sticks and some food to go off to Varanasi or Kashi, renouncing all worldly attachments to pursue religious studies. The father of the bride tries to stop him outside the wedding hall by enlightening him of the worldly pleasures and virtues of the domestic life, as opposed to hermit one. He then promises the groom to give his daughter to him in marriage. The groom accepts this proposal and returns to the wedding venue to get married. The umbrella is to be kept with the groom throughout the wedding to remind him of the decision and his duties thereby.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <div className="hero-card-container reverse">
                                <h3 className="discover-chennai-title mobile_title">Death Ceremonies</h3>
                                <div className="explore_image tradition_culture_details_death_ceremonies" />
                                <div className="discover-text-content">
                                    <h3 className="discover-chennai-title">Death Ceremonies</h3>
                                    <p className="desc">
                                        Like any other culture, when a death occurs, the whole family gets together to support each other and to perform rituals that make sure that the soul rests in peace. These rituals start by thoroughly cleaning the room that the body would be kept in. The body is then covered in a white cloth or a saree (in case of a woman) and is kept in the room for all the relatives to pay their respects after which, the men of the house carry the body to the cremation ground where is it either burnt or buried.
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
