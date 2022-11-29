//import { Link } from "react-router-dom";

import '../../styles/components/Layout.css';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id= "Nav">
          <NavbarBrand id="LOGO" href="/">
            <img src="/imagenes/LOGO.png" width="250" alt="Delfina Bunge Deco"/>
          </NavbarBrand>
        <Navbar id="NavContainer" color="white" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/SobreMi">Sobre Mi</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Servicios">Servicios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Guias">Guías y tips</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Productos">Productos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contacto">Contacto</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        <div id='btnTienda'>
        <button id="boton" className="btn btn-primary">
        <a href='https://delfinabungedeco.com.ar/' target='blank'>Tienda</a></button>
        </div>
        </Navbar>
      </div>
    );
  }
}
