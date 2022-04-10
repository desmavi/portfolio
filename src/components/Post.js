import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function PostContainer({children}){
    return (
        <Container className="my-4 my-lg-5">
            {children}
        </Container>
    )
}

function Header({title, img, link}){
    return (
        <Row className="justify-content-center">
            <Col xs={11} md={10} lg={9} className="m-auto">
                <h1 className="mb-3">{title}</h1>
                <a target="_blank" href={link} className="featured-img">
                    <Image src={img} alt="" style={{maxWidth:"100%"}}/>
                </a>
            </Col>
        </Row>            
    )
}

function Content({children}) {
    return (
        <div className="mt-4 mt-lg-5 mb-5">
            {children}
        </div>
    )
}

function Paragraph({children}) {
    return (
        <Row className="justify-content-center mb-5">
            {children}
        </Row>
    )
}

function ParagraphHeading({heading}){
    return (
        <Col xs={11} md={10} lg={2} >
            <h2>{heading}</h2>
        </Col>
    )
}

function ParagraphBody ({children, ...props}){
    return (
        <Col xs={11} md={10} lg={7} className={props.className}>
            {children}
        </Col>
    )
}

export {PostContainer, Header, Content, Paragraph, ParagraphHeading, ParagraphBody}
