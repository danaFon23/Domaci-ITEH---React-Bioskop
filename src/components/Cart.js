import React from 'react'

const Cart = ({cartItems, handleAddMovie, handleRemoveMovie}) => {

    const totalPrice = cartItems.reduce( (price, item) => price + item.quantity * item.price, 0);   
  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart items</div>

      {cartItems.length === 0 ? (
        <div className="cart-items-empty">Sorry, no items added in a cart!</div>
      ) : (
        <></>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className='cart-items-name'>{item.title}</div>
            <div className='cart-items-function'>
                <button className='cart-items-add' onClick={() => handleAddMovie}>+</button>
                <button className='cart-items-remove' onClick={() => handleRemoveMovie(item)}>-</button>
            </div>
            <div className='cart-items-price'> {item.quantity} * RSD{item.price}</div>
          </div>
        ))}
      </div>
      <div className='cart-items-total-price-name'> 
        Total price:
        <div className='cart-items-total-price'>RSD{totalPrice}</div>
      </div>
    </div>
  );
}

export default Cart