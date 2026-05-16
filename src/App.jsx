import { useState } from 'react'
import './App.css'
import About from './about'
import Cart from './cart'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [category, setCategory] = useState('All')
  const [cart, setCart] = useState([])

  const categories = ['All', ...Array.from(new Set(sampleProducts.map((product) => product.category)))]
  const filteredProducts = sampleProducts.filter(
    (product) => category === 'All' || product.category === category
  )

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <>
      <DarkModeToggle />
      <h1>Fruit Store</h1>
      <div className="filter-bar">
        <label htmlFor="category-filter">Category:</label>
        <select
          id="category-filter"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <ProductList products={filteredProducts} onAdd={addToCart} />
      <div className="cart-section">
        <Cart cartItems={cart} />
      </div>
      <hr />
      <About />
    </>
  )
}

export default App