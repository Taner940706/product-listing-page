import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react';

import NavBar from "./Components/Navigation/NavBar";
import Products from "./Components/Products/Products";
import SideBar from './Components/SideBar/SideBar';

import products from "./database/products"
import Cards from './Components/CardList';



function App() {

  const [query, setQuery] = useState("")
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const handleChangeEvent = (event) =>{
    setQuery(event.target.value)}
  
    const filteredItems = products.filter(
      (product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    );

    const handleColorChange = (event) => {
      setSelectedColor(event.target.value)
    }

  function filteredData(products, selected, query){
    let filteredProducts = products

    if(query){
      filteredProducts = filteredItems;

    }

    if (selected){
      filteredProducts = filteredProducts.filter(
      ({color, price, title}) =>
      color === selected || price === selected || title === selected
      );
    }

    return filteredProducts.map(
      ({id, title, price, description, category, image, color, rating}) => (
        <Cards
        key={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        color={color}
        rating={rating}
        />
      )
    );
  }

  const result = filteredData(products, selectedColor, query)


  return <>
  <BrowserRouter>
  <NavBar query={query} handleChangeEvent={handleChangeEvent} />
  <SideBar handleColorChange={handleColorChange} />
      <Products result={result} />
  </BrowserRouter>
      
  </>

}

export default App;
