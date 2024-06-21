import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";



function Nav({logName}) {

    return (
        <div>

            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i class="bi bi-list" style={{ marginRight: '10px' }}></i>
                        Digital Data Integration</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <NavDropdown title={logName} id="basic-nav-dropdown">
                            <NavDropdown.Item >Profil</NavDropdown.Item>
                            <NavDropdown.Item >Setting</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">Sign Out</NavDropdown.Item>
                        </NavDropdown>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Offcanvas for sidebar */}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <Link to="/homepage" style={{ textDecoration: 'inherit', color: 'inherit' }}>Homepage</Link>
                    </div><br/>
                    <div>
                        <Link to="/dashboard" style={{ textDecoration: 'inherit', color: 'inherit' }}>Dashboard</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default Nav