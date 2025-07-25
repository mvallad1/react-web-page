import { useState } from 'react'
import Nav from './Navigation/Nav.jsx'
import Products from './Products/Products.jsx';
import Recommended from './Recommended/Recommended.jsx';
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return <>
    <Nav />
    <Products />
    <Recommended />

  </>;
}

export default App
