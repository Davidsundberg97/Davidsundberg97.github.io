import { navLinks } from "../constants/index.js"

const Footer = () => {
    return (
        <footer className="footer text-white">
            <p className="mt-4 text-white"> 
                &copy; {new Date().getFullYear()} David Sundberg. All rights reserved. This work is based on "Old Computers" (https://sketchfab.com/3d-models/old-computers-7bb6e720499a467b8e0427451d180063) by Rafael Rodrigues (https://sketchfab.com/RafaelBR873D) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
            </p>
        </footer>
    )
}

export default Footer