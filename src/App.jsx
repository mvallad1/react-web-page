import { useState } from 'react'
import Nav from './Navigation/Nav.jsx'
import Products from './Products/Products.jsx';
import Recommended from './Recommended/Recommended.jsx';
import './index.css'
import Sidebar from './Sidebar/Sidebar.jsx';

//database
import products from "./db/data.jsx"
import Card from './components/Card.jsx';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  //------------input filter-------------------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

  //------------Radio filter-------------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  //------------Button filter-------------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({category, color, company, newPrice, title}) => 
          category === selected || 
          color === selected ||
          company === selected || 
          newPrice === selected || 
          title === selected
      );
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice }) => 
      <Card 
      key={Math.random()} 
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      
      />
    );
  }

  return <div>
    <Sidebar />
    <Nav />
    <Recommended />
    <Products />

  </div>;
}

export default App
