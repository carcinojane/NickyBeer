import * as React from 'react';
import {Navbar,Brand,Ul,Li} from '../../assets/css/NavbarScroller';

const NavbarScroller = (props: {
  brand: { name: string; to: string },
  links: Array<{ name: string, to: string }>
}) => {
  const { brand, links } = props;
  const NavLinks: any = () => links.map((link: { name: string, to: string }) => <Li key={link.name}><a href={link.to}>{link.name}</a></Li>);
  return (
    <Navbar>
      <Brand href={brand.to}>{brand.name}</Brand>
      <Ul>
        <NavLinks />
      </Ul>
    </Navbar >
  )
};

export default NavbarScroller;