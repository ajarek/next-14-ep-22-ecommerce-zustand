'use client'
import {useEffect, useState} from 'react'
import useCartService  from '@/lib/hooks/useCartStore'
import Link from 'next/link'

const Menu = () => {
  const { items } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <ul className='flex items-stretch'>
      <li>
        <Link href='/cart' className='btn btn-ghost rounded-btn'>
          Cart
          {mounted && items.length !=0 && (
            <div className='badge badge-secondary'>{items.reduce((a, b) => a + b.qty, 0)}</div>
          )}
        </Link>
      </li>
      <li>
        <button className='btn btn-ghost rounded-btn' type='button'>Sign in</button>
      </li>
    </ul>
  )
}

export default Menu