import { useTheme } from '../../context/ThemeContext'
import { SiGooglemaps } from "react-icons/si";
import {  FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
const Touch = () => {
    const { theme } = useTheme()
    
    return (
        <section id="touch" className="w-full container-main px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 lg:py-24"
            style={{ background: theme === 'dark' ? '#030712' : 'var(--surface)' }}
        >
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 items-center w-full">
                <div className="flex flex-col gap-4 items-center max-w-3xl">
                    <h2 className="flex px-5 py-1 justify-center items-center rounded-xl text-sm font-medium"
                        style={{ 
                            background: theme === 'dark' ? '#374151' : 'var(--Gray-200)',
                            color: theme === 'dark' ? '#F9FAFB' : 'var(--text)'
                        }}
                    >
                        Get in touch
                    </h2>
                    <p className="text-center text-xl font-normal leading-7 px-4"
                        style={{ color: theme === 'dark' ? '#D1D5DB' : 'var(--text-muted)' }}
                    >
                        I'm always looking for new opportunities and collaborations. If you have any questions or want to work together, feel free to contact me.
                    </p>
                </div>
                <div className="flex flex-col gap-4 items-center max-w-3xl">
                    <div className="flex items-center gap-2">
                        <SiGooglemaps className="w-4 h-4 shrink-0" style={{ color: 'var(--text-muted)' }} />
                        <span className="hero-stat">Ahmedabad, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhone className="w-4 h-4 shrink-0" style={{ color: 'var(--text-muted)' }} />
                        <span className="hero-stat">+91 9876543210</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="w-4 h-4 shrink-0" style={{ color: 'var(--text-muted)' }} />
                        <span className="hero-stat">sagarpatel@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Touch