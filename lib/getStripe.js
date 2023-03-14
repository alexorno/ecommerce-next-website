import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51LuBeoGpyr3WOjkTIDJmGwHFzA16tKJvNHQH67SwHzXDSSxyKFtSKFZk7vsc20lbyPbkXypsze6utJopFPTBrNcq00NGLsRUfS');
  }

  return stripePromise;
}

export default getStripe;