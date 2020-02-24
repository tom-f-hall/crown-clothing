import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors.js'

import {
    CheckoutPageContainer,
    CheckoutHeader,
    CheckoutHeaderBlock,
    CheckoutTotal,
    CheckoutTestWarning
} from './checkout.styles'

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <CheckoutHeaderBlock>
                <span>Product</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Description</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Quantity</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Price</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Remove</span>
            </CheckoutHeaderBlock>
        </CheckoutHeader>
        {
            cartItems.length ? (
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />   
                )
            ) : (
                <span>No cart items</span>
            )



        }

        <CheckoutTotal>
            <span>TOTAL: ${cartTotal}</span>
            <CheckoutTestWarning>
            * Please use the following test credit card for payments *
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </CheckoutTestWarning>

            <StripeCheckoutButton price={cartTotal}/>
        </CheckoutTotal>
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)