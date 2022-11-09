import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext)
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to='/'>Cookups</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            {
              user?.email ?
                <>
                  <Link to='/myReview' className='me-4 text-dark fs-5'>My reviews</Link>
                  <Link to='/addService' className='me-3 text-dark fs-5'> Add service</Link>
                  <Link><button onClick={userLogOut} className='btn btn-outline-success'>Log Out</button></Link>
                </>
                :
                <Link to='/login'><button className='btn btn-outline-success'>Log In</button></Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;