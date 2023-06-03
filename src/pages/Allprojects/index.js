import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Donationbox from '../../components/homepage/donationbox'
import FooterAll from '../../components/homepage/FooterAll'
import Navbar from '../../components/homepage/nav'




function Allprojects() {
  const router = useRouter()
  const [productsInfo, setProductsInfo] = useState([])

	const { success, canceled } = router.query;

	useEffect(() => {
		if (success !== undefined || canceled !== undefined) {
			if (success) {
				console.log(
					'Order placed! You will receive an email confirmation.'
				);
			}

			if (canceled) {
				console.log(
					'Order canceled -- continue to shop around and checkout when you’re ready.'
				);
			}
		}
	}, [success, canceled]);



  useEffect(() => {
    fetch('/api/getdata')
      .then((response) => response.json())
      .then((data) => setProductsInfo(data))
  }, [])

  // Extract category names from products
  const categoriesNames = productsInfo.map((p) => p.category)

  return (
    <div>
    <Navbar/>
    <form action='/api/checkout_sessions' method='POST'>
  
    <div className='absolute top-[100px] left-[50px] '>
      <ul className="container mx-auto">
        {productsInfo.map((product) => (
          <li key={product._id} className="mb-8">

            <div className="flex">
              <div className="w-64 h-48 overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  alt=""
                  src={product.profile}
                  width={600}
                  height={400}
                />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-500 mb-2">description: {product.category}</p>
                <p className="mb-2 " >{product.description}</p>
                <p className="text-gray-500 mb-2">by {product.fullname}</p>
                <button type='submit' role='link' className="bg-green-500 text-white px-4 py-2 rounded">
                  DONATE
                  
					
			
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </form>
  
    <FooterAll/>
  </div>
  
  
  
  
  
        
        
          
          
   
    
  
  )
}

export default Allprojects