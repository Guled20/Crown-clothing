import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IvnELAK4hYPkV878TXLsS6MwbLQbUKR4wpKEJ1MybC1Ynvuh06D84sRBYAuQBVPoXxI2Ktj1YAKpUzEKIUxoPlj00or5GqJM2';


    const onToken = token => {
        alert('payment successfull');
        console.log(token);
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crwn Clothing Ltd.'
            billingAddress
            shippingAddress
            image='./favicon.ico'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;