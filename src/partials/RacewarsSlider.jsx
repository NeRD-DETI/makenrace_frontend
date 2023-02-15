import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function RacewarsSlider() {
    return (
        <Carousel showArrows={true}>
        <div>
            <img src="src/images/Racewars/1.jpg" />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="src/images/Racewars/2.jpg" />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="src/images/Racewars/3.jpg" />
            {/* <p className="legend">Legend 3</p> */}
        </div>
    </Carousel>
    )

}

export default RacewarsSlider;