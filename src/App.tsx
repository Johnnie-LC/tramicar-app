import { Hero } from '@sections/Hero'
import { Steps } from '@sections/Steps'
import { Advantages } from '@sections/Advantages'
import { Footer } from './sections/Footer'
import { Header } from '@sections/Header'
function App() {
  return (
    <main className="bg-lightBg font-sans p-10">
      <Header />
      <Hero />
      <Steps />
      <Advantages />
      <Footer />
    </main>
  )
}

export default App
