import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Navlink, NavLink, Link } from 'react-router-dom';
import '../App.css'

class Header extends Component {

    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <>
                <Navbar expand="md" className="main-nav">
                    <div className="container">
                        <NavbarToggler className="toggle" onClick={this.toggleNav} />
                        <img href="/home" src="../../assets/images/BHCText.png" alt="Benny's Hot Chicken" width="50%"/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-5">
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                        <img src="../../assets/images/BHCLogo.png"  width="3%"/>
                    </div>
                </Navbar>
                <Jumbotron className="header-banner">
                    <div className="container">
                       <div className="row row-header">
                           <div className="col-12 col-sm-6 ml-2">
                               <h1 style={{color: '#FFFDD0'}}>👋<b> &nbsp; Hey there. Hungry?</b></h1>
                               <p style={{color: '#FFFDD0'}}>Welcome to Benny Automatic's original restaurant located in the heart of beautiful, sunny Somalia. Our flavors are bold and absolutely divine. Come in, sit down, and feast.</p>
                           </div>
                       </div>
                    </div>
                </Jumbotron>
            </>

        )
    }
}
export default Header;