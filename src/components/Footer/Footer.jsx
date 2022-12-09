import React  from 'react'
import './footer.css';
import logo from '../../assets/images/eco-logo.png'
import { Container , Row , Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
      <Row>
        <Col lg='4' className="mb-4">
            <div className='logo'>
              <img src={logo} alt='logo'></img>
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit. 
              At ad quae nobis tenetur labore, 
              deserunt laudantium sit vel architecto dolorum!
            </p>
        </Col>
        <Col lg='3' className="mb-4" md='6'>
          <div className='footer__quick-links'>
            <h4 className="quick__links-title">Top Categorys</h4>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Mobile Phones</Link>
              </ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Modern Sofa</Link>
              </ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Arm Chairs</Link>
              </ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='2' className="mb-4" md='3'>
          <div className='footer__quick-links'>
            <h4 className="quick__links-title">Useful Link </h4>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/shop">Shop</Link>
              </ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/cart">Cart</Link>
              </ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/login">Login</Link>
              </ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
          </Col>
        <Col lg='3' md='4'>
        <div className='footer__quick-links'>
            <h4 className="quick__links-title">Contact</h4>
            <ListGroup className="footer__contact">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i class="ri-map-pin-line"></i></span>
                <p>Mathura , Uttar Pradesh , India</p>
              </ListGroupItem>
            
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i class="ri-phone-line"></i></span>
                <p>+919512345678</p>
              </ListGroupItem>
    
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
              <span><i class="ri-mail-line"></i></span>
                <p>raeyan123@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="12">
          <p className='footer__copyright'>Copyright {year} developed by Reayan Khan. All rights reserved. </p>
        </Col>
      </Row>
    </Container>
    </footer>
  )
}

export default Footer