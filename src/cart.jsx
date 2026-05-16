
function Cart({ cartItems = [] }) {
  const total = cartItems.reduce((total, item) => {
    const priceValue = typeof item.price === 'string'
      ? parseFloat(item.price.replace(/[^0-9.]/g, ''))
      : item.price
    return total + (Number.isFinite(priceValue) ? priceValue : 0)
  }, 0)

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name} is in your cart.</li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  )
}

export default Cart;