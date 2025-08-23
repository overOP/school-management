import { menuItems } from '@/data/menuData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div>
        {menuItems.map(i => (
            <div key={i.title}>
                <h2>{i.title}</h2>
                <ul>
                    {i.items.map(item => (
                        <Link href={item.href} key={item.label}>
                            <Image
                             src={item.icon}
                             alt={item.label} 
                             width={20} 
                             height={20} />
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Menu