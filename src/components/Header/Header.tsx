import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const Header = () => {
    const { theme, toggleTheme } = useTheme()
    
    return (
        <div className="flex items-center justify-between self-stretch px-[80px] py-4 border-b border-transparent bg-[#030712]">

            <p className="text-[var(--Gray-Dark-900,#F9FAFB)] text-center text-[30px] font-bold leading-[120%] tracking-[-0.6px]">
                <code>{'<SS />'}</code>
            </p>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#projects" className="nav-link">Work</a></li>
                    <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
                <div>
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="icon-btn"
                        title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header