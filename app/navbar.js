'use client'

import Image from 'next/image'

import logo from '/public/CSCEC_Logo.svg'

export default function Navbar() {
    return (
        <nav>
            <div className="flex flex-wrap items-center justify-between px-5 py-4 md:px-12">
                <a href="https://3bur.cscec.com">
                    <Image
                        src={logo}
                        alt='China Construction Third Engineering Bureau Group'

                    />
                </a>

                <button type="button" className="md:hidden" onClick={navCollapseToggle}>
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-hidden-area">
                    <ul className="flex flex-col pt-8 space-y-4 md:flex-row md:pt-0 md:space-x-8 md:space-y-0 font-light">
                        <li>
                            <a className="block">Home</a>
                        </li>
                        <li>
                            <a className="block">About Us</a>
                        </li>
                        <li>
                            <a className="block">News Room</a>
                        </li>
                        <li>
                            <a className="block">Expertise</a>
                        </li>
                        <li>
                            <a className="block">Stunning Projects</a>
                        </li>
                        <li>
                            <a className="block">Careers</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function navCollapseToggle() {
    const navbarHiddenArea = document.getElementById('navbar-hidden-area')
    if (navbarHiddenArea.classList.contains('hidden')) {
        navbarHiddenArea.classList.remove('hidden')
    } else {
        navbarHiddenArea.classList.add('hidden')
    }
}