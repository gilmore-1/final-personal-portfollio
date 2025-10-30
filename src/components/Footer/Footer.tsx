export const Footer = () => {
    return (
        <footer className="w-full container-main px-4 sm:px-6 md:px-12 lg:px-20 py-6">
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 items-center w-full">
                <p className="text-center text-sm font-normal leading-7">
                    &copy; {new Date().getFullYear()} Sagar Patel. All rights reserved.
                </p>
            </div>
        </footer>
    )
}   
export default Footer;