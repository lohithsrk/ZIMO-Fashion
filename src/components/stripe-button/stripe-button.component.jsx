import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/Zimo.png'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51J9qWsSJjZfLRrCKTmDY7YwklKmeudG6eP0IbMBewheR9HT3a6TBNM3GFmJX5XIofUNNbrUCYuWAVCnIQgcWaMua00a16VjDYC";

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Zimo Fashion Ltd.'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
