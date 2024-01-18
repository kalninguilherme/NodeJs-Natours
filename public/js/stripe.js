import { showAlert } from './alerts';
import axios from 'axios';

export const bookTour = async (tourId) => {
  try {
    // const stripe = Stripe('Publishable key ');
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);

    //await stripe.redirectToCheckout({
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });

    //works as expected
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
