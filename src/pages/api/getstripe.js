import Stripe from 'stripe'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const productId = 'price_1N6nmsBcKerQbAeJvIqifVc5'

  try {
    const product = await stripe.products.retrieve(productId)

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve product' })
  }
}