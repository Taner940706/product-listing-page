import { BrowserRouter } from 'react-router-dom'

import NavBar from "./Components/Navigation/NavBar";
import Products from "./Components/Products/Products";
import SideBar from './Components/SideBar/SideBar';


function App() {
  return <>
  <BrowserRouter>
  <NavBar />
  <SideBar />
      <Products />
  </BrowserRouter>
      
  </>

}

export default App;
