import { BrowserRouter } from 'react-router-dom'

import NavBar from "./Components/Navigation/NavBar";
import Products from "./Components/Products/Products";


function App() {
  return <>
  <BrowserRouter>
  <NavBar />
      <Products />
  </BrowserRouter>
      
  </>

}

export default App;
