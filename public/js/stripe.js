import { showAlert } from './alerts';
import axios from 'axios';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    //works as expected
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
