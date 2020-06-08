import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../commons/Footer'
import '../../assets/styles/homeNew.scss'
import SlimHeader from '../commons/slimHeader'
import ScrollAnimation from 'react-animate-on-scroll'
import Instafeed from 'instafeed'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class HomeNew extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Inside Chennai";

        // Bounce Text JS
        const header = document.getElementById('AnimatedText');
        const headerSpanned = [];
        header.textContent.split('').forEach((letter) => {
            headerSpanned.push(`<span>${letter}</span>`);
        });
        header.innerHTML = headerSpanned.join('');

        // Get the spans in NodeList
        const spans = document.querySelectorAll('span');

        let drawCount = 0;

        function draw() {
            if (drawCount % 5 === 0 || drawCount % 5 === 1) {
                spans.forEach((span) => {
                    span.style.color = 'white';
                    span.style.transform = `scale(1) translate(0,0)`;
                })
            } else {
                spans.forEach((span) => {
                    // Generate random numbers
                    const randomBoolean = Math.random() >= 0.3;
                    const randomScale = Math.random() * 2 + 0.4;
                    const randomTranslate = Math.random() * 200 - 100 + 1;

                    // Apply random transforms and transparency
                    span.style.transform = `scale(${randomScale}) translate(${randomTranslate * 1}%, ${randomTranslate / 3}%)`;
                    if (randomBoolean) {
                        span.style.color = 'rgba(0,0,0,0)';
                    } else {
                        span.style.color = 'whitesmoke';
                    }
                });
            }
            drawCount++;
        }

        // Animate
        window.setInterval(draw, 1052);

        //Instagram API
        var feed = new Instafeed({
            get: 'user',
            userId: 8427447534,
            accessToken: '8427447534.1677ed0.c045b6ea632d47a1abdc03541f980f06',
            limit: 4,
            target: 'instafeed',
            sortBy: 'most-recent',
            resolution: 'standard_resolution',

            filter: function (image) {
                var date = new Date(image.created_time * 1000);
                var months = new Array(12);
                months[0] = 'January';
                months[1] = 'February';
                months[2] = 'March';
                months[3] = 'April';
                months[4] = 'May';
                months[5] = 'June';
                months[6] = 'July';
                months[7] = 'August';
                months[8] = 'September';
                months[9] = 'October';
                months[10] = 'November';
                months[11] = 'December';
                // * parse month, day and year
                var month = date.getMonth();
                var day = date.getDate();
                var year = date.getFullYear();
                // * concatenate and assign time
                var time = months[month] + ' ' + day + ', ' + year;
                image.created_time = time;
                // * end function execution
                return true;
            },
            template: '<a class="image" target="_blank" href="{{link}}"><img src="{{image}}"><div class="instaInfo"><p class="caption">{{caption}}</p><p class="date">{{model.created_time}}</p></div><div class="likes"><span class="heart_logo"></span><p>{{likes}}</p></div></a>'
        });
        // initialize feed
        feed.run();
    }

    render() {
        return (
            <div>

                <SlimHeader />

                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="homeWallpaperContaine">
                        <h1 id="AnimatedText">InsideChennai</h1>
                    </div>
                </ScrollAnimation>

                <div className="home-holder">
                    <div className="limiter">

                        <div className="home-container">
                            <div className="text">
                                <ScrollAnimation animateIn="fadeInLeft" animateOnce>
                                    <h2 className="title">About Chennai</h2>
                                    <div className="drop orangeHome"></div>
                                </ScrollAnimation>
                                <div className="desc">
                                    Chennai is one of the leading cities of India. It has a rich history and a fast-paced developing economy. Its beaches, people, food, safety, infrastructure and the education system among several other factors easily makes it one of the best cities. Read on to find out more about this interesting city in a nutshell!
                                    <Link to="/about-chennai">
                                        <div className="more">
                                            View more
                                            <div className="more-arrow" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="images">
                                <div className="group g1"></div>
                            </div>
                        </div>

                        <div className="home-container reverse">
                            <div className="text">
                                <ScrollAnimation animateIn="fadeInRight" animateOnce>
                                    <h2 className="title">Discover Chennai</h2>
                                    <div className="drop orangeHome"></div>
                                </ScrollAnimation>
                                <div className="desc">
                                    With its historic landmarks and buildings, long sandy beaches, cultural art centers and parks, Chennai offers many potentially interesting locations to visitors.The heart of Chennai still remains in the multitude of old temples and churches dotting various parts of the city. Chennai is a city that has a plethora of dimensions that one can explore.
                                    <Link to="/discover-chennai">
                                        <div className="more">
                                            View more
                                            <div className="more-arrow" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="images">
                                <div className="group g2"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="home-tradition-container">
                        <h2 className="textCenter">Tradition & Culture</h2>
                        <div className="drop orange" />
                        <p className="textCenter textpadding">The people of Chennai are known as “Chennaiites”. Although the mentality is quite orthodox and the people take their traditions very seriously, there exists mutual respect, companionship and kindness is widely believed in and the capital is a perfect blend of traditional beliefs and modernity merging in harmony.</p>
                        <div className="cards-container">
                            <div className="cards">
                                <Link className="card" to="/tradition-and-culture/people-of-chennai">
                                    <div className="img home_people_of_chennai" />
                                    <p className="textCenter">People of Chennai</p>
                                </Link>
                                <Link className="card" to="/tradition-and-culture/festivals-of-chennai">
                                    <div className="img home_festivals_of_chennai" />
                                    <p className="textCenter">Festivals of Chennai</p>
                                </Link>
                                <Link className="card" to="/tradition-and-culture/art-form-of-chennai">
                                    <div className="img home_art_of_cheannai" />
                                    <p className="textCenter">Art forms of Chennai</p>
                                </Link>
                            </div>
                        </div>
                        <div className="viewmorespaceContainer"></div>
                        <Link to="/tradition-and-culture">
                            <div className="more">
                                View more
                                <div className="more-arrow" />
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>

                <div className="spaceContainer"></div>

                <div className="chennaiAbout">
                    <Link className="chennaiAbout-container chennai_cuisine" to="/tradition-and-culture/chennai-cuisine">
                        <div className="details-container flexCenter">
                            <ScrollAnimation animateIn="zoomIn" animateOnce>
                                <div className="details">
                                    <p className="title textCenter">Chennai Cuisine</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </Link>
                    <Link className="chennaiAbout-container tamil-container" to="/tradition-and-culture/tamil">
                        <div className="details-container flexCenter">
                            <ScrollAnimation animateIn="zoomIn" animateOnce>
                                <div className="details">
                                    <p className="title textCenter">Tamil</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </Link>
                </div>

                <div className="chennaiAbout">
                    <Link className="chennaiAbout-container history-container" to="/about-chennai/history">
                        <div className="details-container flexCenter">
                            <ScrollAnimation animateIn="zoomIn" animateOnce>
                                <div className="details">
                                    <p className="title textCenter">History</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </Link>
                    <Link className="chennaiAbout-container transportation-container" to="/about-chennai/transportation">
                        <div className="details-container flexCenter">
                            <ScrollAnimation animateIn="zoomIn" animateOnce>
                                <div className="details">
                                    <p className="title textCenter">Transportation</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </Link>
                </div>


                <div className="business-dots-home-container flexCenter ">
                    <div className="business-dots-card">
                        <div className="content">
                            <div className="data">
                                <h1 className="title">Business <dotsTage>Dots</dotsTage></h1>
                                <p className="desc">Dot your web presence easily.</p><br />
                                <Link className="business_dots_read_more_btn" to="/business-dots">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="home-tradition-container">
                        <h2 className="textCenter">New & Now</h2>
                        <div className="drop orange" />
                        <p className="textCenter">Recent social media activites of our platform</p>

                        <div className="limiter" style={{ marginTop: '20px' }}>
                            <div id="instafeed"></div>
                        </div>

                        <div className="viewmorespaceContainer"></div>
                        <Link to="/new-and-now">
                            <div className="more">
                                View more
                                <div className="more-arrow" />
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>

                <Footer />

            </div>
        )
    }

}
