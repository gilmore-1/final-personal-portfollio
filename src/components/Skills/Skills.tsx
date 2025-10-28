import { useTheme } from '../../context/ThemeContext'
import JavascriptIcon from '../../assets/javascript.png'
import TypeScriptIcon from '../../assets/typescript.png'
import ReactIcon from '../../assets/react.png'
import NodejsIcon from '../../assets/nodejs.png'
import NextjsIcon from '../../assets/next.png'
import NestjsIcon from '../../assets/nest.png'
import ExpressIcon from '../../assets/express.png'
import SocketIcon from '../../assets/icon-socket.png'
import PostgreSQLIcon from '../../assets/icon-postgresql.png'
import MongoDBIcon from '../../assets/icon-mongodb.png'
import SassIcon from '../../assets/icon-sass.png'
import TailwindcssIcon from '../../assets/icon-tailwindcss.png'
import FigmaIcon from '../../assets/icon-figma.png'
import CypressIcon from '../../assets/icon-cypress.png'
import StorybookIcon from '../../assets/icon-storybook.png'
import GitIcon from '../../assets/icon-git.png'

const Skills = () => {
  const { theme } = useTheme()
  
  const skills = [
    { name: 'JavaScript', icon: JavascriptIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Next.js', icon: NextjsIcon },
    { name: 'Node.js', icon: NodejsIcon },
    { name: 'Express.js', icon: ExpressIcon },
    { name: 'Nest.js', icon: NestjsIcon },
    { name: 'Socket.io', icon: SocketIcon },
    { name: 'PostgreSQL', icon: PostgreSQLIcon },
    { name: 'MongoDB', icon: MongoDBIcon },
    { name: 'Sass/Scss', icon: SassIcon },
    { name: 'TailwindCSS', icon: TailwindcssIcon },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Cypress', icon: CypressIcon },
    { name: 'Storybook', icon: StorybookIcon },
    { name: 'Git', icon: GitIcon },
  ]
  return (
    <section 
      id="skills" 
      className="w-full container-main px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ background: theme === 'dark' ? '#030712' : 'var(--surface)' }}
    >
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 items-center w-full">
            <div className="flex flex-col gap-3 sm:gap-4 items-center max-w-3xl">
                <h2 className="skills-title">Skills</h2>
                <p className="skills-description px-4">The skills, tools and technologies I am really good at:</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
                {skills.map((skill, index) => (
                    <div 
                        key={skill.name} 
                        className="skill-card group"
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <div className="skill-icon-wrapper">
                            <img 
                                src={skill.icon} 
                                alt={skill.name} 
                                className="skill-icon"
                            />
                        </div>
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills