import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

// customHook
export function useCatImg ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // para recuperar la imagen cada vez que tengamos una cita nueva
  useEffect(() => {
    if (!fact) return // esto es para ver si no existe fact, hace el return
    // Extraer las primeras 3 palabras del resultado los junta en un [] y con join, las uno en un string con el separador ' '
    const firstWord = fact.split(' ', 3).join(' ')
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
