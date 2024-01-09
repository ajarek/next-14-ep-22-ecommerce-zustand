import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <nav>
        <div className='navbar justify-between bg-base-300'>
          <Link href='/' className='btn btn-ghost text-lg'>Next Amazona V2</Link>
        <ul className='flex'>
            <li>
            <Link href='/cart' className='btn btn-ghost text-lg'>Cart</Link>
              </li>    
              <li>
            <Link href='/signin' className='btn btn-ghost text-lg'>Sign in</Link>
              </li>   
        </ul>
        </div>
       
      </nav>
    </div>
  )
}

export default Header
