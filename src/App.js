import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import NavbarComponent from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

import WhatToWatch from './components/projects/WhatToWatch'
import Cnftmeter from './components/projects/Cnftmeter'
import Mocked from './components/projects/Mocked';
import Medroutine from './components/projects/Medroutine'
import About from './components/About'
import Nomatch from './components/Nomatch'

function App() {


  return (
    <>
    
      <>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="w2w" element={<WhatToWatch/>} />
          <Route path="medroutine" element={<Medroutine />} />
          <Route path="cnftmeter" element={<Cnftmeter/>} />
          <Route path="mockde" element={<Mocked />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <Nomatch/>
            }
          />
        </Routes>
        <Footer />

        <Outlet />

      </> 
    </>
  )
}

export default App;
