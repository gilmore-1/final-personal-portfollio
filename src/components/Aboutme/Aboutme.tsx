import AvatarImage from '../../assets/avatar2.png'
import { useTheme } from '../../context/ThemeContext'

const Aboutme = () => {
  const { theme } = useTheme()
  
  return (
    <section 
      id="about" 
      className="w-full container-main px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ background: theme === 'dark' ? '#030712' : 'var(--surface)' }}
    >
        <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center md:items-start max-w-full">
            {/* Image Section */}
            <div className="w-full md:w-[380px] lg:w-[440px] xl:w-[480px] shrink-0">
                <div className="relative w-full">
                    <img 
                        src={AvatarImage} 
                        alt="About me" 
                        className="w-full h-auto object-cover rounded-lg"
                        style={{ border: `8px solid ${theme === 'dark' ? '#374151' : 'var(--Gray-200)'}` }}
                    />
                </div>
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 flex-1 w-full">
                <h2 className="about-title">Curious about me? Here you have it:</h2>
                
                <p className="about-description">
                    I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                </p>
                
                <p className="about-description">
                    I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </p>
                
                <p className="about-description">
                    I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                </p>
                
                <p className="about-description">
                    When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                </p>
                
                <div className="flex flex-col gap-2 sm:gap-3 mt-2">
                    <p className="about-subtitle">Finally, some quick bits about me.</p>
                    <ul className="list-none space-y-1.5 sm:space-y-2 pl-0">
                        <li className="about-description flex items-start">
                            <span className="mr-2 shrink-0">•</span>
                            <span>B.E. in Computer Engineering</span>
                        </li>
                        <li className="about-description flex items-start">
                            <span className="mr-2 shrink-0">•</span>
                            <span>Full time freelancer</span>
                        </li>
                        <li className="about-description flex items-start">
                            <span className="mr-2 shrink-0">•</span>
                            <span>Avid learner</span>
                        </li>
                        <li className="about-description flex items-start">
                            <span className="mr-2 shrink-0">•</span>
                            <span>Aspiring indie hacker</span>
                        </li>
                    </ul>
                </div>
                
                <p className="about-description">
                    One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😊
                </p>
            </div>
        </div>
    </section>
  );
};

export default Aboutme;