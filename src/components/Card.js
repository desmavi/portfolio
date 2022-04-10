import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { Link } from "react-router-dom";


function CardsContainer({children}){
    return( 
        <Container className="mt-5" aria-label="Progetti" id="projects">
            <Row className="justify-content-center align-items-center">
                {children}
            </Row>
        </Container>            
        )    
}

function Card({img, link, title, subtitle, ...props}){
    const {margin} = props

    return ( 
        <Col xs={11} md={10} lg={5} className={`mb-5 ${margin}`}>
            <Link to={link}>
                <div className="thumb">
                    <Image src={img} alt="" style={{maxWidth:"100%"}}/>
                </div>
                <h2 className="mt-3 cool-link">{title}</h2>
            </Link>
            <p >{subtitle}</p>
        </Col>            
        )    
}


export {CardsContainer, Card}