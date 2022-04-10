import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Icon } from '@iconify/react'


export default function Footer(){
    return(
        <Container style={{marginTop:"3rem"}}>
            <Row className="flex-column-reverse flex-lg-row justify-content-center justify-content-lg-around align-items-center align-items-lg-baseline mb-3">
                <Col xs={11} md={10} lg={4} >
                    <p>Creato con &#10084;&#65039; da Emanuela Maviglia</p>
                </Col>
                <Col xs={11} md={10} lg={4} className="text-lg-end mb-3 mb-lg-0" >
                        <a href="https://github.com/desmavi" target="_blank">
                        <Icon icon="akar-icons:github-fill" alt="my github page" height="30"/>
                        </a>
                </Col>
            </Row>
        </Container> 
    )
}