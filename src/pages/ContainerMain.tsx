import CarouselImage from '../components/Carousel'
import AboutPage from '../components/About'
import InterestPage from '../components/Interest'
import EducationPage from '../components/Education'

const ContainerMain = () => {
    return (
        <div className='flex-1 box-border md:w-[calc(100% - 16rem)] md:pl-6'>
            <CarouselImage />
            <AboutPage></AboutPage>
            <InterestPage></InterestPage>
            <EducationPage></EducationPage>
        </div>
    )
}

export default ContainerMain