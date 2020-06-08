import React from 'react'
import Footer from '../commons/Footer'
import '../../assets/styles/page.scss'
import SlimHeader from '../commons/slimHeader'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class Inner extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location_path: [
                'home', 'explore chennai', 'attractions'
            ],
            key: "value",
            //Attraction Details
            "anna_memorial": {
                "title": "Anna Memorial",
                "location": "Anna Nagar",
                "googlemap": "https://www.google.co.in/maps/dir//anna+memorial+chennai/@13.0655052,80.2155694,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3a5268a37da9fb95:0x84aa5cbb47eed713!2m2!1d80.2856099!2d13.0655146",
                "description": "Built in the memory of the former Chief Minister of Tamil Nadu, C.N Annadurai (1967-69), the Anna Memorial (also known as Anna Samadhi) is situated on the Marina Beach. Our honourable former chief minister was cremated here in the year 1969. The remodelling of the memorial costed a whopping Rs. 27.5 million which added the design of a ‘Rising Sun’- the symbol of the DMK party who was in power at the time (1996-1998). Although, the design was not up for long before the AIADMK came into power and returned the memorial in its previous form along with some rich renovations. ",
                "image_path": "discover_chennai/attraction/ANNA-MEMORIAL.jpg",
            },
            "broken_bridge": {
                "title": "Broken Bridge",
                "location": "Adyar",
                "googlemap": "https://www.google.co.in/maps/dir//Broken+Bridge,+Theosophical+Society,+ADYAR,+Chennai,+Tamil+Nadu+600090/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5267e03baa738b:0xcd109853f738577a?ved=2ahUKEwiQ7fLFo4XfAhVLb30KHRM7BHkQ48ADMAB6BAgBECc",
                "description": "Adayar Broken Bridge, as the name suggests it’s a broken bridge which was originally built in the year 1967. This bridge was constructed for the benefit of fishermen to cross the Adayar River from Santhome Beach to Elliot’s Beach. Due to strong river currents in the beach, this bridge was damaged and broken in the year 1977 and it has been unrepaired since then. The Broken Bridge somehow offers a picturesque view in spite of its incompleteness, because of which it attracts a lot of crowd like youngsters and short film directors. This spot I one of the best to view the sunrise. However, the Broken Bridge is closed to public after 6:00 PM due to the lack of lighting and structured roads.",
                "image_path": "discover_chennai/attraction/BROKEN-BRIDGE.jpg",
            },
            "chennai_central_railway_station": {
                "title": "Chennai Central Railway Station",
                "location": "Wall Tax Road, Broadway",
                "googlemap": "https://www.google.co.in/maps/dir//Chennai+Central+Railway+Station/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5265ffa1216265:0x47ee704562150916?ved=2ahUKEwjrtb-Do4XfAhUJbn0KHZQyA6kQ9RcwGHoECAQQDg",
                "description": "Chennai Railway Station is a very important part of Chennai as it is the main railway terminus of the city. It connects Chennai to all the northern cities like Kolkata, Mumbai and New Delhi. Not only the main cities, but also to multiple small towns like Mysore, Salem, Kodaikinal etc. where without the train service, transportation would be extremely difficult. Almost About 350,000 passengers use the terminus every day. Chennai Egmore, Coimbatore Junction and Chennai Central are the most profitable stations of Southern Railways.",
                "image_path": "discover_chennai/attraction/CHENNAI-CENTRAL-RAILWAY-STATION.jpg",
            },
            "crocodile_bank": {
                "title": "Crocodile Bank",
                "location": "East Coast Road",
                "googlemap": "https://www.google.co.in/maps/dir//crocodile+bank/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5251a3af0ea0dd:0x1102cc13ab9b9ccb?ved=2ahUKEwj61piro4XfAhXUfn0KHUK2DpkQ9RcwG3oECAIQDg",
                "description": "The Madras Crocodile Bank Trust and Centre for Herpetology is a reptile zoo and herpetology research station, located 40 kilometres south of the city, along the East Coast Road. It is India's leading institution for herpeto faunal conservation, research and education. is home to over 2500 reptiles. It is spread over eight and a half acres of land which makes it one of the largest reptile zoos in the world. For outdoor nature enthusiasts, the spacious Croc Bank grounds are covered by luxuriant coastal dune forest and provide a haven for native wildlife, including large breeding colonies of water birds and a secure nesting beach for Olive Ridley Sea Turtles.",
                "image_path": "discover_chennai/attraction/CROCODILE-BANK.jpg",
            },
            "chennai_international_airport": {
                "title": "Chennai International Airport",
                "location": "Meenambakam",
                "googlemap": "https://www.google.co.in/maps/dir//Chennai+International+Airport/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525e1f5da86397:0x21092f216ee26e47?ved=2ahUKEwjh0PO3o4XfAhVKcCsKHf6QBcEQ9RcwF3oECAUQDg",
                "description": "Chennai International Airport is the fourth busiest international airport serving the city of Chennai. It handled over 20 million passengers over the last year that amounts to approximately 35000 passengers daily. Everyday almost 400 aircraft movements take place.",
                "image_path": "discover_chennai/attraction/CHENNAI-INTERNATIONAL-AIRPORT.jpg",
            },
            "express_avenue": {
                "title": "Express Avenue",
                "location": "Royapettah",
                "googlemap": "https://www.google.co.in/maps/dir//express+avenue/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525d9a9c244571:0x8795a1a0b7a4534b?ved=2ahUKEwjh7aDWo4XfAhVaWH0KHUCXBrkQ9RcwD3oECAIQDg",
                "description": "Express Avenue Mall, South India's second largest mall, is designed keeping in mind the 'shopper-tainment' concept and this green building developed on 11 acres of land has a rich architecture splendour. Built at a cost of 750 crore and located in the heart of the city, the mall houses a classy food court and a multiplex. The 9,00,000 sq. ft. of retail space houses 210 premium national and international brands. Along with multiple retail outlets, the mall also has many eateries, a vast food court, multiple cinema screens and also ample of parking space.",
                "image_path": "discover_chennai/attraction/EXPRESS-AVENUE.jpg",
            },
            "forum_viyaja_mall": {
                "title": "Forum Viyaja Mall",
                "location": "Vadapalani",
                "googlemap": "https://www.google.co.in/maps/dir//Forum+Vijaya+Mall/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5266c2084f9c3b:0x54b9629cc45d76f0?ved=2ahUKEwiR4Znho4XfAhXPAnIKHUGLBIgQ9RcwEXoECAQQEA",
                "description": "Forum Vijaya Mall is a shopping mall located in Vadapalani, Chennai, Tamil Nadu, India, developed by Prestige Group. This mall is spread over 6,36,000 square feet of retail space. More than 100 shops occupy its four floors. This mall distinguishes itself by being local by housing Chennai-based brands in the mall such as Spar, RmKV, Lifestyle, Max, Marks & Spencer’s, Westside, Fab India and Via South. It is also home to SPI Cinema’s Palazzo multiplex and an IMAX screen as well.",
                "image_path": "discover_chennai/attraction/FORUM-VIYAJA-MALL.jpg",
            },
            "gandhi_mandapam": {
                "title": "Gandhi Mandapam",
                "location": "Adyar",
                "googlemap": "https://www.google.co.in/maps/dir//gandhi+mandapam/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52679c015d16b3:0x41241722e9766c10?ved=2ahUKEwi5sLzto4XfAhWZfH0KHYXHBGAQ9RcwDXoECAQQDQ",
                "description": "The Gandhi Mandapam is a serial of memorial structures built on the arterial Sardar Patel Road, in Adyar, Chennai. Although it is referred singularly as Gandhi Mandapam, the complex comprises four other memorials of people of eminence such as Rettamalai Srinivasan, Rajaji, Kamaraj and Minjur Bhaktavatsalam. This is the place where the urn containing the ashes of Mahatma Gandhi was kept before a portion of which was immersed in the three seas.  The premise is often utilized for public functions, mainly for cultural and musical shows.",
                "image_path": "discover_chennai/attraction/GANDHI-MANDAPAM.jpg",
            },
            "high_court_madras": {
                "title": "High Court(Madras)",
                "location": "George Town",
                "googlemap": "https://www.google.co.in/maps/dir//High+Court(Madras)/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526f5213f46501:0x56d2a4b14dba42f2?ved=2ahUKEwietpr2o4XfAhUOcCsKHWT7BC4Q9RcwGXoECAIQDg",
                "description": "The High Court of Judicature at Madras, one of the three High Courts in India established at the Presidency Towns by Letters Patent granted by Her Majesty Queen Victoria, bearing date 26th June 1862, is the highest Court in the State of Tamil Nadu, exercising Original Jurisdiction over the City of Madras and Appellate Jurisdiction over the entire State as well as extra-ordinary Original Jurisdiction, Civil and Criminal, under the Letters Patent and Special Original Jurisdiction for the issue of writs under the Constitution of India.The Hon`ble The Chief Justice is the Head of the Judiciary with powers of administration of the High Court and of the Administration of Justice throughout the State. The Hon’ble Chief Justice is in charge of the general policy adopted in the Administration of Justice.",
                "image_path": "discover_chennai/attraction/HIGH-COURT(MADRAS).jpg",
            },
            "jayalalitha_memorial": {
                "title": "Jayalalitha Memorial",
                "location": "Triplicane",
                "googlemap": "",
                "description": "Tamil Nadu government has declared the final resting place of former chief minister of the state as a monument. A memorial is planned at this place to pay homage to Jayalalitha. Several government officials and famous architects have already visited this place multiple times to propose the design and architecture for the proposed Jayalalatiha Memorial. The land at the proposed Jayalalitha Memorial is owned by The Public Works Department of Tamil Nadu. They will construct the monument adjacent to the MGR's memorial.",
                "image_path": "inner/coming_soon.jpg",
            },
            "kathipara_junction": {
                "title": "Kathipara Junction",
                "location": "Alandur",
                "googlemap": "https://www.google.co.in/maps/dir//Kathipara+Junction/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526746e6b15de1:0x8a51623d284922c7?ved=2ahUKEwiqquuQpIXfAhUSX30KHf71B-sQ9RcwFnoECAYQDQ",
                "description": "Kathipara Junction is an important road junction in Chennai, India. It is located at Alandur at the intersection of the Grand Southern Trunk Road, Inner Ring Road, Anna Salai and Mount-Poonamallee Road. Kathipara flyover is the largest cloverleaf flyover in Asia. ",
                "image_path": "discover_chennai/attraction/KATHIPARA-JUNCTION.jpg",
            },
            "light_house": {
                "title": "Light House",
                "location": "Marina Beach, Triplicane",
                "googlemap": "https://www.google.co.in/maps/dir//light+house+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526880556ddae5:0x5c17bd7aecfd0209?ved=2ahUKEwixjLqYpIXfAhWZV30KHeJLCpMQ9RcwHnoECAUQDg",
                "description": "The Madras Light House is a lighthouse facing the Bay of Bengal on the east coast of the Indian Subcontinent. It is a famous landmark on the Marina Beach in Chennai, India. It was built by the East Coast Constructions and Industries in 1976 replacing the old lighthouse in the northern direction. It is one of the few lighthouses in the world with an elevator. It is also the only lighthouse in India within the city limits. It is also a green lighthouse, with a solar panel for power. If you visit the Marina beach, you should not miss out on the absolutely stunning view that the lighthouse offers from the 9th floor.  ",
                "image_path": "discover_chennai/attraction/LIGHT-HOUSE.jpg",
            },
            "m_a_chidambaram_stadium": {
                "title": "M.A. Chidambaram Stadium",
                "location": "Chepauk",
                "googlemap": "https://www.google.co.in/maps/dir//m.a.+chidambaram+stadium/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5268a0fe968105:0x5e53260f961d4aa9?ved=2ahUKEwjYpumypIXfAhUGcCsKHX1JCXUQ9RcwJHoECAQQDg",
                "description": "M. A. Chidambaram Stadium or Chepauk Stadium is a cricket stadium in Chennai, India. The stadium was established in 1916 and it is the oldest continuously used cricket stadium in the country. Named after M A Chidambaram, former President of BCCI, the stadium was formerly known as Madras Cricket Club Ground. It is the home ground of the Tamil Nadu cricket teamand the Indian Premier League team Chennai Super Kings. The 1986 India-Australia match held at Chepauk was only the second ever Tied Test in the history of the game. The stadium is said to be one of the oldest and most iconic cricket stadiums in the world.",
                "image_path": "discover_chennai/attraction/M.A.-CHIDAMBARAM-STADIUM.jpg",
            },
            "mgr_memorial": {
                "title": "MGR Memorial",
                "location": "T Nagar",
                "googlemap": "https://www.google.co.in/maps/dir//mgr+memorial/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5268a374c3f711:0xb301b23921205f1e?ved=2ahUKEwiWuMzCpIXfAhVZXSsKHbsBDHsQ9RcwGHoECAQQDQ",
                "description": "MGR Memorial House, in Chennai, is dedicated to MG Ramachandran, India's first actor to become a chief minister and that too for three consecutive terms until his death. Considered as one of the greatest political leaders and actors of the state, his followers idolize him as Puratchi Thalaivar (Revolutionary leader). He was posthumously honoured with Bharat Ratna, the highest civilian award of India.The memorial house is situated at Arcrot Street, T. Nagar and was opened for public viewing in 1990 by Mrs Janaki Ramachandran in the presence of Dr. N.C Raghavachari, Shri N.P.V.Ramasamy Udayar and many well wishers of Late Dr. MGR. This was his official residence and was used by him for more than two decades. This memorial house is open for public viewing on all days except Tuesdays from 9:00 am to 5:00 pm.The house has a green that comes into view as you enter the house. The songs featured in Late MGR's films playing in a low tune all along will infuse the atmosphere with the feeling of his olden and golden days of acting. There are a number of shields dis played in the reception which were presented to MGR. The first floor of the house has his office room where there are displayed his belongings and personal things which he used.",
                "image_path": "discover_chennai/attraction/MGR MEMORIAL.jpg",
            },
            "napier_bridge": {
                "title": "Napier Bridge",
                "location": "Covum River",
                "googlemap": "https://www.google.co.in/maps/dir//napier+bridge/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5268a5b1dfcfd7:0xfabe20980288b7d4?ved=2ahUKEwjQmtvxpIXfAhUJEnIKHSioCTsQ9RcwGHoECAUQDQ",
                "description": "Napier Bridge was built in 1869 over the Coovum River connecting Fort St. George with the Marina beach. It is one of the city’s oldest bridges and gives a mind-blowing illusion once the sun goes down. At night when looked at from a distance, it will appear as if the bridge is floating on the water. This effect is created with special lights beneath the bridge with 464 bulb fixtures. This beautification has been done as an additional attraction for visitors to the Marina Beach, which has undergone a major facelift.",
                "image_path": "discover_chennai/attraction/NAPIER-BRIDGE.jpg",
            },
            "royapuram_fishing_harbour": {
                "title": "Royapuram Fishing Harbour",
                "location": "Royapuram",
                "googlemap": "",
                "description": "Royapuram fishing harbour, located at kasimedu in the Royapuram area also known as Chennai fishing harbour or Kasimedu fishing harbour, is one of the major fishing grounds for catching fishes and crustaceans. The harbour is located north of the Chennai Port and is under the administrative control of the Chennai Port Trust. The harbour is also a shipbuilding facility, chiefly building fishing boats. Constructed in 1975, the fishing harbour is functioning from 1984. It suffered an extensive damage during the 2004 Tsunami. ",
                "image_path": "discover_chennai/attraction/ROYAPURAM-FISHING-HARBOUR.jpg",
            },
            "triumph_of_labour_statue": {
                "title": "Triumph Of Labour Statue",
                "location": "Marina Beach",
                "googlemap": "https://www.google.co.in/maps/dir//triumph+of+labour+statue/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5268a3bffbe633:0x977dec3cda5b932?ved=2ahUKEwiGleGepYXfAhUXWX0KHT33A2MQ9RcwGHoECAUQDQ",
                "description": "The Triumph of Labour, also known as the Labour statue, is a statue at the Marina Beach, Chennai, India. This state on the northern end of the beach is an important landmark of Chennai. The statue shows four men striving to move a rock, depicting the hard work of the labouring class. The statue sculpted by Debi Prasad Roy Chowdhury and is the earliest one to be instituted on the beach and is installed close to the site where the country's first commemoration of May Day was held. The statue was installed on the eve of the Republic Day in 1959, as part of the Kamaraj government's drive to beautify the beach. The statue remains the focal point of May Day celebrations in the city.",
                "image_path": "discover_chennai/attraction/TRIUMPH-OF-LABOUR-STATUE.jpg",
            },
            "university_of_madras": {
                "title": "University Of Madras",
                "location": "Chepauk",
                "googlemap": "https://www.google.co.in/maps/dir//University+Of+Madras/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5268a1bb501c95:0xcdf621c5606c77de?ved=2ahUKEwi42YWnpYXfAhUHbysKHRiXDXsQ9RcwFnoECAAQDg",
                "description": "The University  is a collegiate research university and has six campuses in the city -Chepauk, Marina, Guindy, Taramani, Maduravoyal and Chetpet.. The University imparts both Under Graduate and Post Graduate Education through the Affiliated Institutions which are spread over the districts of Chennai, Thiruvallur and Kancheepuram. Apart from teaching, research activities in Arts, Humanities, Science, Management and Technology she the academic tenor of the University. A number of institutions affiliated to Madras University concentrate on research activities offering Ph.D., Programmes in their respective field of specialisation.",
                "image_path": "discover_chennai/attraction/UNIVERSITY-OF-MADRAS.jpg",
            },
            "valluvar_kottam": {
                "title": "Valluvar Kottam",
                "location": " Valluvar Kottam",
                "googlemap": "",
                "description": "Valluvar Kottam, located at the intersection of the kodambakam high road and village road, is a popular monument in Chennai, dedicated to the classical Tamil poet, philosopher, and saint, Thiruvalluvar. The monument now stands at what was once the deepest point of a local lake.Valluvar Kottam was constructed by Kalaignar M.Karunanidhi during 1970s in the memory of Thiruvalluvar, who wrote his famous Thirukkural some 2,000 years ago. All 133 chapters and 1330 verses of the Thirukkural are inscribed on bas-relief in the front-hall's corridors.The construction of Valluvar Kottam is similar to a temple chariot, like a replica of the temple chariot in Thiruvarur. A life-size statue of Thiruvalluvar has been installed in the 39-m-high chariot.The auditorium of Valluvar Kottam can accommodate around 4,000 people.",
                "image_path": "discover_chennai/attraction/VALLUVAR-KOTTAM.jpg",
            },
            "xime": {
                "title": "XIME",
                "location": "Oragadam",
                "googlemap": "",
                "description": "XIME Chennai is strategically situated at SIPCOT (State Industries Promotion Corporation of Tamil Nadu) Industrial Area in Oragadam near to Chennai which is the largest industrial and commercial centre in South India and a major cultural, economic and education centre.It has courses like AICTE approved PGDM programme with a high global orientation, Entrepreneurship Development Programmes, Management & Leadership Development Programmes and Research & Consultancy. ",
                "image_path": "discover_chennai/attraction/XAVIER-INSTITUTE-OF-MANAGEMENT-AND-ENTREPRENEURSHIP.jpg",
            },
            "ymca": {
                "title": "YMCA",
                "location": "Chennai",
                "googlemap": "",
                "description": "The National Council of YMCA’s was formed in Madras to co-ordinate the activities of the association all over the country. Their mission “Is to build strong kids, strong families and strong communities by enriching the lives of all people in spirit, mind and body.” They provide various religious, physical, cultural and social and student activities like Gospel Outreach Program, Live Christian Concerts, State & National Level Tournaments, Table Tennis, Badminton, Cricket, Swimming, chess, karate, Kung Fu, Billiards, Snooker, Gym, BasketBall, Toast Masters Club, Oratorical Classes, Seminars for School & College Students.",
                "image_path": "discover_chennai/attraction/YMCA.jpg",
            },
            //Film & Theater Details
            "avm_studio": {
                "title": "AVM Studios",
                "location": "Vadapalani",
                "googlemap": "https://www.google.co.in/maps/dir//AVM+Studios,+Arcot+Road,+38,+Chennai,+Tamil+Nadu+600026/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5266c4ab12c965:0xe9632a1bcf18e098?ved=2ahUKEwi5lqOapoXfAhUWXisKHTv7DbsQ48ADMAB6BAgAECg",
                "description": "AVM Productions is one of the oldest Indian film production studio. The filming studios are located in Vadapalani, Chennai. It has produced over 170 films in Tamil, Telugu, Kannada, Malayalam and Hindi cinema. AVM takes the credits of introducing numerous actors in Southern industries and most of their actors like Vyjayanthimala, Sivaji Ganesan, Rajkumar, S. S. Rajendran and Kamal Haasan have turned out to be a blessing to the Cinema industry. The AVM Studios besides the shooting floors, has recording, dubbing and a preview theatre. The complex also houses facilities for production and post production processing.",
                "image_path": "discover_chennai/filmtheater/AVM-STUDIOS.jpg",
            },
            "ega_theatre": {
                "title": "EGA Theatre",
                "location": "Kilpauk",
                "googlemap": "https://www.google.co.in/maps/dir//ega+theatre/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52667900f131d9:0x9384c17cdfe87eb9?ved=2ahUKEwiCkLLAqIXfAhUCwrwKHdiaCgUQ9RcwDHoECAQQDg",
                "description": "Ega Theatre has two screens- Ega and Anu Ega. It is located in Kilpauk and has a huge parking facility. It is equipped with a good projection and sound systems. The theatre also offers a wide range of food and beverages like popcorn, nachos, sandwiches, spring rolls, Pastries, Fries, Samosas, Iced Tea, Coffee, Cold drinks and a whole list to choose from.",
                "image_path": "inner/coming_soon.jpg",
            },
            "escape": {
                "title": "Escape",
                "location": "Royapettah",
                "googlemap": "https://www.google.co.in/maps/dir//escape+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52663d673a2ef1:0x1a036539162cf618?ved=2ahUKEwibne_NqIXfAhVDybwKHWi7BgwQ9RcwE3oECAIQEA",
                "description": "Escape is located in the Express avenue Mall and has 8 screens, with a private dining lounge and several other amenities like gaming, a browsing area, a library lounge and a spa in each of its screens. It also has a hot food counter called Grill and a sandwich counter called Loaf. With its posh amenities and brilliant service, you are sure to have a royal and satisfying experience here.",
                "image_path": "inner/coming_soon.jpg",
            },
            "inox_theatre": {
                "title": "Inox Theatre",
                "location": "Mylapore",
                "googlemap": "https://www.google.co.in/maps/dir//Inox,+3rd+Citi+Center,+Dr+Radha+Krishnan+Salai,+Mylapore,+Chennai,+Tamil+Nadu+600004/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5266297baad727:0xec98c9ac9e8eeb57?ved=2ahUKEwi0gLHsqIXfAhVMfSsKHb7lBgUQ48ADMAB6BAgAEA0",
                "description": "INOX is a theatre located in Mylapore, in the City Centre Mall.  its multiple screening halls are aesthetically designed, with state-of-the-art technology and amazing architecture. You would find yourself completely immersed in an enthralling cinematic experience with luxuriously comfortable seats, high-definition wide-screen and surround sound. You can head to Refuel, the in-house food and beverage outlet and Unwind, the exclusive cafe to cater to their hunger pangs with a range of finger-licking snacks, quick bites and beverages.",
                "image_path": "inner/coming_soon.jpg",
            },
            "kalakshetra_art_academy": {
                "title": "Kalakshetra Arts Academy",
                "location": "Thiruvanmiyur",
                "googlemap": "https://www.google.co.in/maps/dir//kalakshetra+arts+academy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525d5f5aec0807:0x4972a0e944f75705?ved=2ahUKEwjM-eX_qIXfAhWMvbwKHX5pBgUQ9RcwE3oECAQQDg",
                "description": "Kalakshetra Foundation is an arts and cultural academy dedicated to the preservation of traditional values in Indian art and crafts, especially in the field of Bharatanatyam dance and Gandharvaveda music. Located in Chennai, the academy was founded in January 1936. The institution achieved national and international recognition for its unique style and perfectionism. In 1962, Kalakshetra moved to a new campus in Besant Nagar. In January 1994, an Act of the Parliament of India recognised the Kalakshetra Foundation as an Institute of 'National Importance'.",
                "image_path": "discover_chennai/filmtheater/KALAKSHETRA-ARTS-ACADEMY.jpg",
            },
            "mgr_film_city": {
                "title": "MGR Flim City",
                "location": "Taramani",
                "googlemap": "https://www.google.co.in/maps/dir//M.G.R.+Government+Film+and+Television+Training+Institute/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526789a3a60181:0x3b5b9fd9e5a70e55?ved=2ahUKEwiZk86TqYXfAhUS9rwKHXOaCRIQ9RcwEHoECAUQDg",
                "description": "The MGR film City is a film studio complex situated in Taramani. Named after the popular film actor and long time Chief Minister of Tamil Nadu, late M. G. Ramachandran, MGR film City is a popular tourism and recreation centre. Established in 1994, MGR film city attracts both filmmakers and the tourists. Visitors can take a look at the indoor studios as well as the outdoor shooting locations that include replicas of various structures and landscaped gardens.MGR film City houses the MGR Film and Television Institute and the MGR Knowledge Park. MGR film City remains open from 8 am to 8 pm and the entry fee is Rs. 25/-.MGR film City is a preferred destination for the whole family.",
                "image_path": "discover_chennai/filmtheater/MGR-FLIM-CITY.jpg",
            },
            "palazzo": {
                "title": "Palazzo",
                "location": "Vadapalani",
                "googlemap": "https://www.google.co.in/maps/dir//Palazzo+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5266c1fedf4e73:0x595bfe95fe261126?ved=2ahUKEwj6iMKfqYXfAhXFy7wKHUw2AkcQ9RcwEHoECAIQEA",
                "description": "SPI, the parent company of Satyam, Escape and Palazzo says “Set in Vadapalani, at the heart of Chennai's film fraternity, Palazzo is our take on the term 'Movie Palace'. Fresco-adorned walls, Italian marbles, a royal sceptre - just a few of the things that will greet you as you enter Palazzo. Not to mention, the classical paintings, classy curtains, golden chandeliers and the royal fountain. Starting to feel royal yet? Well, that’s just the beginning. Palazzo has 9 state-of-the-art screens, with a total of 3,010 seats. Florentine decor and grand lighting completes the setting. A perfect balance of elements from a time literally set in stone, brings SPI Cinemas' latest experience to life with a gaming zone and a spa",
                "image_path": "inner/coming_soon.jpg",
            },
            "prarthana_drive_in": {
                "title": "Prarthana Drive IN",
                "location": "East Coast Road",
                "googlemap": "https://www.google.co.in/maps/dir//Prarthana+Drive+IN/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525ce9ba6ea329:0x8532aab7added0b2?ved=2ahUKEwiUiYyoqYXfAhVCurwKHWQXBaYQ9RcwDnoECAMQDg",
                "description": "This theatre is the only drive in theatre in Chennai. It is located on ECR. It has been functional for the past 27 years. It is equipped with digital projection & digital sound. It has a one of a kind imposing curved concrete screen of about 4500sq.ft. Each car is provided with an exclusive bay on elevated ramps to view the movie. It has a play area for children and a snacks counter as well. This place is sure to enhance your movie watching experience in a very unique way.",
                "image_path": "inner/coming_soon.jpg",
            },
            "satyam": {
                "title": "Satyam",
                "location": "Royapettah",
                "googlemap": "https://www.google.co.in/maps/dir//satyam+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52663ef1b1a92b:0x6c96b69fe8dd412b?ved=2ahUKEwj-g5iwqYXfAhVDT7wKHVWsCKwQ9RcwHnoECAUQDg",
                "description": "Spread over six levels, Sathyam offers you a variety of entertainment. It houses Blur, the largest multi-format gaming facility in India and the concept restaurants, ID a South Indian Restaurant and Ecstasy, a fine patisserie. They also offer gourmet Ice Cream from their Ice cream parlour E18HTEEN BELOW. The most peculiar thing about all the cinemas of SPI are the toppings that they offer along with the popcorn. It attracts a lot of crowd and is adored by almost everyone in Chennai",
                "image_path": "inner/coming_soon.jpg",
            },
            //Historical Place
            "amir_mahal": {
                "title": "Amir Mahal",
                "location": "Royapettah",
                "googlemap": "https://www.google.co.in/maps/dir//Amir+Mahal/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526622e4bc5723:0x41b5e4e6390ae756?ved=2ahUKEwjV06a5qYXfAhVV6bwKHR9zAmkQ9RcwF3oECAYQDQ",
                "description": "Amir Mahal is  the official residence of the Nawab of Arcot and is situated in Royapettah. The Nawab's successor, Mohummad Ali and his three brothers still live in the palace with their families. This Mahal was constructed in 1798 by the British east India company to house administrative offices of the company.",
                "image_path": "discover_chennai/historicalplace/AMIR-MAHAL.jpg",
            },
            "fort_st_george": {
                "title": "Fort St. George",
                "location": "Raja Salai Road",
                "googlemap": "https://www.google.co.in/maps/dir//Fort+St+George,+Rajaji+Rd,+Near+Legislature+and+Secretariat,+Chennai,+Tamil+Nadu+600009/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5268ad0fe75195:0x4cff4a37449c92fd?ved=2ahUKEwjrwaLCqYXfAhXDybwKHZx1BOcQ48ADMAh6BAgAECk",
                "description": "Situated in the coastal state of Tamil Nadu, this ancient monument is quite remarkable as it is the first English (later British) fortress in India, founded in 1644 at the coastal city of Chennai. The fort currently houses the Tamil Nadu legislative assembly and other official buildings. The Fort is a stronghold with 6 metres (20 ft) high walls that withstood a number of assaults in the 18th century. St. George Fort has a number of other worth watching monuments within its boundaries like the St Mary’s church, The Museum, the Wellesley House and the flag staff.",
                "image_path": "discover_chennai/historicalplace/FORT-ST.-GEORGE.jpg",
            },
            "krishna_butterball": {
                "title": "Krishna Butterball",
                "location": "Mahabalipuram",
                "googlemap": "https://www.google.co.in/maps/dir//krishna+butterball/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a53acabfb593dc9:0xa46885d3ff1b36e2?ved=2ahUKEwj2uo3QqYXfAhVIUbwKHWzsAFIQ9RcwGHoECAUQDw",
                "description": "Krishna's Butterball (also known as Vaan Irai Kal and Krishna's Gigantic Butterball) is a gigantic granite boulder resting on a short incline in the historical town of Mahabalipuram in Tamil Nadu, India. The boulder is approximately 6 meters high and 5 meters wide and weighs around 250 tons. It stands on an approximately 1.2-meter (4 ft) base on a slope, and is said to have been at the same place for 1200 years. In 1908, then-governor of the city Arthur Havelock made an attempt to use seven elephants to move the boulder from its position due to safety concerns, but with no success.",
                "image_path": "discover_chennai/historicalplace/KRISHNA-BUTTERBALL.jpg",
            },
            "mahabalipuram": {
                "title": "Mahabalipuram",
                "location": "Kancheepuram",
                "googlemap": "https://www.google.co.in/maps/dir//Mahabalipuram,+Tamil+Nadu+603104/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3a5254aa30074dc5:0x9d00999d9ca8933f!3e0?ved=2ahUKEwi59fLgqYXfAhUMhrwKHWcRBtEQox0wAHoECAYQDw",
                "description": "Mamallapuram or Seven Pagodas or Mahabalipuram, is a town in Kancheepuram district in the southeastern Indian state of Tamil Nadu. It is on the coastline 58 kilometres (36 mi) south of the city of Chennai. An ancient historic town and a bustling seaport in the 1st millennium CE, now a beachside tourism center with a group of Tamil monuments declared as UNESCO world heritage site, it is one of the most visited towns in South India. Mamallapuram was one of two major port cities by the 7th century within the Pallava kingdom. Along with economic prosperity, it became a center of a group of battle monuments carved out of rock. These are dated to the 7th and 8th centuries: rathas(temples in the form of chariots), mandapas (cave sanctuaries), giant open-air rock reliefs such as the famous Descent of the Ganges, and the Shore Temple dedicated to Shiva, Durga, Vishnu, Krishna and others . It was constructed by Vishwakarma community peoples.The contemporary town plan was established by the British Raj in 1827.",
                "image_path": "discover_chennai/historicalplace/MAHABALIPURAM.jpg",
            },
            "ripon_building": {
                "title": "Ripon Building",
                "location": "Periyamet",
                "googlemap": "https://www.google.co.in/maps/dir//ripon+building/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5265fe020bee7f:0xa91aa9e32fb0a5c1?ved=2ahUKEwip8bT9qYXfAhVX6bwKHdHYBFIQ9RcwFnoECAUQDQ",
                "description": "The Ripon Building is the seat of the Greater Chennai Corporation in Chennai. The building is one of the most elegant examples of British architecture and has still preserved its antique look.  The Ripon Building is an all-white structure and is located near the Chennai Central railway station. The building has an Annex block named ‘Amma Maaligai’ from where all the departments of the Chennai Corporation, except the offices of the Mayor and Commissioner, function from the annexe building. The offices of the Mayor and the Commissioner offices are in the main building.",
                "image_path": "discover_chennai/historicalplace/RIPON-BUILDING.jpg",
            },
            "sadras": {
                "title": "Sadras",
                "location": "Kancheepuram",
                "googlemap": "https://www.google.co.in/maps/dir//Sadras+Dutch+Fort/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a53a9673fa48de5:0xdde81fb0025da149?ved=2ahUKEwiuotOIqoXfAhUKzLwKHQuZCLgQ9RcwFXoECAYQDg",
                "description": "Sadras  is a fortress town located on India's Coromandel Coast in Kanchipuram District, 70 km south of Chennai in Tamil Nadu state. Sadras is the anglicized form of the ancient town of Saduranga pattinam. An inscription found in Sadras dated to 1359 mention this place as Rajanarayanan Pattinam after a Sambuvaraya chieftain. There is a temple to Vishnu here, and because of it later the city was known as Sadiravasagan Pattinam. This later changed into Sadurangapattinam, shortly known as Sadirai. Later the Dutch called it Sadras.",
                "image_path": "discover_chennai/historicalplace/SADRAS.jpg",
            },
            "senate_house": {
                "title": "Senate House",
                "location": "Wallajah Road",
                "googlemap": "",
                "description": "The Senate House is the administrative centre of the University of Madras in Chennai. It is situated in Wallajah Road, along Marina Beach. It was constructed by Robert Chisholm between 1874 and 1879 and is considered to be one of the best and oldest examples of Indo-Saracenic architecture in India.",
                "image_path": "discover_chennai/historicalplace/SENATE-HOUSE.jpg",
            },
            "war_memorial": {
                "title": "War Memorial",
                "location": "Sathya Nagar",
                "googlemap": "https://www.google.co.in/maps/dir//war+memorial+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5268afaf8483a1:0x3a354c3467384a32?ved=2ahUKEwjcsKPRx4DfAhULR48KHTYlC9IQ9RcwAHoECAEQCQ",
                "description": "The Victory War Memorial is located to the south of Fort St. George and marks the beginning of the 13-km-long Marina beach. It was formerly called the Cupid’s bow and was originally constructed to commemorate the victory of the Allied Armies during World War I (1914–1918) and later became the victory war memorial for World War II (1939–1945), erected in the memory of those from the Madras presidency who lost their lives in the wars.",
                "image_path": "discover_chennai/historicalplace/WAR-MEMORIAL.jpg",
            },
            //Library & Park Images
            "anna_nagar_tower_park": {
                "title": "Anna Nagar Tower Park",
                "location": "Anna Nagar",
                "googlemap": "",
                "description": "The Anna Nagar Tower, also known as Dr. Visveswaraya Tower Park, is an urban park in the suburb of Anna Nagar. Located near Anna Nagar Roundtana, the tower was built in 1968 for World Trade Fair exhibition. In those days when the tower was still operational, a spiral staircase led the pathway to the top of the tower from where a breathtaking view of the city could be seen, but due to certain events, the tower was closed for public entry. However, the park is still accessible by the public and is a complete delight to whoever visits it. It is engulfed with lush green trees all around and provides a lot of entertainment for the children. Taking a stroll in this park is the makings of a pleasant day.",
                "image_path": "discover_chennai/librarypark/ANNANAGAR-TOWER-PARK.jpg",
            },
            "arignar_anna_zoological_park": {
                "title": "Arignar Anna Zoological Park",
                "location": "Kanchipuram District",
                "googlemap": "https://www.google.co.in/maps/dir//arignar+anna+zoological+park/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52f604b07fd4cd:0xb2f00bc9eb6c9c86?ved=2ahUKEwj3xLa5qoXfAhUEwrwKHddaBmoQ9RcwGnoECAMQDg",
                "description": "Serving as a home to 138 different kind of species ranging from butterflies to lions, this perfect picnic spot is located in Vandalur, Kanchipuram District. It spreads over an area of over 1260 acres and with its variety of interesting flora and fauna it makes itself a favourite weekend spot to both children and adults alike. The Zoo has various sections like Sanctuary aviaries, walk through aviaries, Butterfly house, Amphibian House, Reptile House, Crocodile enclosure, Primate house, World of nocturnal animals and in addition to these, there is an aquarium, a small mammals house and other sections including the prey-predator concept enclosures and prehistoric animals and insectarium complex. These are the elements that make it the largest zoo of its kind in South East Asia",
                "image_path": "discover_chennai/librarypark/ARIGNAR-ANNA-ZOOLOGICAL-PARK.jpg",
            },
            "anna_centenary_library": {
                "title": "Anna Centenary Library",
                "location": "Kotturpuram",
                "googlemap": "https://www.google.co.in/maps/dir//Anna+Centenary+Library/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526772eb0d4451:0xcfc3c35cdd3a47d3?ved=2ahUKEwjh1NzCqoXfAhWGfLwKHVZxDeAQ9RcwE3oECAUQDg",
                "description": "The inauguration of the Anna Centenary Library (ACL), a state-of-the-art library, marks the 102nd birth anniversary of the former Chief Minister of Tamil Nadu, Dr. C N Annadurai.  It was inaugurated on September 15, 2010. The built-up area of this centralized air-conditioned library is 3.75 lakh sq. ft., encompasses ground and eight floors and provides a comfortable reading and working environment that consists of comfortable furniture and even a few private cubicles.  At present, it offers five lakhs books covering wide range of subjects to serve the information needs of the public, academic and corporate community. It is placed Kotturpuram, Chennai.",
                "image_path": "discover_chennai/librarypark/ANNA-CENTENARY-LIBRARY.jpg",
            },
            "conemera_public_library": {
                "title": "Conemera Public Library",
                "location": "Egmore",
                "googlemap": "https://www.google.co.in/maps/dir//Connemara+Public+Library/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52660dde82e363:0xac9bdd58b259c9?ved=2ahUKEwi00sbLqoXfAhWCbbwKHW64CPwQ9RcwDnoECAUQDQ",
                "description": "The Connemara Public Library dates back to 1896 and is one of the four National Depository Libraries which receive a copy of all books, newspapers and periodicals published in India. The library’s shelves are a repository of centuries-old publications, wherein lie some of the most respected works and collections in the country. It also serves as a depository library for the UN. The new building, which was added to the Library in 1973, has a a periodicals hall, a reference room, a video room, an entire floor for books from the Indian languages, a Braille Library and an IAS study centre.",
                "image_path": "discover_chennai/librarypark/CONEMERA-PUBLIC-LIBRARY.jpg",
            },
            "guindy_national_park": {
                "title": "Guindy National Park",
                "location": "Guindy",
                "googlemap": "https://www.google.co.in/maps/dir//guindy+national+park/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526779bf1f61f3:0xeaabf055ed85268d?ved=2ahUKEwiQu6DUqoXfAhVES7wKHQiICrAQ9RcwG3oECAIQDQ",
                "description": "Guindy National Park is a beautiful place, located in the Chennai district of the state of Tamil Nadu. This park is home to a majorly huge numer of organisims and species. It consists of various vegetation zones, mainly tropical dry evergreen flora with over 350 species of plants including trees, shrubs, climbers, herbs and grasses. 24 varieties of trees including Amona Squamosa, Atlanta Monoplylla, Feronia Limonia, Azadirachta Indica and many others. The park is home to spotted deer, black bucks, white bucks, river otter, hyena, bonnet monkey, civet cat, jackals, pangolin, hedgehog and common mongoose etc.Birds which can be seen here are the black winged kite, buzzard, Grey Partridge, olden Backed Woodpecker, Parakeets, Crow Pheasant, Yellow Wattled Lapwing, Blue Faced Malkoha, Shrikes, Koels, pariah kite, Minivets, Munias, Barkets, Tailor Birds, Robins, Drongos, Quails, Flycatcher, Stone Curlew, Beak Paradise etc.The park is also suitable for many species of butterflies, spiders, and invertebrates like Grasshopper, Ants, Termites, Crabs, Snails, Slugs, Scorpions, Mites, Earthworm, and Millipedes etc.",
                "image_path": "discover_chennai/librarypark/GUINDY-NATIONAL-PARK.jpg",
            },
            "panagal_park": {
                "title": "Panagal Park",
                "location": "T Nagar",
                "googlemap": "https://www.google.co.in/maps/dir//panagal+park/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5266560ee566f1:0xf173a375f3a14a97?ved=2ahUKEwj92cLfqoXfAhVEWbwKHUR8Ci8Q9RcwEHoECAUQDg",
                "description": "Panagal Park is a park cum locality in T. Nagar, Chennai. The park is named after the Raja of Panagal, the Chief Minister of Madras Presidency. It is an important junction and is the commercial centre of T Nagar. When the Long Lake on the western peripheral region of the old city was drained out and the area of T. Nagar was newly carved out of the existing neighborhood of Mambalam in 1923, a park was developed in the centre of the new locality fulfil the residential needs.",
                "image_path": "discover_chennai/librarypark/PANAGAL-PARK.jpg",
            },
            "senmozhi_poonga": {
                "title": "Senmozhi Poonga",
                "location": "Cathedral Road",
                "googlemap": "https://www.google.co.in/maps/dir//Semmozhi+Poonga/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526646fd0e5771:0x8953747b4da657db?ved=2ahUKEwjOgInnqoXfAhUEWbwKHc3kCswQ9RcwFnoECAQQDg",
                "description": "Semmozhi Poonga literally translates to 'Classical Language Park' and is a botanical garden in Chennai set up by the horticulture department of the Government of Tamil Nadu. The garden is located in the Cathedral Road–Anna Salai junction. More than 500 species of plants are being grown in the area, in addition to the 80 trees that already existed during the development of the park, some of them being more than 100 years old. The garden houses some of the popular exotic flora and rare plant species, medicinal and aromatic herbs. Many of the exotic plants are imported from countries like China and Thailand. The garden comprises of  eight subgardens exhibiting flora of different varieties, such as a tree court, mural walk and bonsai, herbal and exotic gardens, in addition to an artificial duck pond. The garden Incorporates elements of an Indian-Buddhist garden.",
                "image_path": "discover_chennai/librarypark/SENMOZHI-POONGA.jpg",
            },
            "theosophical_society_india": {
                "title": "Theosophical Society Of India",
                "location": "Adyar",
                "googlemap": "",
                "description": "Known as the 'Huddleston Gardens', the Theosophical Society garden lies on the south bank of the Adyar River. It’s objective is to promote “Universal Brotherhood without distinction based on the realization that life, and all its diverse forms, human and non-human, is indivisibly One.” The garden has migratory birds, fruit bats, snakes, jackals, wild cats, mongooses, hares, and a variety of spiders. Trees include the rare mahoganyand other trees from across the globe. The garden also has a 450-year-old banyan tree, which is known locally as Adyar aala maram, whose aerial roots cover some 60,000 sq m. The main trunk fell under its own weight in 1996.",
                "image_path": "discover_chennai/librarypark/THEOSOPHICAL-SOCIETY-OF-INDIA.jpg",
            },
            //Market
            "burma_bazaar": {
                "title": "Burma Bazaar",
                "location": "Parrys Corner",
                "googlemap": "https://www.google.co.in/maps/dir//burma+bazaar+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526f4f59df407b:0x89981688f38c3a11?ved=2ahUKEwiwgqDxqoXfAhXET7wKHbfYDyIQ9RcwFXoECAYQDQ",
                "description": "Burma Bazaar is a market that was established and is currently operated by the Burmese refugees in Chennai, India. It is located at Parrys Corner and is one of the several unorganized or grey market shopping hubs of Chennai. The bazaar was set up in 1969 by the Government of Tamil Nadu. It is located in the old financial district of the city at George Town. The shopkeepers take up about a kilometre to set up their shops on either sides of the road, and there are approximately 200 shops.",
                "image_path": "inner/coming_soon.jpg",
            },
            "george_town_market_bazaar": {
                "title": "George Town Market And Bazaar",
                "location": "George Town",
                "googlemap": "",
                "description": "George Town, or Muthialpet as it was known once upon a time, is one locality that attracts not just international tourists but also continue to be fascinating for locals as well. George Town was originally known as Black Town in the 1600s by the British. It was here that the first settlement of Madras was set up and also housed the East India Company’s warehouse. As the area expanded with trade, it became the centre for construction and development activities, including one of the major ports of Madras. The top five streets of George Town are: NSC Bose Road or China Bazaar Road, Kasi Chetty Street, Mint street, Armenian and Sowcarpet.",
                "image_path": "discover_chennai/market/GEORGE-TOWN-MARKET-AND-BAZAAR.jpg",
            },
            "koyembedu": {
                "title": "Koyembedu",
                "location": "Koyembedu",
                "googlemap": "https://www.google.co.in/maps/dir//koyambedu+market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5266ae2367b039:0x3d12c2af8171d334?ved=2ahUKEwi96v2oyYDfAhXFso8KHRdICpgQ9RcwAHoECAEQCA",
                "description": "Koyambedu is a locality in the city of Chennai. The Koyambedu area has become a major hub of activity in Chennai City because of it’s landmarks like the Koyambedu market, which is a wholesale fruit and vegetable market and the CMBT. The area is active round the clock owing to the movement of people and goods through the day. It also has esteemed education centres like J.A. Institute of Engineering & Technology.",
                "image_path": "discover_chennai/market/KOYEMBEDU.jpg",
            },
            "pudupet_market": {
                "title": "Pudupet Market",
                "location": "Egmore",
                "googlemap": "https://www.google.co.in/maps/dir//pudupet+market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52660fe1cf142d:0xf9311a170defbc1a?ved=2ahUKEwiZpLWXq4XfAhVHwbwKHSYZD-0Q9RcwEHoECAYQDQ",
                "description": "Pudhupettai Market is located near Egmore, and it serves as a one stop shop for all automobile needs. The appearance of the place might deceive you at first as it is rugged and rusty but leave it to this equipped market to fulfil any automobile needs ranging from stickering to remodelling.",
                "image_path": "inner/coming_soon.jpg",
            },
            "ranganathan_street": {
                "title": "Ranganathan Street",
                "location": "T Nagar",
                "googlemap": "https://www.google.co.in/maps/dir//Ranganathan+St+Bazzar/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5266fe5e9bcd5d:0x6f891404421c239e?ved=2ahUKEwiE6K65yYDfAhULv48KHVO4DmEQ9RcwEXoECAUQDQ",
                "description": "Ranganathan Street is a major commercial street in the neighborhood of T. Nagar and has Usman road on one end and the Mamblam Train station on the other. It is the most crowded street in the city. Ranganathan Street ought to have been named Rangaswamy Iyengar Street after the first resident of that street.On the street can be found many commercial establishments ranging from street hawkers selling safety pins to big stores selling gold jewelry. Many vegetable vendors also sell their wares on Ranganathan Street. The street is busy with shoppers visiting stores like Saravana Stores, Jeyachandran textile and jewellery, Rathna stores, Shafeeque fashions,Textile India and is usually busiest during occasions.",
                "image_path": "discover_chennai/market/RANGANATHAN-STREET.jpg",
            },
            "zam_bazzar": {
                "title": "Zam Bazzar",
                "location": "Triplicane",
                "googlemap": "",
                "description": "Zam Bazaar, located in Triplicane is one of the oldest bazaar in the city and was set up in the pre-Independence era. The western end of the market is bordered by an old monument known as the Amir Mahal, the palace of the Nawab of Arcot two centuries ago. The building is currently being renovated by the Government.The Municipal Administration report published in 1880 lists about 30 private markets in the city. Building and running such markets were economically attractive and entrepreneurs such as Phiroz Muncherji Clubwala, a well-respected merchant of Madras invested in them. Mr. Clubwala owned the Zam Bazaar till his death in 1927.",
                "image_path": "inner/coming_soon.jpg",
            },
            //Museums & Exhibitions
            "birla_planetarium": {
                "title": "Birla Planetarium",
                "location": "Kotturpuram",
                "googlemap": "https://www.google.co.in/maps/dir//Birla+Planetarium+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526797fbb0104f:0xc8aab9b4085be311?ved=2ahUKEwjJgP-9q4XfAhUMWLwKHWWVApYQ9RcwGXoECAUQDg",
                "description": "An ardent lover of the night sky? Birla Planetarium is the place for you. Located in Kotturpuram, this planetarium provides a virtual tour of the night sky and holds cosmic shows on a specially perforated hemispherical aluminium inner dome. The planetarium is placed in the Periyar Science and Technology Centre campus and accommodates eight galleries namely, Physical Science, Electronics and Communication, Energy, Life Science, Innovation, Transport, International Dolls and Children and Materials Science, with over 500 exhibits. The best time for all the sky lovers to visit this planetarium is every second Saturday of the month from 7:00 PM to 9:00 PM when it organises a special show to view the night sky.",
                "image_path": "discover_chennai/museumsexhibition/BIRLA-PLANETARIUM.jpg",
            },
            "cholamandal_artist_village": {
                "title": "Cholamandal Artist Village",
                "location": "Mahabalipuram Road",
                "googlemap": "https://www.google.co.in/maps/dir//Cholamandal+Artist+Village/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525ce7cfa58535:0x406e492c755cbc80?ved=2ahUKEwitn6buq4XfAhXFi7wKHQs_CFEQ9RcwE3oECAUQDg",
                "description": "The Cholamandal Artists’ Village is located about nine km from Adyar, Chennai – along the New Mahabalipuram road. This beautiful village is truly a magnum opus of contemporary art. It is equipped with all that is needed for an arts village, specially the open-air theatre Bharathi that is used for holding discussions and conferences. It has earned reputation world over and is now, one of the major tourist attractions in the Chennai. A painter himself, K.C.S. Paniker who was the prime visionary behind this whole setup “Cholamandal”, gave contemporary Indian art, a lifeline.",
                "image_path": "inner/coming_soon.jpg",
            },
            "dakshin_chitra": {
                "title": "Dakshin Chitra",
                "location": "East Coast Road",
                "googlemap": "https://www.google.co.in/maps/dir//Dakshinachitra/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525a8e2bb47f8f:0x58a72389ff4df633?ved=2ahUKEwiPue71q4XfAhULgLwKHeO9AtcQ9RcwGnoECAMQDg",
                "description": "DakshinaChitra means 'a picture of the south', is a heritage village where the lifestyle of South Indians is displayed based on their states. It portrays a slice of the traditions and customs of 4 South Indian states - Kerala, Tamil Nadu, Andhra Pradesh and Karnataka. The museum has 18 heritage houses representing the living styles of people from the various states of South India. These houses, which were actual houses that were allowed to be demolished by the original owners, were recreated by a team of architecture students, carpenters and workers.  It was founded by the Madras Craft Foundation (MCF), an NGO started in 1984, by Deborah Thiagarajan. It is located on ten acres of sprawling land 25 kms south of Chennai, on the East Coast Road leading to Mahabalipuram, Tamil Nadu.",
                "image_path": "discover_chennai/museumsexhibition/DAKSHIN-CHITRA.jpg",
            },
            "government_museum": {
                "title": "Government Museum",
                "location": "Egmore",
                "googlemap": "https://www.google.co.in/maps/dir//Government+Museum/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae167099619c6b:0x9999ae0bac3ac489?ved=2ahUKEwirhMv_q4XfAhXHbbwKHTTvCf0Q9RcwEXoECAQQDg",
                "description": "The Government Museum of Chennai that was set up in the year 1851 is the second oldest museum in South Asia. It is situated in Egmore and is one of the most popular sightseeing pots in the city. The items displayed in the museum include a huge array of artefacts, palm-leaf manuscripts and other objects that have been segmented into various sections including geology, archaeology, zoology, anthropology, numismatics, botany and sculpture. The Museum grounds comprises of six buildings and 46 galleries, covering the total area of about 16.25 acres. Different activities still like various plays, workshops, lectures, speeches still take place in this museum theatre which keeps it alive till date.",
                "image_path": "discover_chennai/museumsexhibition/GOVERNMENT-MUSEUM.jpg",
            },
            "lalith_kala_academy": {
                "title": "Lalith Kala Academy",
                "location": "Greams Road",
                "googlemap": "https://www.google.co.in/maps/dir//Lalit+Kala+Academy+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52661353ee1feb:0xa6407aee7dcdc6a0?ved=2ahUKEwiIx-ikrIXfAhWMfbwKHQoNCwoQ9RcwFnoECAYQDg",
                "description": "The Lalit Kala Akademi (National Academy of Art) is an autonomous body set up by the Govt. of India under the administrative control of the Ministry of Culture, for the promotion of Visual Arts in the country. Th centre has two floors and is mainly used for exhibitions and workshops. The Centre has the following facilities for artists:Graphic Workshop : 8 artists to work at a timeCeramic Workshop : 8 artists to work at a timeSculpture Workshop : 8 artists to work at a timePainting Studio : 10 - 12 artists to work at a timeReference Library : for working artists and scholars (between 11am to 3Pm)Art Galleries: Ground floor of Size Approx. 530 running ft. wall space / and first floor Group show gallery of Size 290 running ft. wall space",
                "image_path": "inner/coming_soon.jpg",
            },
            "national_art_gallery": {
                "title": "National Art Gallery",
                "location": "Egmore",
                "googlemap": "https://www.google.co.in/maps/dir//national+art+gallery+chennai+address/@13.0696553,80.1860866,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3a5267ee6779ae81:0x721827ba02b772da!2m2!1d80.2561271!2d13.0696647",
                "description": "The National Art Gallery situated in Egmore, Chennai, is one of the oldest art galleries in India. Constructed with red stones sourced from Satyavedu in Andhra Pradesh, the Gallery was built in 1906 during the celebration of Queen Victoria's Golden Jubilee in Indo-Saracenic style, designed by architect Henry Irwin. Gallery consists of four different sections, which are Tanjore Painting Gallery, Decorative Art Gallery, Indian Traditional Art Gallery and Ravi Varma Painting Gallery.",
                "image_path": "discover_chennai/museumsexhibition/NATIONAL-ART-GALLERY.jpg",
            },
            "railway_museum": {
                "title": "Railway Museum",
                "location": "Villivakam",
                "googlemap": "https://www.google.co.in/maps/dir//railway+museum+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52646bbfffffff:0x83dfd03d291d6fd4?ved=2ahUKEwiQ3bL-yoDfAhVGsY8KHeFqAbwQ9RcwGXoECAIQDw",
                "description": "The Chennai Rail Museum, located in Villivakkam, is a railway museum which has a rich rail heritage of India. It is located in over 6.25 acres of land with the host of both technical and heritage exhibits with a sizable collection of steam engines belonging to various decades of the British rule. The museum also exhibits various vintage coaches such as Ooty trains endemic to the Indian railways. Most of the older models were manufactured by the North British Locomotive Company and some of the collection dates back more than one hundred years as it covers the railway history of South India. A toy train offers rides around the premises on regular days.",
                "image_path": "discover_chennai/museumsexhibition/RAILWAY-MUSEUM.jpg",
            },
            "vivekanand_museum": {
                "title": "Vivekanand Museum",
                "location": "Kamarajar Salai",
                "googlemap": "https://www.google.co.in/maps/dir//vivekanand+museum/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52689cc49d64dd:0x488b6c9faaa9031?ved=2ahUKEwjIkIWGy4DfAhUGY48KHaE8A4QQ9RcwEnoECAUQDg",
                "description": "'Experience Vivekananda museum' is an initiative that presents Swami Vivekananda’s Personality and Message through art, painting and state-of-the-art multimedia galleries at Vivekananda House. The museum currently has the following exhibits: Art Gallery on Indian culture in the eyes of Vivekananda, 2D Hologram on Rejuvenation of Indian culture, Making of Vivekananda, Photo Gallery of Vivekananda, Meditation room where Vivekananda stayed, Parliament of Religions 3D movie, Mind your mind 3D movie. The exhibition is open to the public all days from 10.00 AM to 12.30 PM and from 3.00 PM to 7.15 PM except Mondays (On Sundays and Special days half an hour extension for visitors).",
                "image_path": "discover_chennai/museumsexhibition/VIVEKANAND-MUSEUM.jpg",
            },
            //Outdoor & Recreation
            "adventure_zone": {
                "title": "Adventure Zone",
                "location": "Kancheepuram",
                "googlemap": "",
                "description": "Adventure Zone is a certified Adventure sports company, located an hour and a half away from the heart of Chennai in the Kancheepuram district. It offers outbound training through adrenalin courses. It has a 100% safety record and offers a variety of activities like Off Roading, Parasailing, Obstacle Courses, Rappelling, Rock Climbing, Firing and much more. They have accommodation that is spacious and air-conditioned tents. They also have several packages to choose from ranging from Rs.1500 to Rs.10,500 and also facilitate group bookings and events.",
                "image_path": "inner/coming_soon.jpg",
            },
            "besant_nagar_beach": {
                "title": "Besant Nagar Beach",
                "location": "Besant Nagar",
                "googlemap": "",
                "description": "The very famous and a must visit in Chennai is the Besant Nagar Beach also known as Elliot's Beach or 'Bessie'. Besant Nagar a residential area is named after the famous lady theosophist Annie Besant and Besant Nagar Beach is the end point of the Marina beach shore. The main attraction of the beach is 'Karl Schmidt Memorial', built in memory of a Dutch sailor who lost his life while saving the life of a drowning swimmer in the beach. The Besant Nagar beach has developed majorly over the years and now is surrounded by various eateries and shopping stops, which makes is the perfect picnic spot.",
                "image_path": "inner/coming_soon.jpg",
            },
            "breezy_beach": {
                "title": "Breezy Beach",
                "location": "Valmiki Nagar",
                "googlemap": "",
                "description": "This beach is one of the finest beaches there is and very mildly populated as it is located far away from the city buzz which makes it perfect if you are looking for some quiet time with a pleasant weather and wind blowing across your face. Sunsets look extremely beautiful from here.",
                "image_path": "discover_chennai/outdoorrecreation/BREEZY-BEACH.jpg",
            },
            "chembarambakkam_lake": {
                "title": "Chembarambakkam Lake",
                "location": "Thiruvallur",
                "googlemap": "https://www.google.co.in/maps/dir//Chembarambakkam+Lake,+Chembarambakkam,+Tamil+Nadu+602117/@13.0114354,79.9890399,12z/data=!3m1!4b1!4m10!4m9!1m1!4e2!1m5!1m1!1s0x3a528ae3b87457e9:0x33b7df024186abbb!2m2!1d80.0590804!2d13.0114448!3e0",
                "description": "Chembarambakkam lake, is a lake located about 25 km from Chennai. Water is drawn for supply from this rain-fed reservoir.  The Adyar River originates from this lake. A part of water supply of the metropolis of Chennai is drawn from this lake. Chembarambakkam was known as Puliyur Kottam.",
                "image_path": "discover_chennai/outdoorrecreation/CHEMBARAMBAKKAM-LAKE.jpg",
            },
            "chennai_snake_park_trust": {
                "title": "Chennai Snake Park Trust",
                "location": "Guindy",
                "googlemap": "https://www.google.co.in/maps/dir//chennai+snake+park+trust/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52677153d87453:0xb45746d9feaae607?ved=2ahUKEwiCyfzy54LfAhUW3o8KHcvyC8UQ9RcwE3oECAUQDQ",
                "description": "This park is located Guindy on the Sardar Patel Road and is home to a variety of snakes, tortoise, reptiles, mites, earthworms and scorpions. It serves as a habitat to 130 species and also has a huge variety of over 350 kinds of lush green plants that makes it an incredible place to be for nature lovers. It has a 20 minute show every hour in which we can learn about the different kinds of snake species that exists which makes it not only informative but also extremely popular with children!",
                "image_path": "discover_chennai/outdoorrecreation/CHENNAI-SNAKE-PARK-TRUST.jpg",
            },
            "chetpet_eco_park": {
                "title": "Chetpet Eco Park",
                "location": "Chetpet",
                "googlemap": "https://www.google.co.in/maps/dir//chetpet+eco+park/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526679bb42c17b:0x6e14b1b08f19b5a9?ved=2ahUKEwjilsnY54LfAhULuI8KHfQDDyAQ9RcwEnoECAQQDQ",
                "description": "Chetpet lake (Chethupattu Aeri) is a lake spread over 15 acres in Chetput, Chennai, India. It is located to the north of Chetpet railway station. There is a lake in the park where boating is available. There is a huge wak way around the lake and the area is decorated well. It also has an acupressure patch that has marble stones lined up in such a way that when you walk on it, you get acupressure. The place is filled with trees, plants and flowers and is a sight to sore eyes. It also has a small food court with bakery, sandwiches, soups, chaats, tea, etc. And behind it is a small play area for kids. The Park is open from 9 A.M. to 6 P.M., except on Tuesdays.",
                "image_path": "discover_chennai/outdoorrecreation/CHETPET-ECO-PARK.jpg",
            },
            "covelong_beach": {
                "title": "Covelong Beach",
                "location": "Covelong",
                "googlemap": "",
                "description": "Covelong Beach is actually Kovalam beach that is located on the coast of the Bay of Bengal near a village named Covelong. This is a fishing village 40 km from Chennai where swimmimg and wind surfing are very popular activities. Kovalam Beach is on the way to Mahabalipuram near the East Coast Road. Along with many luxury resorts, you can also find multiple surfing schools. It is also to these beaches that the well-known Olive Ridley Turtles travel to every year to hatch their eggs.",
                "image_path": "discover_chennai/outdoorrecreation/COVELONG-BEACH.jpg",
            },
            "east_coast_road": {
                "title": "East Coast Road",
                "location": "East Coast Road",
                "googlemap": "",
                "description": "State Highway 49, also known as East Coast Road (ECR) is a two lane highway in Tamil Nadu, India, built along the coast of the Bay of Bengal connecting Tamil Nadu's state capital city Chennai with Cuddalore via Pondicherry. The East Coast Road has been extended up to Kanyakumari via Chidambaram, Sirkali, Akkur, Tharangambadi, Karaikal, Nagore, Nagapattinam, Thiruthuraipoondi, Muthupet, Adirampattinam, Manora, Manamelkudi, mimisal, Ramanathapuram, Koodankulam, Tuticorin. The total length of the road is about 800 km from Chennai to Kanyakumari. The highway is a state highway, maintained by the Government of Tamil Nadu under the Department of Highways and Minor Ports and is a four lane divided highway.",
                "image_path": "discover_chennai/outdoorrecreation/EAST-COAST-ROAD.jpg",
            },
            "golden_beach": {
                "title": "Golden Beach",
                "location": "East Coast Road",
                "googlemap": "https://www.google.co.in/maps/dir//golden+beach/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525c9635a8c361:0x36c70e5ce54c8329?ved=2ahUKEwiRjY6054LfAhUQUI8KHXdsCmIQ9RcwEnoECAYQDg",
                "description": "The VGP Golden Beach is a part of the VGP Universal Kingdom and lies on the East Coast Road, Chennai. It is one of the most famous beaches that families.The place is also regarded as safe for one to indulge in the act of bathing and swimming in the fresh water shower. This beach is also used for surfing. It is a complete family destination with thrilling adventure rides for both kids and adults. There are many water based rides here as well. The most popular attractions include the VGP 2000 millennium Tower, Paneer fort and the Statue Man. The various amenities available here are online booking of tickets, wheelchair facility, use of debit and credit cards for payments, three food outlets, costume renting, locker facilities, first aid and group discounts. The overall park has 3 sections- the Universal Kingdom, the Aqua Kingdom and the Snow Kingdom.",
                "image_path": "discover_chennai/outdoorrecreation/GOLDEN-BEACH.jpg",
            },
            "krishkinta": {
                "title": "Kishkinta",
                "location": "Tambaram",
                "googlemap": "https://www.google.co.in/maps/dir//kishkinta/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52666a3b499e4f:0xf05f6d97a79e88bb?ved=2ahUKEwi0rfip54LfAhWDsY8KHd99AMgQ9RcwGnoECAQQDg",
                "description": "Kishkinta is a Theme Park set in 120 acres of specially landscaped hills and lakes.  The park is situated five kilometres west of Tambaram Bus stand and Suburban train station. It has a variety of rides to offer. It has a water park and many dry rides that are sure to keep you enthralled throughout your visit. KISHKINTA is the name of the legendary monkey kingdom in the Ramayana, where fun & frolic reigns. Along with these, the park has various entertainment places of Wave pools, water ridings, roller coasters, toy trains etc. especially for children who visits for picnics",
                "image_path": "discover_chennai/outdoorrecreation/KISHKINTA.jpg",
            },
            "marina_beach": {
                "title": "Marina Beach",
                "location": "Triplicane",
                "googlemap": "https://www.google.co.in/maps/dir//Marina+Beach,+Tamil+Nadu/@13.0437224,80.2663439,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a52689bb60132bb:0x549cf8edf62b60a!2m2!1d80.2824026!2d13.0499526",
                "description": "Marina Beach is a natural urban beach in the city of Chennai (Madras), India, along the Bay of Bengal.The beach runs from near Fort St. George in the north to Foreshore Estate in the south, a distance of 6.0 km (3.7 mi), making it the longest natural urban beach in the country. The Marina is primarily sandy. The average width of the beach is 300 m (980 ft) and the width at the widest stretch is 437 m (1,434 ft). Bathing and swimming at the Marina Beach are legally prohibited because of the dangers, as the undercurrent is very turbulent. It is one of the most crowded beaches in the country and attracts about 30,000 visitors a day during weekdays and 50,000 visitors a day during the weekends and on holidays. During summer months, about 1,50,000 to 2,00,000 people visit the beach daily. It is one of the main spots to visit in Chennai. While at the beach, one can enjoy a nice ferry ride or a snack that the local vendors sell there. It is very lively and calming at the same time.",
                "image_path": "discover_chennai/outdoorrecreation/MARINA-BEACH.jpg",
            },
            "mattukadu": {
                "title": "Mattukadu",
                "location": "East Coast Road",
                "googlemap": "https://www.google.co.in/maps/dir//Muttukadu+Boat+House/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52507838381863:0x403d77c6c8601d8a?ved=2ahUKEwjW04iB54LfAhXLsI8KHfBDCIYQ9RcwE3oECAQQDQ",
                "description": "Muttukadu Lake, located near Kovalam Beach on East Coast Road is the backwater area of Bay of Bengal. The lake is well equipped with its  water sports activities like speedboat riding, rowing, wind surfing and water skiing and has a boat house from where you can hire speed boats, row boats, water scooters etc. The boathouse also offers a lounge that overlooks the lake.",
                "image_path": "inner/coming_soon.jpg",
            },
            "mgm_dizzee_world": {
                "title": "Mgm Dizzee World",
                "location": "East Coast Road",
                "googlemap": "https://www.google.co.in/maps/dir//mgm+dizzee+world/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525a8df842191d:0x155856aff1224397?ved=2ahUKEwiX_cP15oLfAhXDNI8KHR1dAfoQ9RcwFXoECAUQDg",
                "description": "MGM Dizzee World is a theme park located in Chennai, Tamil Nadu, India. It is located in East Coast Road. The park has a log flume, Ferris wheel, spider spin, roller coaster, the funny mountain, dashing cars, super trooper, a water world and it also hosts special seasonal shows. It is owned by MGM Group of Companies. The park also hosts special features such as snow valley experience introduced during the early 2000s; an artificial snow shower with snow-capped mountain and a snow man. MGM Dizzee World has many firsts' to its credit in the entertainment sector - first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
                "image_path": "discover_chennai/outdoorrecreation/MGM-DIZZEE-WORLD.jpg",
            },
            "nettukuppam_beach": {
                "title": "Nettukuppam Beach",
                "location": "Nettukupam",
                "googlemap": "https://www.google.co.in/maps/dir//nettukuppam+beach/@13.2341622,80.2619847,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3a52711a98a2d173:0x87051bc3dc0680bd!2m2!1d80.3320252!2d13.2341717",
                "description": "Nettukuppam Beach is situated at northern part of Chennai. It depicts the historical perspective along with the geographical differences over the period. It is a quiet estuary where the brackish waters of Ennore Creek join the sea Nettukuppam has a famous spot called the broken bridge for the locals to sit there enjoy the sprinkling of the water waves that hit the piers of the bridge.",
                "image_path": "inner/coming_soon.jpg",
            },
            "odiyur_lake": {
                "title": "Odiyur Lake",
                "location": "East Coast Road",
                "googlemap": "",
                "description": "Odiyur Lake is located on the East Coast Road, 36 km to the south of Mamallapuram and 92 km from Chennai. Odiyur Lake is one of the major attractions of the city because of the water sport facilities available at Mudaliarkuppam Boat House, which was developed by the Tamil Nadu Tourism Development Corporation on the back waters of the lake. It offers rowing, cruising, speed boating and kayaking facilities. It is also known as the Raindrop Boat House and is a very popular spot, credits to the interesting activities.",
                "image_path": "discover_chennai/outdoorrecreation/ODIYUR-LAKE.jpg",
            },
            "pullicat_lake_bird_sanctury": {
                "title": "Pullicat Lake And Bird Sanctury",
                "location": "Thiruvallur",
                "googlemap": "",
                "description": "Pullicat Lake Bird Sanctuary is a famous 481 km² sanctuary located in the Nellore district of Andhra Pradesh and protected area in Thiruvallur District of Tamil Nadu state. It is an ecologically fragile salt-water lagoon, located about 60 kms north of Chennai. It is situated on the route taken by migrating birds, tempting them to stop for a break. Pullicat Lake is the second largest brackish-water eco-system in India after Chilka lake in Orissa. The sanctuary is most noted for the many greater flamingos seen here.",
                "image_path": "discover_chennai/outdoorrecreation/PULLICAT-LAKE-AND-BIRD-SANCTURY.jpg",
            },
            "queens_land": {
                "title": "Queens Land",
                "location": "Chennai-Bangalore Highway",
                "googlemap": "https://www.google.co.in/maps/dir//Queens+Land/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a528b9fb1ba1bf3:0xa11a4606e13a1c98?ved=2ahUKEwjRnYbD5oLfAhXDNo8KHYcnCocQ9RcwE3oECAQQDg",
                "description": "The Queens land is an amusement park is located by the Chennai-Bangalore Trunk Road between Sriperumpudhur and Poonamalle. It has many dry rides like rollercoasters and wet rides like the wave pool which makes it a perfect picnic spots even during the scorching summers of Chennai. It is fit for a family outing as well as for a trip with friends.",
                "image_path": "discover_chennai/outdoorrecreation/QUEENS-LAND.jpg",
            },
            "surfing_covelong_point": {
                "title": "Surfing Covelong Point",
                "location": "Kovalam",
                "googlemap": "https://www.google.co.in/maps/dir//surfing+covelong+point/@12.7861848,80.1843703,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3a52506b1746ee61:0xc55cdcbcaefea764!2m2!1d80.2544108!2d12.786194",
                "description": "This is the perfect destination to visit if you wish to go surfing. It not only has Surfing competitions but also has a surfing school, Music festivals, yoga classes called “the Yoga Shala” that brings together an expertly curated line-up of renowned yoga and meditation teachers, sound therapists, alternative healers, musicians and martial artists for a string of sessions interactively designed to host participants on the path to holistic wellness.",
                "image_path": "inner/coming_soon.jpg",
            },
            "urapakkam_lake": {
                "title": "Urapakkam Lake",
                "location": "Kanchipuram District",
                "googlemap": "",
                "description": "Urapakkam is a census town in Kanchipuram district in the Indian state of Tamil Nadu. It is part of the Chengalpattu District. Parts of the town are located along the National Highway 32 (GST Road).",
                "image_path": "inner/coming_soon.jpg",
            },
            "wild_tribe_ranch": {
                "title": "Wild Tribe Ranch",
                "location": "Nemmeli",
                "googlemap": "https://www.google.co.in/maps/dir//Wild+Tribe+Ranch/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52519e7f089bfd:0x3792d1d2c0b95706?ved=2ahUKEwiZk-ua5oLfAhUKLI8KHerhDkYQ9RcwF3oECAQQDg",
                "description": "The Wild Tribe Ranch is an Adventure Sports and Outbound Training Arena. It offers a variety of unconventional activities that are sure to make you feel ecstatic. Some of the activities they offer are: Paintball, obstacle courses, Zorbing, Ziplining, Trampoline Jump, Dodge Jump, Tribal path, Devils ramp among many others.",
                "image_path": "inner/coming_soon.jpg",
            },
            //Religious
            "baps_swaminarayan_mandir": {
                "title": "BAPS Swaminarayan Mandir",
                "location": "Aravamuthu Garden Street",
                "googlemap": "https://www.google.co.in/maps/dir//baps+swaminarayan+mandir+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526674cabab689:0x24a9ecb1eb2b7e2b?ved=2ahUKEwjB6v-N5oLfAhVLQ48KHWJ_AdsQ9RcwFXoECAUQDg",
                "description": "Bochasanwasi Shri Akshar Purushottam Swaminarayan Sanstha (BAPS) is a socio-spiritual Hindu organization with its roots in the Vedas. It was revealed by Bhagwan Swaminarayan (1781-1830) in the late 18th century and established in 1907 by Shastriji Maharaj (1865-1951). Founded on the pillars of practical spirituality, the BAPS reaches out far and wide to address the spiritual, moral and social challenges and issues we face in our world. Its strength lies in the purity of its nature and purpose. BAPS strives to care for the world by caring for societies, families and individuals. Its universal work through a worldwide network of over 3,850 centers has received many national and international awards and affiliation with the United Nations. Today, a million or more Swaminarayan followers begin their day with puja and meditation, lead upright, honest lives and donate regular hours in serving others. No Alcohol, No Addictions, No Adultery, No Meat, No Impurity of body and mind are their five lifetime vows. Such pure morality and spirituality forms the foundation of the humanitarian services performed by BAPS.",
                "image_path": "discover_chennai/religiious/baps_chennai.jpg",
            },
            "aanjaneya_temple": {
                "title": "Aanjaneya Temple",
                "location": "Nanganallur",
                "googlemap": "https://www.google.co.in/maps/dir//Anjaneya+Temple+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525dfec53ff239:0x108df602a96175bc?ved=2ahUKEwi7v5KC5oLfAhUXS48KHYkGCe8Q9RcwGnoECAIQDg",
                "description": "The Viswaroopa Adhivyadhihara Sri Bhaktha Anjaneyaswami Temple which is more commonly known as the Anjaneya Temple is dedicated to Lord Hanuman. It is located far from the fast pace of the city in a quiet place called Nanganallur. The most commendable aspect of this temple is that the principal idol of Hanuman is 32 feet tall and sculpted from a single piece of granite, which is the second tallest Hanuman idol after Panchavatee which is located near Puducherry. Along with the Hanuman idol, this temple also consists idols of Lord Rama and Lord Krishna which makes it a wonderful store of history.",
                "image_path": "inner/coming_soon.jpg",
            },
            "annai_velankani_church": {
                "title": "Annai Velankani Church",
                "location": "Besant Nagar",
                "googlemap": "https://www.google.co.in/maps/dir//Annai+Vailankanni+Shrine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5267f93662accd:0xfbabfb6b6ac9c78f?ved=2ahUKEwiQ8cLx5YLfAhXBQ48KHX-HDJMQ9RcwFHoECAYQDg",
                "description": "Another one of the highlights of Elliot Beach in Besant Nagar is the Velankanni ChurcH.Mother Mary is the foremost shrine in the church and is also considered to be the ‘Lady of Health’. In spite of being known as the ‘Mecca of the Christians’, people belonging to all different casts visit this holy church. The structure of the Velankanni church is stunningly tall. There are multiple important traditions and rituals that are followed. The church also consists of a museum where all the offerings recived from the followers of Mother Mary are stored and displayed.",
                "image_path": "discover_chennai/religiious/ANNAI-VELANKANI-CHURCH.jpg",
            },
            "ashtalakshmi_temple": {
                "title": "Ashtalakshmi Temple",
                "location": "Besant Nagar",
                "googlemap": "https://www.google.co.in/maps/dir//ashtalakshmi+temple+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5267f8c7c73f73:0x7acee9c16c9d6b57?ved=2ahUKEwj9x47B5YLfAhWdiXAKHX8hCsAQ9RcwFHoECAIQDg",
                "description": "The Ashtalakshmi Kovil is a Hindu temple that can be found on the scenic shorelines of the Elloit’s beach, Besant Nagar. This beautiful temple is a tribute to the prosperous Goddess Lakshmi and her 8 primary forms- wealth, namely, offspring, success, prosperity, wealth, courage, bravery, food, and knowledge as the name “Ashta-Lakshmi” rightly suggests. Sri Chandrasekara Saraswati Swamigal, who was the Maha Periyaval of Kanchi Mutt are the reason for the construction of this temple and the foundation of the temple complex was laid down by the followers in 1974. The temple is filled with colour and intricacy and will surely leave you mesmerized with its serenity.",
                "image_path": "inner/coming_soon.jpg",
            },
            "iskon_temple": {
                "title": "Iskon Temple",
                "location": "East Coast Road",
                "googlemap": "https://www.google.co.in/maps/dir//Iskcon+Temple+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525c84d99d8737:0x7cc0e13bac30393b?ved=2ahUKEwj68oy05YLfAhUdiHAKHe6NBhAQ9RcwFXoECAMQDg",
                "description": "ISKCON Temple Chennai is a temple devoted to Lord Krishna is the biggest Radhe Krishna temple in Tamil Nadu. It is located on the East Coast Road in southern Chennai It was officially inaugurated on 26 April 2012. The deities revered in the temple include Radha Krishna and lord's family, including Sri Sri Nitai Gauranga. The primary purpose of the temple to transform the material self-centred identity into a spiritual identity of unconditional love is graphically represented by means of a magnificent chandelier that projects various colours on the walls and ceiling. The chandelier has 500 Himalayan quartz crystals supposedly meant to intensify the spiritual energy in the temple",
                "image_path": "discover_chennai/religiious/ISKON-TEMPLE.jpg",
            },
            "kalikambal_temple": {
                "title": "Kalikambal Temple",
                "location": "Parry'S Corner",
                "googlemap": "https://www.google.co.in/maps/dir//kalikambal+temple/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526f4fcf05b387:0x4085c2f612169bf7?ved=2ahUKEwjJ4f-n5YLfAhVbiHAKHYGAB_QQ9RcwEnoECAYQDQ",
                "description": "The Kalikambal Temple is a Hindu temple dedicated to Shri Kāligāmbāl (Kāmākshi) and Lord Kamadeswarar and is placed in  locality of the city of Chennai, Tamil Nadu, India. The temple is located in Thambu Chetty Street, a prominent financial street running parallel to Rajaji Salai. It is believed jthat a fierce form of Goddess was held in worship earlier and that this form was replaced with the shanta swaroopa (calm posture) form of Goddess Kamakshi.",
                "image_path": "discover_chennai/religiious/KALIKAMBAL-TEMPLE.jpg",
            },
            "kapaleeshwar_temple": {
                "title": "Kapaleeshwar Temple",
                "location": "Mylapore",
                "googlemap": "https://www.google.co.in/maps/dir//kapaleeshwar+temple/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5267d375583167:0x1cb31c36b00e50e2?ved=2ahUKEwikqcee5YLfAhUJq48KHZOeD24Q9RcwG3oECAEQDg",
                "description": "Kapaleeshwarar temple is a holy shrine of Shiva in Mylapore, Chennai. to commemorate the myth of Goddess Parvati worshipping Shiva at this place as a fowl, there is a couple of peahen and peacock kept as a pet inside the temple premises. A visit to this temple will be an experience enriched with a glimpse into Tamil religious culture and the lovely architectural combination of the two styles - Dravidian and Vijaynagari, complete with towering Gopurams. There is also a sacred tank on the western side.",
                "image_path": "discover_chennai/religiious/KAPALEESHWAR-TEMPLE.jpg",
            },
            "little_mount": {
                "title": "Little Mount",
                "location": "Saidapet",
                "googlemap": "",
                "description": "Little Mount, also famously knowns as Chinnamalai is a small hillock that lies on the bank of river Adayar in the Saidapet taluk of Chennai. It is traditionally acknowledged to be one of the places where St Thomas, an apostle of Jesus, lived and preached when he came to IndiaLittle Mount now is a lively area with a mix of residential and commercial activities. Current development in and around Little Mount include New Life Assembly of God (NLAG) Church, MRTS line from Alandur to Chamiers road has a station at Little Mount.",
                "image_path": "inner/coming_soon.jpg",
            },
            "luz_church": {
                "title": "Luz Church",
                "location": "Mylapore",
                "googlemap": "https://www.google.co.in/maps/dir//luz+church/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a526632bfad0937:0x49c5a7e610aca294?ved=2ahUKEwjwiv6I5YLfAhUNUI8KHUitAVUQ9RcwEHoECAUQDg",
                "description": "Church of Our Lady of Light  is a Roman Catholic shrine in Chennai, India. It is commonly called as Luz Church by the locals, which derives from the Portuguese name Nossa Senhora da Luz. Built in 1516 by the Portuguese, it is one of the oldest Churches in the city The feast of Our Lady of Light is celebrated on 15 August every year. On 15 August 2010, Church of Our Lady of Light was declared Shrine of Our Lady of Light by A. M. Chinnappa, Archbishop of Madras-Mylapore.",
                "image_path": "discover_chennai/religiious/LUZ-CHURCH.jpg",
            },
            "marundeeshwar_temple": {
                "title": "Marundeeshwar Temple",
                "location": "Thiruvanmiyur",
                "googlemap": "https://www.google.co.in/maps/dir//Marundeeswarar+Temple/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525d61ce09dd77:0x8e4490964f490bad?ved=2ahUKEwjphdP_5ILfAhWKPo8KHeJ5BXkQ9RcwE3oECAYQDg",
                "description": "Marundeeswarar Temple, based in Thiruvanmiyur, Chennai  is a temple dedicated to Hindu deity Shiva. The temple has been widely expanded by Chola kings during the 11th century. The temple has two seven tiered gateway towers, a huge tank, with the overall temple area covering 1 acre. The Marundeeswarar temple has been a place of curative worship for people with diseases.The temple has six daily rituals at various times from 5:30 a.m. to 10 p.m., and twelve yearly festivals on its calendar.",
                "image_path": "discover_chennai/religiious/MARUNDEESHWAR-TEMPLE.jpg",
            },
            "parthasarathy_temple": {
                "title": "Parthasarathy Temple",
                "location": "Triplicane",
                "googlemap": "https://www.google.co.in/maps/dir//parthasarathy+temple+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52689dfe1e93a1:0xaa50bb6e69dbeb20?ved=2ahUKEwis9rf15ILfAhVLQ48KHWJ_AdsQ9RcwGHoECAQQDg",
                "description": "The Parthasarathy Temple is an 8th-century Hindu Vaishnav temple dedicated to the god Krishna, located at Triplicane. The name 'Parthasarathy', in Sanskrit, means the 'charioteer of Arjuna', referring to Krishna's role as a charioteer to Arjuna in the epic Mahabaratha. It was originally built by the Pallavas in the 8th century by king Narasimhavarman. The temple is one of the oldest structures in Chennai.",
                "image_path": "discover_chennai/religiious/PARTHASARATHY-TEMPLE.jpg",
            },
            "santhome_cathedral_basilica": {
                "title": "Santhome Cathedral Basilica",
                "location": "Santhome",
                "googlemap": "https://www.google.co.in/maps/dir//Santhome+Cathedral+Basilica/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52687f5255b81f:0xa148dd2e4ab794de?ved=2ahUKEwi7s9Dk5ILfAhWIu48KHeguDsUQ9RcwEHoECAEQDg",
                "description": "This is a Roman Catholic  basilica in Santhome, in the city of Chennai. It was built in the 16th century by Portuguese explorers, over the tomb of Saint Thomas, one of the twelve apostles of Jesus but in 1893, it was rebuilt as a church with the status of a cathedral by the British and it stands in the same shape till date.. This church is one of the only three known churches in the world built over the tomb of an apostle of Jesus, the other two being St. Peter's Basilica in Vatican City and Santiago de Compostela Cathedral in Galicia, Spain.",
                "image_path": "discover_chennai/religiious/SANTHOME-CATHEDRAL-BASILICA.jpg",
            },
            "shirdi_saibaba_temple": {
                "title": "Shirdi Saibaba Temple",
                "location": "East Coast Road",
                "googlemap": "",
                "description": "The temple is located on ECR Road and is close to the main road. If you are looking to feel peaceful, this is the place. The temple has several deities in it, and there is a big seating area in front on the main deity where devotees sit for hours together feeling serene and spiritual. The temple is very well designed, has a souvenir shop and a very large car park.",
                "image_path": "inner/coming_soon.jpg",
            },
            "thousad_lights_mosque": {
                "title": "Thousad Lights Mosque",
                "location": "Anna Salai Road",
                "googlemap": "https://www.google.co.in/maps/dir//Thousand+Lights+Mosque/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52663f641c6e2b:0xbb6388f738a254d7?ved=2ahUKEwjYxpag5ILfAhWIpo8KHVuRCYsQ9RcwEHoECAUQDQ",
                "description": "The Thousand Lights Mosque is situated on Anna Sala Road in Chennai. It was built by Nawab Umdat-ul-Umra in 1810 and the mosque bears a story behind its name. It is said that 1000 lights needed to be lit in order to illuminate the assembly hall and hence it was named Thousand Lights Mosque. It is also believed that the lights were lit by the Indian National Congress to mark their first visit to Madras.The men pray in the main hall situated in the ground floor and women offer their prayers in a separate room. There are two rooms on the second floor called as Bargah and are used to represent sanctuary.It witnesses a large crowd during the annual muharram festival. The mosque is also home of Chief Shia Ghazi Moulana Ghulam Mahadi Khan of Tamil Nadu. The Thousand Lights Mosque also has a Shia burial ground is inside.",
                "image_path": "discover_chennai/religiious/THOUSAD-LIGHTS-MOSQUE.jpg",
            },
            "vadapalani_murugan_temple": {
                "title": "Vadapalani Murugan Temple",
                "location": "Vadapallini",
                "googlemap": "https://www.google.co.in/maps/dir//vadapalani+murugan+temple/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5266ebc772bfc1:0x57c7c06d2918742b?ved=2ahUKEwiHm9CZ5ILfAhUENo8KHalJA_sQ9RcwDHoECAEQDg",
                "description": "Vadapalani Andavar Temple is a Hindu temple dedicated to Lord Muruga. It is located in Vadapalani, Chennai. It was renovated in the 1920s and a Rajagopuram was built during that time. The temple has grown in popularity, which is believed to be in part due to the patronage of cinema stars. Around 7,000 couples marry there each year. According to the sthalapurana, Muruga devotee Annaswami Nayakar built the shed and kept a Murugan painting there for his personal worship. During his worship, he experienced divine power entering his body and inspiring him to speak surprising things later found to be true. His utterances were labeled 'arul vakku' ('God blessed statements') and could cure diseases, provide jobs, solemnize marriages and more.",
                "image_path": "discover_chennai/religiious/VADAPALANI-MURUGAN-TEMPLE.jpg",
            },
            "vellankani_shrine": {
                "title": "Vellankani Shrine",
                "location": "Velankanni",
                "googlemap": "https://www.google.co.in/maps/dir//Velankanni+Shrine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a556edf9c4aeff9:0xd104df2c09d5ece3?ved=2ahUKEwifwZqS5ILfAhUOknAKHYdCAqgQ9RcwIHoECAUQDg",
                "description": "Velankanni is a Special Grade Panchayat Town in Nagapattinam district. It lies 350 km south of Chennai and 12 km south of Nagapattinam. The town is home to one of the most visited Roman Catholic Latin Rite shrines called the Basilica of Our Lady of Good Health. Velankanni has been chosen as one of the heritage cities for HRIDAY - Heritage City Development and Augmentation Yojana scheme of Government of India.",
                "image_path": "discover_chennai/religiious/WALLAJAH-MOSQUE.jpg",
            },
            "wallajah_mosque": {
                "title": "Wallajah Mosque",
                "location": "Triplicane",
                "googlemap": "https://www.google.co.in/maps/dir//wallajah+mosque+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52661e94da5a53:0xca39ef1a56cdf242?ved=2ahUKEwiO8u2I5ILfAhXKso8KHX4-AjIQ9RcwAHoECAEQCA",
                "description": "Wallajah Mosque, also called Triplicane Big Mosque is located in Triplicane High Road. Constructed in the Mughal architectural style, the mosque was built in 1795 by the family of Muhammad Ali Khan Wallajah, the Nawab of Arcot during 1765. It has a large prayer hall, a tank and a large ground in front. The entire structure is constructed with granite without the use of iron or wood. The mosque is an active place of worship. There is a constant flow of visitors in the mosque as it is located in one of the busiest places in Chennai. The mosque can accommodate thousands of devotees. During the sacred festivals of Bakrid and Ramzan, the devotees overflow, some of them offering prayers from the surrounding grounds.",
                "image_path": "discover_chennai/religiious/WALLAJAH-MOSQUE.jpg",
            },
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = this.state[this.props.match.params.id].title + " | Inside Chennai";
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {

        return (
            <div>

                <SlimHeader />

                <div className="inner-web-container">
                    <div className="goBack_Map_Container">
                        <div className="goBackButton animated fadeInRight slower" onClick={this.goBack.bind(this)} ></div>
                        <a className="googlemapContainer animated bounce slower" target="_blank" href={this.state[this.props.match.params.id].googlemap} />
                    </div>
                    <h2 className="textCenter FontSizeInner animated flipInX slow">{this.state[this.props.match.params.id].title}</h2>
                    <h6 className="textCenter LocationFont">{this.state[this.props.match.params.id].location}</h6>
                    <div className="drop orangeInner" />
                    <div className="inner-page-container">
                        <div className="inner_image animated fadeIn slow">
                            <img src={require(`../../assets/images/${this.state[this.props.match.params.id].image_path}`)} />
                        </div>
                        <p className="desc">{this.state[this.props.match.params.id].description}</p>
                    </div>

                </div>

                <Footer />

            </div>
        )
    }

}
