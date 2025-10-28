import { useTheme } from '../../context/ThemeContext'
import WorkImage from '../../assets/workimagge.png'

const Work = () => {
    const { theme } = useTheme()
    
    const projects = [
        {
            title: 'Fiskil',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Nest.js', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'],
            image: WorkImage
        },
        {
            title: 'Fiskil',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Nest.js', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'],
            image: WorkImage
        },
        {
            title: 'Fiskil',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Nest.js', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'],
            image: WorkImage
        }
    ]
    
    return (
        <section 
            id="work" 
            className="w-full container-main px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 lg:py-24"
            style={{ background: theme === 'dark' ? '#030712' : 'var(--surface)' }}
        >
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 items-center w-full">
                <div className="flex flex-col gap-4 items-center max-w-3xl">
                    <h2 className="work-title">Work</h2>
                    <p className="work-description px-4">Some of the noteworthy projects I have built:</p>
                </div>
                
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="work-card"
                        >
                            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full`}>
                                {/* Image Section */}
                                <div className="work-image-wrapper">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-t-xl md:rounded-none md:rounded-l-xl"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="work-content">
                                    <h3 className="work-project-title">{project.title}</h3>
                                    <p className="work-project-description">{project.description}</p>
                                    
                                    <div className="work-tech-stack">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="work-tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work