import React from 'react';
import { Nav, NavLink, NavMenu } from './styled';

export default function Header() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' >
            Contacts
          </NavLink>
          <NavLink to='/contact/create' >
            Cadastrar-Contato
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};