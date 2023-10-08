import React from 'react'
import { FC } from 'react';
import Link from 'next/link'
interface NavLinkProps{
    to:string;
    label:string;
    icon:JSX.Element;

}
const NavLink: FC<NavLinkProps> =({to,label,icon}) => {
  return (
    <>
    <Link href={to}>
        <div className='ext-[1.1rem] flex items-center justify-start gap-2'>
            {icon} {label}
        </div>
    </Link>
    </>
  )
}


export default NavLink