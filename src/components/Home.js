import Hero from './Hero'
import {CardsContainer, Card} from './Card'

import w2wThumb from '../img/w2w/w2w-thumb.png'
import cnftmeterThumb from '../img/cnftmeter/cnftmeter-thumb-2.png'
import medThumb from '../img/medroutine/medroutine-thumb.png'
import mockdeThumb from '../img/moked/moked-thumb.png'

export default function Home(){
    return(
        <>
            <Hero/>
            <CardsContainer>
                <Card title="Cnftmeter" subtitle="UI Design" img={cnftmeterThumb} link="/cnftmeter" margin="me-lg-3" />
                <Card title="What 2 watch" subtitle="Web App" img={w2wThumb} link="/w2w" margin="ms-lg-3" />
                <Card title="MedRoutine" subtitle="UX/UI, Web Design" img={medThumb} link="/medroutine" margin="me-lg-3" />
                <Card title="Mockde" subtitle="Web Design" img={mockdeThumb} link="/mockde" margin="ms-lg-3" />
            </CardsContainer>



        </>
    )
}