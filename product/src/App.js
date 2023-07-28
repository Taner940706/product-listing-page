import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react';

import NavBar from "./Components/Navigation/NavBar";
import Products from "./Components/Products/Products";
import SideBar from './Components/SideBar/SideBar';

import products from "./database/products"



function App() {

  const [query, setQuery] = useState("")
  const [selectedColor, setSelectedColor] = useState(null)
  const handleChangeEvent = event =>{
    setQuery(event.target.value)}
  
    const filteredItems = products.filter(
      (product) => product.title.toLowerCase().indexOf(query.toLowerCase() !== -1)
    );

    const handleColorChange = event => {
      setSelectedColor(event.target.value)
    }



  return <>
  <BrowserRouter>
  <NavBar />
  <SideBar />
      <Products />
  </BrowserRouter>
      
  </>

}

export default App;
