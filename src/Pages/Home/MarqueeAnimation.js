import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/images/one.png'
import img2 from '../../assets/images/two.png';
import img3 from '../../assets/images/three.png';
import img4 from '../../assets/images/four.png';
import img5 from '../../assets/images/five.png';
import img6 from '../../assets/images/six.png';
import img7 from '../../assets/images/seven.png';
import img8 from '../../assets/images/eight.png';
import img9 from '../../assets/images/nine.png';
import img10 from '../../assets/images/ten.png';
const MarqueeAnimation = () => {
    return (
        <div>
            <h1 className='text-lg lg:text-4xl font-semibold text-sky-800 leading-relaxed  ms-0 mb-4 mt-10 text-center'>Our Technology Partners</h1>
            <div>
                <Marquee direction="right" speed={40} autoFill className='w-full flex' >
                    <div className="mr-12 mt-8 mb-4 w-20 ">
                        <img src={img1} alt="" />
                    </div>
                    <div className="mr-12 mt-8 mb-4 w-20">
                        <img src={img2} alt="" />
                    </div>
                    <div className="mr-12 mt-8 mb-4 w-20">
                        <img src={img3} alt="" />
                    </div>
                    <div className="mr-12 mt-8 mb-4 w-20">
                        <img src={img4} alt="" />
                    </div>
                    <div>
                        <img src={img5} alt="" />
                    </div>
                    <div className="mr-12 mt-8 mb-4 w-20">
                        <img src={img6} alt="" />
                    </div>
                    <div className="mr-12 mt-8 mb-4 w-20">
                        <img src={img7} alt="" />
                    </div>
                    <div className="mr-12 mt-8 mb-4 w-20">
                        <img src={img8} alt="" />
                    </div>
                    <div className="mr-12 mt-8 mb-4 w-20">
                        <img src={img9} alt="" />
                    </div>
                    <div className="mr-12 mt-8 mb-4 w-20">
                        <img src={img10} alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeAnimation;