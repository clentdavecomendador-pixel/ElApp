import './App.css'
import { Footer } from './components/partials/footer/footer'
import { Header } from './components/partials/header/header'
import { Main } from './components/partials/main/main'
import { AppRouter } from './router/approuter'

function App() {
  return (
    <>
    <Header />
    <Main>
      <AppRouter />
    </Main>
    <Footer />
    </>
  )
}

export default App
