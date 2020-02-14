import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_cWRkoNacsagdKblO040iJtYw00qoNbJM3W'

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            currency='GBP'
            name='Crown Clothing'
            billingAddress
            shippingAddres
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            bitcoin
            token={onToken}    
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton