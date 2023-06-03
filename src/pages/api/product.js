import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export async function getProductList() {
  const products = await stripe.products.list();
  return products.data;
}
