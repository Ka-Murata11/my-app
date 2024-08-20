'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavItemProps {
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
    label, link, icon
}) => {
    const pathname = usePathname();
    return (
        <Link
            href={link}
            className={`flex text-xl hover:bg-gray-700 font-medium m-2
                ${pathname === link ? 'underline underline-offset-4' : ''}`}
        >
            <div>{icon}</div>
            <div className='ml-1'>{label}</div>
        </Link>
    )
}

export default NavItem