import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, NavLink } from "react-router-dom";


export default function NavbarComponent(){
    return(
        
            <Container>
            <Row className="justify-content-center">
                <Col xs={11} md={10} lg={9}>
                <Navbar expand="lg">
                <Link to="/"><Navbar.Brand className="logo">em.</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="mx-auto">
                <Nav className="ms-md-auto text-center">
                    <Nav.Item>
                        <NavLink to="/" className="cool-link nav-link me-lg-3">
                            Home
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/about" className="cool-link nav-link me-lg-3">
                            About
                        </NavLink>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
        </Col>
        </Row>
        </Container>
       
    )
}