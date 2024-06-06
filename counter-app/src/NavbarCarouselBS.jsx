import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';

function NavbarCarouselBS(props) {

    let {text1, text2} = props;
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src="./walnut.png" width="30" height="30" className="d-inline-block align-top" alt="logo"/>
            {text1}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{text2}</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Action1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">
                Action2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">
                Action3 - Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Carousel>
<Carousel.Item>
<img src="./carousel3.jpg" width="600" height="600" className="d-block w-100" alt="Carousel1" />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Welcome!!!!</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img src="./carousel1.jpg" width="600" height="600" className="d-block w-100" alt="Carousel1" />
  
  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Welcome!!!!</p>
  </Carousel.Caption>
</Carousel.Item>

</Carousel>
</>
  );
}

export default NavbarCarouselBS;