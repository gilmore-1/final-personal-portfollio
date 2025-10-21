import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'

const Header = () => {
    const { theme, toggleTheme } = useTheme()
    const [mobileOpen, setMobileOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function handleOutsideClick(e: MouseEvent) {
            if (mobileOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMobileOpen(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => document.removeEventListener('mousedown', handleOutsideClick)
    }, [mobileOpen])

    console.log('Current theme in Header:', theme);
    return (
        <header
            className={`w-full border-b border-transparent ${theme === 'dark' ? 'bg-[#1F2937]' : 'bg-white'}`}
        >
            <div className={`flex items-center justify-between self-stretch px-4 sm:px-6 md:px-[80px] py-4`}>
                <p className={`text-center text-[30px] font-bold leading-[120%] tracking-[-0.6px] ${theme === 'dark' ? 'text-[#F9FAFB]' : 'text-black'}`}>
                    <code>{'<SS />'}</code>
                </p>
                {/* Desktop nav (hidden on small screens) */}
                <nav className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        <li><a href="#about" className={`nav-link ${theme === 'dark' ? 'text-[#F9FAFB]' : 'text-black'}`}>About</a></li>
                        <li><a href="#projects" className={`nav-link ${theme === 'dark' ? 'text-[#F9FAFB]' : 'text-black'}`}>Work</a></li>
                        <li><a href="#testimonials" className={`nav-link ${theme === 'dark' ? 'text-[#F9FAFB]' : 'text-black'}`}>Testimonials</a></li>
                        <li><a href="#contact" className={`nav-link ${theme === 'dark' ? 'text-[#F9FAFB]' : 'text-black'}`}>Contact</a></li>
                    </ul>
                    <div className="flex items-center">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className={`icon-btn ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}
                            title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                        <button className={`btn ml-4 ${theme === 'dark' ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]' : 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'}`}>
                            Download CV
                        </button>
                    </div>
                </nav>

                {/* Mobile actions: hamburger + theme + cv (compact) */}
                <div className="flex items-center md:hidden" ref={menuRef}>
                    <button
                        onClick={() => setMobileOpen(prev => !prev)}
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        className={`p-2 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                    >
                        {/* simple icons */}
                        {mobileOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        )}
                    </button>
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className={`icon-btn ml-2 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}
                        title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>

            {/* Mobile menu panel */}
            <div className={`md:hidden transition-max-h duration-200 ease-in-out overflow-hidden ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className={`${theme === 'dark' ? 'bg-[#111827] text-[#F9FAFB]' : 'bg-white text-black'} px-4 pb-4`}>
                    <ul className="flex flex-col space-y-3 pt-2">
                        <li><a href="#about" onClick={() => setMobileOpen(false)} className="block">About</a></li>
                        <li><a href="#projects" onClick={() => setMobileOpen(false)} className="block">Work</a></li>
                        <li><a href="#testimonials" onClick={() => setMobileOpen(false)} className="block">Testimonials</a></li>
                        <li><a href="#contact" onClick={() => setMobileOpen(false)} className="block">Contact</a></li>
                    </ul>
                    <div className="mt-3 flex items-center space-x-3">
                        <button className={`btn ${theme === 'dark' ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]' : 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'}`}>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </header>
     )
 }
 
 export default Header