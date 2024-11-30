import Navbar from './sections/Navbar'
import Hero from './sections/hero'
import About from './sections/About'
import Contacts from './sections/Contacts'
import Footer from './sections/Footer' // Import Footer

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar id="navbar"/>
      <Hero id="hero"/>
      <About id="about"/>
      <Contacts id="contacts"/>
      <Footer /> {/* Add Footer */}
    </main>
  )
}

export default App