
import React,{Component} from 'react';
import NavbarScroller from './NavbarScroller.view';

const navigation = {
    brand: { name: "NavbarScroller", to: "/" },
    links: [
      { name: "About Me", to: "/about" },
      { name: "Blog", to: "/blog" },
      { name: "Developement", to: "/dev" },
      { name: "Graphic Design", to: "/design" },
      { name: "Contact", to: "/contact" },
    ]
  }

  export const NavbarScrollerContainer:React.FC =()=> {
  
      // Descructured object for cleaner code :-)
      const { brand, links } = navigation;
  
      return (
        <div className="App">
          <NavbarScroller brand={brand} links={links} />
        </div>
      );
    };