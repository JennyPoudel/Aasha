import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function Ashalogo() {
  return (
    <div>
    <Link href= "/">
    <button className='cursor-pointer' >
   <Image
         src="/../public/assets/ashalogo.png"
         alt="/"
         width="200"
         height="20"
         
       />
 
   </button>
    </Link>
    
     
    </div>
  )
}

export default Ashalogo;