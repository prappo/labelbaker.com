import { Link } from 'react-router-dom';
import { useState } from 'react'

import SliderImage1 from '../images/Slider-1.png';
import SliderImage2 from '../images/Slider-2.png';
import SliderImage3 from '../images/Slider-3.png';
import SliderImage4 from '../images/Slider-4.png';
import Modal from '../utils/Modal';
import HeroImage from '../images/hero-image.png';
export default function FeatureCards() {

    const [videoModalOpen, setVideoModalOpen] = useState(false)

    return (

        <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                {/* <div className='grid grid-cols-2 gap-12'>
                    <a href='#' className='rounded-md hover:shadow-xl cursor-pointer hover:ring-1'>
                        <img className='w-full' src={SliderImage1} />
                    </a>

                    <Link to='/feature/share-editable-template' className='rounded-md hover:shadow-xl cursor-pointer hover:ring-1'>
                        <img className='w-full' src={SliderImage3} />
                    </Link>
                    <a href='#' className='rounded-md hover:shadow-xl cursor-pointer hover:ring-1'>
                        <img className='w-full' src={SliderImage4} />
                    </a>
                    <a href='#' className='rounded-md hover:shadow-xl cursor-pointer hover:ring-1'>
                        <img className='w-full' src={SliderImage2} />
                    </a>
                </div> */}


                <div className="flex flex-col justify-center">
                    <img className="mx-auto rounded-md px-2 shadow-2xl" src={HeroImage} width="600"  alt="Label Baker" />

                </div>
                <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                    <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                        <path d="M10 17l6-5-6-5z" />
                    </svg>
                    <span className="ml-3">Watch how it works </span>
                </button>
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
                <div className="relative pb-9/16">
                    <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/786263541" title="Video" allowFullScreen></iframe>
                </div>
            </Modal>

        </div>
    )
}