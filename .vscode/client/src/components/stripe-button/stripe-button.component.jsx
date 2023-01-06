import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/Zimo.png';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51J9qWsSJjZfLRrCKTmDY7YwklKmeudG6eP0IbMBewheR9HT3a6TBNM3GFmJX5XIofUNNbrUCYuWAVCnIQgcWaMua00a16VjDYC';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token: token
			}
		})
			.then((response) => {
				alert('succesful payment');
			})
			.catch((error) => {
				console.log('Payment Error: ', error);
				alert(
					'There was an issue with your payment! Please make sure you use the provided credit card.'
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='ZIMO-Fashion Ltd.'
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
