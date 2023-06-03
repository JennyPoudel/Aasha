// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

// export default function ProductPage() {
//   const router = useRouter()
//   const productId = 'price_1N6nmsBcKerQbAeJvIqifVc';
//   const [product, setProduct] = useState(null)

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`/api/getstripe`)
//         const productData = await response.json()

//         setProduct(productData)
//       } catch (error) {
//         console.error('Error fetching product:', error)
//       }
//     }

//     if (productId) {
//       fetchProduct()
//     }
//   }, [productId])

//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <p>Product ID: {product.id}</p>
//       <p>Name: {product.name}</p>
//       <p>Price: {product.price}</p>
//       {/* Add additional product details as needed */}
//     </div>
//   )
// }
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const session = await stripe.checkout.sessions.retrieve(sessionId);
const productId = session.display_items[0].custom.name;
// Perform any desired actions with the product ID
console.log(productId);