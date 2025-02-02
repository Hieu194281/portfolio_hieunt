import CarouselImage from '../components/Carousel'
import AboutPage from '../components/About'
import InterestPage from '../components/Interest'
import EducationPage from '../components/Education'

const ContainerMain = () => {
    return (
        <div className='flex-1 box-border md:ml-64'>
            <CarouselImage />
            <AboutPage></AboutPage>
            <InterestPage></InterestPage>
            <EducationPage></EducationPage>
        </div>
    )
}

export default ContainerMain