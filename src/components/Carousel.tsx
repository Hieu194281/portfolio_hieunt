import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hello from '../assets/images/hello.png'
import pencil from '../assets/images/pencil.png'
import { ArrowDownToLine } from 'lucide-react';

const CarouselImage = () => {
    const handleOpenCV = () => {
        window.open('https://drive.google.com/file/d/108ER6b5JeGSTqnPJJ4zbNrVeiu8Byte_/view?usp=sharing', '_blank')
    }
    return (
        <Carousel
            infiniteLoop={true}
            interval={6000}
            useKeyboardArrows={true}
            transitionTime={1700}
            emulateTouch
            showArrows={false}
            autoPlay
            showStatus={false}
            showThumbs={false}>
            <div className='relative'>
                <img alt="" src={hello} className='h-screen' />
                <div className='absolute w-full bottom-48 left-0 ' >
                    <p className='permanent-marker-regular text-4xl text-white mb-3'>I'm NguyenHieu</p>
                    <button className=' permanent-marker-regular  text-lg bg-gradient-to-l from-[#4b134fcc] to-[#c94b4b99] p-3 rounded-xl animate-zoom-in-out' onClick={handleOpenCV}>View CV <ArrowDownToLine className='inline-block' /></button>
                </div>
            </div>
            <div className='relative'>
                <img alt="" src={pencil} className='h-screen' />
                {/* <p className='absolute top-0 left-0'>I'm NguyenHieu</p> */}
            </div>

        </Carousel>
    )
}

export default CarouselImage