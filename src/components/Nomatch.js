import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { Link } from "react-router-dom"

import notFound from '../img/404/404.png'

export default function Nomatch(){
    return(
        
        <Container style={{minHeight:"calc(100vh - 250px)"}}>
        <Row className="justify-content-center text-center">
            <Col xs={11} md={10} lg={9}>
            <Image src={notFound} alt="Page not found" style={{maxWidth:"500px"}}/>
            <p className="quote">Mi dispiace, la pagina che stai cercando non esiste!</p>
            <Link to="/" className="text-decoration-underline mb-3 d-inline-block ms-1 cool-link">Torna alla home</Link>
            </Col>
        </Row>
        </Container>
       
    )
}