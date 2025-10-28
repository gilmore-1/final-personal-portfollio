import { useTheme } from '../../context/ThemeContext'
import VectorImage from '../../assets/vector.png'
const Testimonials = () => {
    const { theme } = useTheme()
    
    return (
        <section 
            id="testimonials" 
            className="w-full container-main px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 lg:py-24"
            style={{ background: theme === 'dark' ? '#111827' : 'var(--surface)' }}
        >
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 items-center w-full">
                <div className="flex flex-col gap-4 items-center max-w-3xl">
                    <h2 className="testimonials-title">Testimonials</h2>
                    <p className="testimonials-description px-4">Nice things people have said about me:</p>
                </div>
                
                <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full justify-center items-center">
                    <div 
                        className="flex w-full sm:w-auto sm:min-w-[280px] sm:max-w-[380px] p-6 sm:p-8 md:p-10 lg:p-12 flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 flex-1 self-stretch rounded-xl text-center min-h-[380px] sm:min-h-[400px] md:min-h-[430px]"
                        style={{ 
                            background: theme === 'dark' ? '#1F2937' : 'var(--Gray-100)',
                            boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.15)'
                        }}
                    >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full" style={{ backgroundColor: '#9CA3AF' }}>
                            <img src={VectorImage} alt="Vector" className="w-10 h-10" />
                        </div>
                        <p className="testimonial-text">Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.</p>
                        <div className="testimonial-author">
                            {/* <img src={AuthorImage} alt="Author" className="testimonial-author-image" /> */}
                            <p className="testimonial-author-name">John Doe</p>
                            <p className="testimonial-author-role">Founder at Niraj Patel</p>
                        </div>
                    </div>
                    <div 
                        className="flex w-full sm:w-auto sm:min-w-[280px] sm:max-w-[380px] p-6 sm:p-8 md:p-10 lg:p-12 flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 flex-1 self-stretch rounded-xl text-center min-h-[380px] sm:min-h-[400px] md:min-h-[430px]"
                        style={{ 
                            background: theme === 'dark' ? '#1F2937' : 'var(--Gray-100)',
                            boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.15)'
                        }}
                    >
                         <div className="flex items-center justify-center w-16 h-16 rounded-full" style={{ backgroundColor: '#9CA3AF' }}>
                            <img src={VectorImage} alt="Vector" className="w-10 h-10" />
                        </div>
                        <p className="testimonial-text">Sagar is a great developer! He is very professional and always delivers on time. I would recommend him to anyone looking for a frontend developer.</p>
                        <div className="testimonial-author">
                            {/* <img src={AuthorImage} alt="Author" className="testimonial-author-image" /> */}
                            <p className="testimonial-author-name">John Doe</p>
                            <p className="testimonial-author-role">Founder at Raj Patel</p>
                        </div>
                    </div>
                    <div 
                        className="flex w-full sm:w-auto sm:min-w-[280px] sm:max-w-[380px] p-6 sm:p-8 md:p-10 lg:p-12 flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 flex-1 self-stretch rounded-xl text-center min-h-[380px] sm:min-h-[400px] md:min-h-[430px]"
                        style={{ 
                            background: theme === 'dark' ? '#1F2937' : 'var(--Gray-100)',
                            boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.15)'
                        }}
                    >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full" style={{ backgroundColor: '#9CA3AF' }}>
                            <img src={VectorImage} alt="Vector" className="w-10 h-10" />
                        </div>
                        <p className="testimonial-text">Sagar is a great developer! He is very professional and always delivers on time. I would recommend him to anyone looking for a frontend developer.</p>
                        <div className="testimonial-author">
                            {/* <img src={AuthorImage} alt="Author" className="testimonial-author-image" /> */}
                            <p className="testimonial-author-name">John Doe</p>
                            <p className="testimonial-author-role">Founder at John Doe</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonials