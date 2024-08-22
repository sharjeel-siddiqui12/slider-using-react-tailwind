import React, { useState, useEffect, useRef } from 'react';
import '../App.css';






const Slider = () => {
    const [sliderItems, setSliderItems] = useState([
        { name: 'Building1', image: './images/building1.jpg', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
        { name: 'Building2', image: './images/building2.jpg', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
        { name: 'Building3', image: './images/building3.jpg', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
        { name: 'Building4', image: './images/building4.jpg', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
        { name: 'Building5', image: './images/building5.jpg', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
       
    ]);

    const carouselRef = useRef(null);
    const runningTimeRef = useRef(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    useEffect(() => {
        const resetTimeAnimation = () => {
            if (runningTimeRef.current) {
                runningTimeRef.current.style.animation = 'none';
                runningTimeRef.current.offsetHeight; 
                runningTimeRef.current.style.animation = null;
                runningTimeRef.current.style.animation = 'runningTime 7s linear 1 forwards';
            }
        };

        const showSlider = (type) => {
            const list = carouselRef.current;
            if (type === 'next') {
                list.appendChild(list.firstElementChild);
                carouselRef.current.classList.add('next');
            } else {
                list.insertBefore(list.lastElementChild, list.firstElementChild);
                carouselRef.current.classList.add('prev');
            }

            setTimeout(() => {
                carouselRef.current.classList.remove('next');
                carouselRef.current.classList.remove('prev');
            }, timeRunning);

            resetTimeAnimation();
        };

        const handleNext = () => showSlider('next');
        const handlePrev = () => showSlider('prev');

        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');

        nextBtn.addEventListener('click', handleNext);
        prevBtn.addEventListener('click', handlePrev);

        const autoSlide = setInterval(() => {
            nextBtn.click();
        }, timeAutoNext);

        resetTimeAnimation(); // Start the initial animation

        return () => {
            nextBtn.removeEventListener('click', handleNext);
            prevBtn.removeEventListener('click', handlePrev);
            clearInterval(autoSlide);
        };
    }, []);

    

    return (
        <div className="carousel w-[100vw] h-[100vh] -mt-[50px] overflow-hidden relative">
            <div className="list" ref={carouselRef}>
                {sliderItems.map((item, index) => (
                    <div className="item w-[180px] h-[250px] absolute top-[80%] -translate-y-[70%] left-[70%] rounded-[20px] shadow-[0_25px_50px_rgba(0,0,0,0.3)] bg-center bg-cover z-[100] transition-all duration-[1000ms]" style={{ backgroundImage: `url(${item.image})` }} key={index}>
                        <div className="content absolute top-[50%] left-[100px] -translate-y-[50%] w-[400px] text-left text-[#fff] hidden max-md:left-[50px] max-sd:top-[40%]">
                            <div className="title text-[100px] uppercase text-[#ff4141cb] font-bold leading-none opacity-0 animate-conTitle max-sd:text-[45px]">SLIDER</div>
                            <div className="name text-[100px] uppercase font-bold leading-none opacity-0 text-shadow animate-conName max-md:text-[70px] max-sd:text-[45px]">{item.name}</div>
                            <div className="des mt-[10px] mb-[20px] text-[18px] ml-[5px] opacity-0 animate-conDes max-md:text-[16px]">{item.description}</div>
                            <div className="btn ml-[5px] opacity-0 animate-conBtn">
                                <button className='px-[20px] py-[10px]  cursor-pointer text-[16px] border-2 border-white bg-white text-black max-sd:px-[10px] max-sd:py-[15px] max-sd:text-[14px]' >See More</button>
                                <button className='px-[20px] py-[10px]  cursor-pointer text-[16px] ml-[15px] bg-transparent text-[#14ff72cb] border-2 border-white transition-[0.5s] hover:bg-[#ff4141cb] text-white border-[#14ff72cb] max-sd:px-[10px] max-sd:py-[15px] max-sd:text-[14px]' >Subscribe</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="arrows absolute mt-[30px] top-[80%] right-[52%] z-[100] w-[300px] max-w-[30%] flex gap-[10px] align-middle">
                <button className="prev w-[50px] h-[50px] rounded-[50%] bg-[#ff4141cb] text-[#fff] border-none outline-none text-[16px] font-mono font-bold transition-all cursor-pointer hover:bg-[#fff] hover:text-[#ff4141cb]">&lt;</button>
                <button className="next w-[50px] h-[50px] rounded-[50%] bg-[#ff4141cb] text-[#fff] border-none outline-none text-[16px] font-mono font-bold transition-all cursor-pointer hover:bg-[#fff] hover:text-[#ff4141cb]">&gt;</button>
            </div>

            <div className="timeRunning absolute z-[1000] w-[0%] h-[4px] bg-[#14ff72cb] left-0 top-0 animate-runningTime" ref={runningTimeRef}></div>
        </div>
    );
};

export default Slider;