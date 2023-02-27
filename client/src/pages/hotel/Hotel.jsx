import './hotel.css'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'


const Hotel = () => {
    const [sliderNumber, setSliderNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406536839.jpg?k=463166375d10500d202ce957099cd4d7226f887e52527db941b06551c334f127&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406536765.jpg?k=4430067fb5094b081a008bdaa5b93f3dbbd5b3903f4e4d56f6451190b4f9945d&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/418286244.jpg?k=b4dac76eeb85e346167630fddf0bb179248f4d6ce6a18eb96a6225a8831cd953&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406536861.jpg?k=3f9159ee2ee712f619caf93aaefa50a700fa73235bbe736b3ad411e70f05a2af&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/418286652.jpg?k=219d6b3d4c99bb6ef9cf1501927f0a499806a32a51e56c4a14b7e933c392b518&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406536835.jpg?k=cb5fba8734fbd394709a75b568b46de6febf904b51bc2628a3b92ab54a3ed2ac&o=&hp=1",
        }
    ]
    const handleOpen = (i) => {
        setSliderNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === 'l') {
            newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
        } else {
            newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
        }
        setSliderNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className="hotelContainer">
                {open &&
                    <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => { handleMove('l') }} />
                        <div className="sliderWrapper">
                            <img src={photos[sliderNumber].src} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => { handleMove('r') }} />
                    </div>
                }
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free
                        airport taxi</span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() => { handleOpen(i) }} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of dubai</h1>
                            <p className="hotelDesc">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quaerat, expedita nam,
                                temporibus dicta, voluptatibus beatae minima culpa possimus dolor praesentium vel omnis
                                sit deleniti tempora error accusamus nihil officia.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nihil eaque veniam rei
                                ciendis odio illum beatae a voluptatum! Quibusdam consequatur delectus magni eius autem m
                                inus qui et impedit? Est, esse.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo nemo nesciunt volup
                                tate magnam, similique atque provident illo laboriosam, eveniet dolorum natus placeat qui. Des
                                erunt, velit qui! Doloribus, accusantium velit?</span>
                            <h2><b>$945</b>(9 nights)</h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel