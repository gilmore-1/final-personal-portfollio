import { useTheme } from '../../context/ThemeContext'
import UpWorkLogo from '../../assets/logo-upwork.png'
const Experience = () => {
    const { theme } = useTheme()

    const experiences = [
        {
            company: 'Sr. Frontend Developer',
            role: 'Full time',
            period: 'Nov 2021 - Present',
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Ut pretium arcu et massa semper, id fringilla leo semper.',
                'Sed quis justo ac magna.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            logo: UpWorkLogo
        },
        {
            company: 'Team Lead',
            role: 'Full time',
            period: 'Jul 2017 - Oct 2021',
            description: [
                'Sed quis justo ac magna.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Sed quis justo ac magna.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            logo: UpWorkLogo
        },
        {
            company: 'Full Stack Developer',
            role: 'Full time',
            period: 'Dec 2015 - May 2017',
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            logo: UpWorkLogo
        }
    ]

    return (
        <section
            id="experience"
            className="w-full container-main px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 lg:py-24"
            style={{ background: theme === 'dark' ? '#111827' : 'var(--surface)' }}
        >
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 items-center w-full">
                <div className="flex flex-col gap-4 items-center max-w-3xl">
                    <h2 className="experience-title">Experience</h2>
                    <p className="experience-description px-4">Here is a quick summary of my most recent experiences:</p>
                </div>

                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-5xl">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index}
                            className="experience-card"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
                                {/* Logo */}
                                <div className="experience-logo-wrapper">
                                    <img 
                                        src={exp.logo} 
                                        alt={exp.company}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                        <div>
                                            <h3 className="experience-company">{exp.company}</h3>
                                            <p className="experience-role">{exp.role}</p>
                                        </div>
                                        <p className="experience-period">{exp.period}</p>
                                    </div>
                                    
                                    <ul className="experience-list">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="experience-list-item">
                                                <span className="mr-2">•</span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience