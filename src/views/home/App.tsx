import React from 'react';
import './App.css';
import {NavbarScrollerContainer} from '../../components/NavbarScroller';
// import {ProductCardContainer} from '../../components/productCard';
import IndexRouter from '../../routes/router';


function App() {
  return (
    <div>
       <NavbarScrollerContainer />
      <header className="App-header">
      <IndexRouter/>
      {/* <ProductCardContainer/> */}
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
