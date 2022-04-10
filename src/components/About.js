import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import {Header} from './Post'

import aboutImg from '../img/about/about-avatar-min.png' 


export default function About(){
    return(
        <Container className="my-4 my-lg-4">
            <Header title="About"/>
            <Row className="justify-content-center mb-5 g-4">
                <Col xs={11} md={10} lg={5} className="text-center">
                    <Image src={aboutImg} alt="" style={{maxWidth:"300px"}}/>
                </Col>
                <Col xs={11} md={10} lg={5} >
                <p>Ciao, sono Emanuela e sono appassionata di Web e UI design.
                Mi piace realizzare prodotti digitali dalla fase di progettazione alla fase di sviluppo. </p>
                <p>Ho cominciato ad interessarmi al mondo del web design qualche anno fa leggendo alcuni blog e guardando video online, finché un giorno ho deciso di mettere le mani in pasta e provarci.</p>
                <p>Mi piace imparare cose nuove e mettermi in gioco, e al momento sto cercando di espandere le mie conoscenze nel mondo dello sviluppo front-end. Ciò a cui aspiro è fare del web design la mia professione a tempo pieno.</p>
                <p>Per quanto riguarda le tecnologie che uso: lato progettazione il mio fedele compagno è Figma, mentre lato sviluppo uso principalmente HTML, CSS, JS, Bootstrap e ReactJS, ma posso adattarmi e imparare ad usare nuovi tool e framework.</p>
                <p>Nel tempo libero amo fare lunghe passeggiate con la mia cagnolina Kira e guardare serie tv su Netflix.</p>
                </Col>
            </Row>
        </Container> 
    )
}