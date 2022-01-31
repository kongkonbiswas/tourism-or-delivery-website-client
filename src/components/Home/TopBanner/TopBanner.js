import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../Header/Header.css'
import bannerOne from '../../../images/photo-1576487248805-cf45f6bcc67f.jpg';
import bannerTwo from '../../../images/photo-1519922639192-e73293ca430e.jpg'

const TopBanner = () => {
    return (
        <div className='top-banner'>
            <Carousel fade>
                <Carousel.Item >
                    <img
                        className="banner-img w-100 h-75"
                        src={bannerOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Whatever You Go</h3>
                        <p>We always stand with you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="banner-img w-100 h-75"
                        src={bannerTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We Made The World</h3>
                        <p>More sweetable for every traveller.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopBanner;