import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="overflow-x-hidden text-black antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="flixed top-0 -z-10 h-full w-full"></div>
      
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,163,255,0.13),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App