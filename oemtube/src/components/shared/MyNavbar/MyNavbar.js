import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import favicon from '../../../photos/favicon.jpg';
import logo from '../../../photos/oemLogo21.jpg'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
    state = {
        isOpen: true,
        logo:[],
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

   
    render() {
        const { isOpen } = this.state;
       

                return(
                    <div className="MyNavbar">
                      <Navbar expand="xl">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <img className="home-title"to="/home" src={logo} alt="logo"></img>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="navbar-links" tag={RRNavLink} to='/home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="navbar-links" tag={RRNavLink} to='/aboutUs'>About Us</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="navbar-links" tag={RRNavLink} to='/products'>Products</NavLink>
                        </NavItem>
                        {/* <NavItem>
                           <NavLink className="navbar-links" tag={RRNavLink} to='/contactus'>Contact Us</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink className="navbar-links" tag={RRNavLink} to='/requestquote'>Request A Quote</NavLink>
                       </NavItem>
                                     </Nav>
                    </Collapse>
                </Navbar>
              
            </div>
                 )
                }
              }
            
          
            
            export default MyNavbar;