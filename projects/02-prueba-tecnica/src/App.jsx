import './App.css'
import { useCatImg } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './components/Otro'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImg({ fact })

  // logica del boton para generar otra imagen
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        <button onClick={handleClick}><span>Generar gatito</span><span>&#8635;</span></button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using first 3 words for ${fact}`} />}
      </section>
      <Otro />
    </main>
  )
}
