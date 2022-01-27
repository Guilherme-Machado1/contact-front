import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu
} from './styled';

export default function Header() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' >
            Contacts
          </NavLink>
          <NavLink to='/createContact' >
            Cadastrar-Contato
          </NavLink>
          <NavLink to='/contact-us' >
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};