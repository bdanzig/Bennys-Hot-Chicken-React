import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Input, Label } from 'reactstrap';
import { Navlink, NavLink, Link } from 'react-router-dom';
import '../App.css'

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + "\nPassword: " + this.password.value + "\nRemember: " + this.remember.checked);
        event.preventDefault(); 
    }

    render(){
        return(
            <>
                <Navbar expand="md" className="main-nav">
                    <div className="container">
                        <NavbarToggler className="toggle" onClick={this.toggleNav} />
                        <Link to="/home" className="col-5"><img src="../../assets/images/BHCText.png" alt="Benny's Hot Chicken" width="100%"/></Link>
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
                        <Nav className="ml-auto mr-2" navbar>
                            <NavItem>
                                <Button outline style={{color:"white"}} onClick={this.toggleModal}>
                                    <span style={{color:"white"}}className="fa fa-sign-in fa-lg"></span> Login
                                </Button>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>Remember Me
                                </Label>
                            </FormGroup>
                            <Button className="mt-2" type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>

        )
    }
}
export default Header;