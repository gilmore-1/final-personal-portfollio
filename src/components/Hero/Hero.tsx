import AvatarImage from '../../assets/avatar.png'
import { SocialIcon } from 'react-social-icons'
import { SiGooglemaps } from "react-icons/si";
import { FaCircle } from "react-icons/fa";
import { useTheme } from '../../context/ThemeContext'

export const Hero = () => {
    const { theme } = useTheme()
    
    return (
        <section 
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6 md:px-20 py-12 md:py-24 container-main"
            style={{ background: theme === 'dark' ? '#030712' : 'var(--surface)' }}
        >
            <div className="flex flex-col justify-between items-start gap-8 w-full md:flex-1 p-4 md:p-8 lg:p-16">
                <div className="w-full">
                    <h1 className="hero-title">Hi, I'm Sagar 👋</h1>
                    <p className="hero-description">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                </div>
                <div className="w-full flex flex-col space-y-3">
                    <div className="flex items-center space-x-2">
                        <SiGooglemaps className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                        <span className="hero-stat">Ahmedabad, India</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaCircle className="w-4 h-4" style={{ color: 'var(--color-emerald-500)' }} />
                        <span className="hero-stat">Available for new projects</span>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <SocialIcon url="https://www.linkedin.com/in/sagar-patel-b7b2b2b2b2b2/" className="w-10 h-10" />
                    <SocialIcon url="https://github.com/sagarpatel" className="w-10 h-10" />
                    <SocialIcon url="https://x.com/sagarpatel" className="w-10 h-10" />
                </div>
            </div>
            <div className="w-full md:w-[280px] lg:w-[320px] p-4 md:p-0">
                <div 
                    className="rounded-lg w-full h-64 md:h-80 lg:h-96 relative overflow-hidden" 
                    style={{ 
                        background: 'var(--Gray-200)', 
                        border: `8px solid ${theme === 'dark' ? '#030712' : 'var(--Gray-900)'}` 
                    }}
                >
                    <img src={AvatarImage} alt="avatar" className="w-full h-full object-cover object-center" />
                </div>
            </div>
        </section>
    );
}; 