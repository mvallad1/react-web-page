import React from 'react'
import Category from './Category/Category.jsx'
import Price from './Price/Price'
import Colors from './Colors/Colors'

import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>

            <Category />
            <Price />
            <Colors />
        </section>
    </>
  )
}

export default Sidebar