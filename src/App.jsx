import Navbar from './sections/Navbar'
import Hero from './sections/hero'
import About from './sections/About'
import Projects from './sections/Projects' // Import Projects
import Contacts from './sections/Contacts'
import Footer from './sections/Footer' // Import Footer
import ShootingStars from './components/ShootingStars' // Import ShootingStars

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <ShootingStars /> {/* Add ShootingStars */}
      <Navbar id="navbar"/>
      <Hero id="hero"/>
      <About id="about"/>
      <Projects id="projects"/> {/* Add Projects */}
      <Contacts id="contacts"/>
      <Footer /> {/* Add Footer */}
    </main>
  )
}

export default App