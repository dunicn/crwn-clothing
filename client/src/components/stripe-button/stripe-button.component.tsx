import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { connect } from 'react-redux';

import { checkOutSuccess } from '../../redux/cart/cart.actions';

interface StripeCheckoutButtonInterface {
  price: number;
  checkOutSuccess: any;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonInterface> = ({
  price,
  checkOutSuccess,
}) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IMT4fGJgT6Ofa14GZSFWvvQk8Ip6bgIhTeTbZQSvtFeVEf9VZ7anvAMDbE6IsBTOEKSurGj0n3W9ULEi9IlEqhj00AI9wE1dZ';

  const onToken = (token: any) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('Payment successful');
        checkOutSuccess();
      })
      .catch((error) => {
        console.log('Payment error: ', error.response);
        alert(
          'There was an issue with your payment. Please sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  checkOutSuccess: () => dispatch(checkOutSuccess()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
