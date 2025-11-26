// https://estailofashion.com/collections/studs-earrings
import Home from "./pages/Home";
import Product from './pages/Product'
import Nav from "./Nav";
import Stupproduct from "./pages/Stupproduct";
import Hoopsproduct from "./pages/Hoopsproduct";
import Pearlproduct from "./pages/Pearlproduct";
import Butterflyproduct from "./pages/Butterflyproduct";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homeproduct from "./pages/Homeproduct";
import Cart from './pages/Cart'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Nav />
        <Home />
        <Routes>
          <Route path='/' element={<Homeproduct />} />

          <Route path='/stupp' element={<Stupproduct />} />
          <Route path='/hook' element={<Hoopsproduct />} />
          <Route path='/pearl' element={<Pearlproduct />} />
          <Route path='/butterfly' element={<Butterflyproduct />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </BrowserRouter>

      {/* <Nav />
      <Home />
      <Product />
      <Stupproduct />
      <Hoopsproduct/>
      <Pearlproduct/>
      <Butterflyproduct/> */}
    </div>
  );
}

export default App;
