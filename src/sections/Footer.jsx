import { navLinks } from "../constants/index.js"

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul className="flex justify-center space-x-4">
                    {navLinks.map(({id, href, name}) => (
                        <li key={id}>
                            <a href={href} className="hover:underline">
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <p className="mt-4"> {/* Ensure no conflicting classes */}
                &copy; {new Date().getFullYear()} David Sundberg. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer