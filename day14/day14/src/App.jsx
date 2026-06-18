import { useMemo, useState } from 'react'
import './App.css'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'fruits', label: 'Fruits' },
  { id: 'veg', label: 'Vegetables' },
  { id: 'dairy', label: 'Dairy' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'beverages', label: 'Beverages' },
]

const products = [
  // Fruits
  { id: 1, name: 'Bananas', category: 'fruits', price: 24, unit: '1 kg', badge: 'Best seller', image: '/images/banana.svg' },
  { id: 2, name: 'Apples', category: 'fruits', price: 89, unit: '1 kg', badge: 'Crunchy', image: '/images/apple.png' },
  { id: 3, name: 'Oranges', category: 'fruits', price: 59, unit: '1 kg', badge: 'Fresh', image: '/images/orange.png' },
  { id: 4, name: 'Grapes', category: 'fruits', price: 79, unit: '500 g', badge: 'Sweet', image: '/images/grapes.png' },
  { id: 5, name: 'Mangoes', category: 'fruits', price: 99, unit: '1 kg', badge: 'Seasonal', image: '/images/mango.png' },
  { id: 6, name: 'Watermelon', category: 'fruits', price: 39, unit: '1 piece', badge: 'Hydrating', image: '/images/watermelon.png' },
  { id: 7, name: 'Strawberries', category: 'fruits', price: 129, unit: '250 g', badge: 'Premium', image: '/images/strawberries.png' },
  { id: 8, name: 'Papaya', category: 'fruits', price: 49, unit: '1 kg', badge: 'Nutritious', image: '/images/papaya.png' },
  { id: 9, name: 'Kiwi', category: 'fruits', price: 69, unit: '500 g', badge: 'Exotic', image: '/images/kiwi.png' },
  { id:10, name: 'Pineapple', category: 'fruits', price: 59, unit: '1 piece', badge: 'Tropical', image:'/images/pineapple.png' },

  // Vegetables
  { id: 11, name: 'Fresh Spinach', category: 'veg', price: 34, unit: '250 g', badge: 'Green choice', image: '/images/spinach.svg' },
  { id:12, name:'Tomatoes', category:'veg', price:28, unit:'1 kg', badge:'Farm fresh', image:   '/images/tomato.svg' },
  { id: 13, name: 'Carrots', category: 'veg', price: 32, unit: '500 g', badge: 'Crunchy', image: '/images/spinach.svg' },
  { id: 14, name: 'Onions', category: 'veg', price: 22, unit: '1 kg', badge: 'Essential', image: '/images/tomato.svg' },
  { id: 15, name: 'Broccoli', category: 'veg', price: 45, unit: '500 g', badge: 'Healthy', image: '/images/spinach.svg' },
  { id: 16, name: 'Cabbage', category: 'veg', price: 18, unit: '1 kg', badge: 'Budget', image: '/images/spinach.svg' },
  { id: 17, name: 'Bell Peppers', category: 'veg', price: 38, unit: '500 g', badge: 'Colorful', image: '/images/tomato.svg' },
  { id: 18, name: 'Cucumber', category: 'veg', price: 15, unit: '500 g', badge: 'Fresh', image: '/images/spinach.svg' },
  { id: 19, name: 'Garlic', category: 'veg', price: 52, unit: '500 g', badge: 'Aromatic', image: '/images/tomato.svg' },
  { id: 20, name: 'Ginger', category: 'veg', price: 68, unit: '500 g', badge: 'Spicy', image: '/images/spinach.svg' },

  // Dairy
  { id: 21, name: 'Curd Cup', category: 'dairy', price: 29, unit: '500 g', badge: 'Daily fresh', image: '/images/curd.svg' },
  { id: 22, name: 'Cheese Slice', category: 'dairy', price: 99, unit: '200 g', badge: 'Creamy', image: '/images/cheese.svg' },
  { id: 23, name: 'Milk Pouch', category: 'dairy', price: 49, unit: '500 ml', badge: 'Pure', image: '/images/curd.svg' },
  { id: 24, name: 'Paneer', category: 'dairy', price: 119, unit: '250 g', badge: 'Premium', image: '/images/cheese.svg' },
  { id: 25, name: 'Butter', category: 'dairy', price: 189, unit: '500 g', badge: 'Natural', image: '/images/cheese.svg' },
  { id: 26, name: 'Yogurt', category: 'dairy', price: 35, unit: '400 g', badge: 'Probiotic', image: '/images/curd.svg' },
  { id: 27, name: 'Ghee', category: 'dairy', price: 299, unit: '500 ml', badge: 'Pure', image: '/images/curd.svg' },
  { id: 28, name: 'Mozzarella', category: 'dairy', price: 149, unit: '200 g', badge: 'Italian', image: '/images/cheese.svg' },
  { id: 29, name: 'Condensed Milk', category: 'dairy', price: 79, unit: '400 g', badge: 'Sweet', image: '/images/curd.svg' },
  { id: 30, name: 'Cream', category: 'dairy', price: 89, unit: '200 ml', badge: 'Rich', image: '/images/cheese.svg' },

  // Snacks
  { id: 31, name: 'Masala Peanuts', category: 'snacks', price: 39, unit: '100 g', badge: 'Spicy', image: '/images/peanuts.svg' },
  { id: 32, name: 'Chips', category: 'snacks', price: 19, unit: '40 g', badge: 'Crispy', image: '/images/peanuts.svg' },
  { id: 33, name: 'Cookies', category: 'snacks', price: 29, unit: '250 g', badge: 'Sweet', image: '/images/peanuts.svg' },
  { id: 34, name: 'Granola Bars', category: 'snacks', price: 49, unit: '300 g', badge: 'Healthy', image: '/images/peanuts.svg' },
  { id: 35, name: 'Cashews', category: 'snacks', price: 159, unit: '250 g', badge: 'Premium', image: '/images/peanuts.svg' },
  { id: 36, name: 'Almonds', category: 'snacks', price: 139, unit: '250 g', badge: 'Nutritious', image: '/images/peanuts.svg' },
  { id: 37, name: 'Popcorn', category: 'snacks', price: 29, unit: '100 g', badge: 'Light', image: '/images/peanuts.svg' },
  { id: 38, name: 'Trail Mix', category: 'snacks', price: 59, unit: '200 g', badge: 'Mixed', image: '/images/peanuts.svg' },
  { id: 39, name: 'Namkeen', category: 'snacks', price: 24, unit: '200 g', badge: 'Savory', image: '/images/peanuts.svg' },
  { id: 40, name: 'Muesli', category: 'snacks', price: 69, unit: '500 g', badge: 'Breakfast', image: '/images/peanuts.svg' },

  // Beverages
  { id: 41, name: 'Cold Coffee', category: 'beverages', price: 59, unit: '200 ml', badge: 'Chilled', image: '/images/coffee.svg' },
  { id: 42, name: 'Energy Drink', category: 'beverages', price: 49, unit: '250 ml', badge: 'Boost', image: '/images/energydrink.svg' },
  { id: 43, name: 'Orange Juice', category: 'beverages', price: 39, unit: '200 ml', badge: 'Fresh', image: '/images/energydrink.svg' },
  { id: 44, name: 'Soft Drink', category: 'beverages', price: 29, unit: '300 ml', badge: 'Fizzy', image: '/images/energydrink.svg' },
  { id: 45, name: 'Iced Tea', category: 'beverages', price: 39, unit: '250 ml', badge: 'Refreshing', image: '/images/coffee.svg' },
  { id: 46, name: 'Sports Drink', category: 'beverages', price: 49, unit: '500 ml', badge: 'Hydration', image: '/images/energydrink.svg' },
  { id: 47, name: 'Lemonade', category: 'beverages', price: 34, unit: '200 ml', badge: 'Natural', image: '/images/energydrink.svg' },
  { id: 48, name: 'Coconut Water', category: 'beverages', price: 39, unit: '200 ml', badge: 'Organic', image: '/images/coffee.svg' },
  { id: 49, name: 'Lassi', category: 'beverages', price: 29, unit: '250 ml', badge: 'Traditional', image: '/images/coffee.svg' },
  { id: 50, name: 'Milk Shake', category: 'beverages', price: 59, unit: '300 ml', badge: 'Creamy', image: '/images/energydrink.svg' },
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [imageErrors, setImageErrors] = useState({})

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, search])

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((product) => product.id === item.id)
      if (existing) {
        return prev.map((product) =>
          product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product,
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleImageError = (productId) => {
    setImageErrors((prev) => ({ ...prev, [productId]: true }))
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark">B</span>
          Blinkit Clone
        </div>
        <div className="header-actions">
          <div className="location">Deliver to: <strong>Home</strong></div>
          <div className="cart-chip">🛒 {cartCount > 0 && <span>{cartCount}</span>}</div>
        </div>
      </header>

      <main className="app-main">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Fast grocery delivery</p>
            <h1>Groceries in minutes, at your door.</h1>
            <p className="hero-text">
              Choose from fresh fruits, snacks, dairy, beverages and more. Order now and get instant savings.
            </p>
            <div className="search-group">
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search for fruits, dairy, snacks..."
              />
              <button type="button">Search</button>
            </div>
            <div className="hero-badges">
              <div>10 mins delivery</div>
              <div>1000+ products</div>
              <div>Free delivery over ₹199</div>
            </div>
          </div>
          <div className="hero-card">
            <h2>Daily essentials</h2>
            <p>Save more with quick deals and everyday low prices.</p>
            <div className="hero-product-chip">Fresh fruits</div>
            <div className="hero-product-chip">Healthy snacks</div>
            <div className="hero-product-chip">Drinks</div>
          </div>
        </section>

        <section className="categories-panel">
          <h2>Shop by category</h2>
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category.id}
                className={selectedCategory === category.id ? 'category-pill active' : 'category-pill'}
                onClick={() => setSelectedCategory(category.id)}
                type="button"
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        <section className="products-panel">
          <div className="products-header">
            <div>
              <h2>Fresh picks for you</h2>
              <p>{filteredProducts.length} products available</p>
            </div>
            <div className="sort-chip">Showing {selectedCategory === 'all' ? 'all categories' : selectedCategory}</div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-badge">{product.badge}</div>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.unit}</p>
                </div>
                <div className="product-footer">
                  <span>₹{product.price}</span>
                  <button type="button" onClick={() => addToCart(product)}>Add</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <aside className="cart-summary">
        <div className="cart-header">
          <h2>Your bag</h2>
          <p>{cartCount} items</p>
        </div>
        {cart.length === 0 ? (
          <div className="empty-cart">Your cart is empty. Add fresh items to start.</div>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.quantity} × ₹{item.price}</p>
                </div>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        )}
        <div className="cart-total">
          <span>Total</span>
          <strong>₹{cartTotal}</strong>
        </div>
        <button type="button" className="checkout-button">Proceed to checkout</button>
      </aside>
    </div>
  )
}

export default App
