import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Hero(){
    return (
         <Container className="container hero my-5" as="header">
            <Row className="h-100 justify-content-center align-items-center">
                <Col xs={11} md={10} lg={8} className="mx-auto py-3 py-md-5 mt-md-4 mb-md-5" style={{maxWidth:"1000px"}}>
                    <h1 className="name"> Ciao, <span className="manu">sono Emanuela</span> {" "}
                    e sono appassionata di Web e UI Design. Mi piace realizzare prodotti digitali,  dalla fase di progettazione alla fase di sviluppo. </h1>
                </Col>
            </Row>
        </Container>
    )
}