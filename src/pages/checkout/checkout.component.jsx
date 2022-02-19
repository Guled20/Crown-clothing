import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';


const CheckOut = ({cartItems,total}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quality</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
        ))
      }
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total:selectCartTotal
})

export default connect(mapStateToProps)(CheckOut);