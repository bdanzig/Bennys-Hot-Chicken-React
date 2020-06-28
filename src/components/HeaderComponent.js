import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import '../App.css'

class Header extends Component {
    render(){
        return(
            <>
                <Navbar style={{"background-color":"#696969"}}>
                    <div className="container">
                        <img src="../../assets/images/BHCText.png" width="50%"/>
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