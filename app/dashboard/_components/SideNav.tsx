"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function SideNav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const MenuList=[
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/setting'
        },
    ]

    const path=usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.getElementById('sidebar');
            const menuButton = document.getElementById('menu-button');
            if (sidebar && menuButton && 
                !sidebar.contains(event.target as Node) && 
                !menuButton.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='bg-white'>
            {/* Mobile Menu Button */}
            <button 
                id="menu-button"
                onClick={toggleMobileMenu}
                className='md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary text-white'
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>

            {/* Sidebar Content */}
            <div 
                id="sidebar"
                className={`
                    fixed md:static
                    h-screen w-[240px] 
                    transform transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    p-4 shadow-sm border bg-white
                    z-40
                `}
            >
                <div className='flex justify-center mb-6'>
                    <Image src={'/logo.svg'} alt='logo' width={50} height={50} className="w-[50px] h-[50px]" />
                </div>
                <hr className='my-4 border-gray-200'/>
                <div className='mt-4 flex flex-col gap-2'>
                    {MenuList.map((menu, index)=>(
                        <Link 
                            href={menu.path} 
                            key={index} 
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className={`
                                flex items-center gap-3 p-3
                                hover:bg-primary hover:text-white 
                                rounded-lg transition-colors duration-200
                                ${path===menu.path ? 'bg-primary text-white' : 'text-gray-700'}
                            `}>
                                {React.createElement(menu.icon, {
                                    className: 'h-5 w-5'
                                })}
                                <span className='text-sm font-medium'>{menu.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    )
}

export default SideNav