import AppRouter from './AppRouter'
import { PokemonsProvider } from './contexts/pokemons-context'

function App() {
  return (
    <PokemonsProvider>
      <div className='app_container'>
        <AppRouter />
      </div >
    </PokemonsProvider>
  )
}

export default App
