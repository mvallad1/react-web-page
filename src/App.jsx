import { useState } from 'react'
import Nav from './Navigation/Nav.jsx'
import Products from './Products/Products.jsx';
import Recommended from './Recommended/Recommended.jsx';
import './index.css'
import Sidebar from './Sidebar/Sidebar.jsx';


function App() {
  const [count, setCount] = useState(0)

  return <div>
    <Sidebar />
    <Nav />
    <Recommended />
    <Products />

  </div>;
}

export default App
